import openai from '@/app/lib/openai'
import { OpenAIStream, StreamingTextResponse, streamText } from 'ai'
import { NextResponse } from 'next/server'
import { ChatCompletionMessage, ChatCompletionSystemMessageParam, ChatCompletionUserMessageParam } from 'openai/resources/index.mjs';
import { getEmbedding } from '../pinecone/route';
import { auth } from '@clerk/nextjs/server';
import { chatsIndex } from '@/app/lib/pinecone';
import { db } from '@/app/lib/db';

type Message={
  role:string;
  content:string;
}
export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse('Missing OpenAI API Key.', { status: 400 })
    }

    const { messages } = await req.json();
    
    //채팅 기록 저장을 위한(ai && user)
    // vector embedding이 검색할 수 있는 범위 좁히기
    const messagesTruncated=messages.slice(-6);
    
    console.log(JSON.stringify(messagesTruncated));
    

    //전체 채팅 영역을 벡터 임베딩으로 변환 
    const embedding=await getEmbedding(
      messagesTruncated.map((message:Message)=>message.content).join("\n")
    );

    const {userId}=auth();

    
    if(!userId){
      return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
  }
    
    const vectorQueryResponse=await chatsIndex.query({
      vector:embedding,
      topK:1,
      filter:{userId}
    });

    const relevantChats=await db.category.findMany({
      where:{id:{
        in:vectorQueryResponse.matches.map((match)=>parseInt(match.id))
      }
    }});
      
    //console.log('Relevant chats found',relevantChats);
    
    const systemMessage:ChatCompletionSystemMessageParam={
      role:"system",
      content:"You are an intelligent chat-taking app. You answer the user's quesiton based on their existing chats."+
      "the relevant chats for this query are:\n"+
      relevantChats.map((chat)=>`Title:${chat.title}\n\nContent:\n${chat.content}`).join("\n\n")
    };

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages:[systemMessage, ...messagesTruncated],
    })

  
    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
    
  } catch (error) {
    return new NextResponse('Something went wrong!', {
      status: 500
    })
  }

}

 // await fetch('/api/chat', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       question: messages.filter((m)=>m.role==='user').map((m) => m.content)[0],
        //       content: messages.filter((m)=>m.role==='assistant').map((m)=>m.content)[0],
        //       categoryId:id
        //     })
        //   })


