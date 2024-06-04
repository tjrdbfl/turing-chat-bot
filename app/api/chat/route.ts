import openai from '@/app/lib/openai'
import { OpenAIStream, StreamingTextResponse, streamText } from 'ai'
import { NextResponse } from 'next/server'
import { ChatCompletionMessage, ChatCompletionSystemMessageParam, ChatCompletionUserMessageParam } from 'openai/resources/index.mjs';
import { getEmbedding } from '../pinecone/route';
import { auth } from '@clerk/nextjs/server';
import { chatsIndex } from '@/app/lib/pinecone';
import { db } from '@/app/lib/db';
import { Message } from '@/app/types/chat';


export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse('Missing OpenAI API Key.', { status: 400 })
    }

    const { messages } = await req.json();
    
    // vector embedding이 검색할 수 있는 범위 좁히기
    const messagesTruncated=messages.slice(-6);
    
    console.log(JSON.stringify(messagesTruncated));
    

    //전체 채팅 영역을 벡터 임베딩으로 변환 
    const embedding=await getEmbedding(
      messagesTruncated.map((message:Message)=>message.content).join("\n")
    );

    //권한 확인 
    const {userId}=auth();

    
    if(!userId){
      return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
  }
   
    //생성된 벡터 임베딩을 기반으로 관련 채팅을 검색하기 위한 PineCone을 사용
    //vector: 채팅 컨텍스트를 나타내는 생성된 embedding
    //topK: 가장 관련성이 높은 상위 1개의 채팅으로 결과를 반환
    //filter: 현재 사용자가 소유한 채팅으로 결과를 필터링 
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

