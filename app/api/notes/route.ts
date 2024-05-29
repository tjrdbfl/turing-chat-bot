import { db } from "@/app/lib/db";
import { CreateChatSchema, deleteChatSchema, updateChatSchema } from "@/app/schemas/notes/noteSchema";
import { auth } from "@clerk/nextjs/server";
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
import { getEmbeddingForNote } from "../pinecone/chat-embedding";
import { chatsIndex } from "@/app/lib/pinecone";

//new chat
export async function POST(req:Request){
    try{

        const body=await req.json(); 
        const parseResult=CreateChatSchema.safeParse(body);
       
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"입력하지 않은 항목이 있는지 확인해주세요."},{status:400});
        }

        const {title,content}=parseResult.data;
        
        const {userId}=auth();

        if(!userId){
            return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
        }

        const embedding=await getEmbeddingForNote(title,content);

        const newChat=await db.$transaction(async(tx)=>{
            //supabase에 저장
            const newChat=await tx.category.create({
                data:{
                    title,
                    content,
                    userId
                }
            });

            //pinecone에 저장
            await chatsIndex.upsert([
                {
                    id:String(newChat.id),
                    values:embedding,
                    metadata:{userId},
                }
            ]);

            return newChat;
        });
        
        return Response.json({newChat},{status:201});

    }catch(error){
        return Response.json({message:"채팅창 생성 실패하셨습니다. 다시 시도해주세요."+JSON.stringify(error)},{status:500});
    }
   
}

export async function PUT(req:Request){
    try{

        const body=await req.json(); 
        const parseResult=updateChatSchema.safeParse(body);
       
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"입력하지 않은 항목이 있는지 확인해주세요."},{status:400});
        }

        const {id,title,content}=parseResult.data;
        
        const chat=await db.category.findUnique({where:{id}});

        if(!chat){
            return Response.json({error:"존재하지 않는 채팅방입니다."},{status:404});
        }

        console.log('/api/notes');
        
        const {userId}=auth();

        if(!userId || userId!==chat.userId){
            return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
        }

        

        const updateNote=await db.category.update({
            where:{id},
            data:{
                title,
                content,
            }
        })

        return Response.json({updateNote},{status:200});


    }catch(error){
        return Response.json({message:"채팅창 생성 실패하셨습니다."+JSON.stringify(error)},{status:500});
    }
}

export async function DELETE(req:Request){
    try{

        const body=await req.json(); 
        const parseResult=deleteChatSchema.safeParse(body);
       
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"채팅창 삭제 실패하셨습니다."},{status:400});
        }

        const {id}=parseResult.data;
        
        const note=await db.category.findUnique({where:{id}});

        if(!note){
            return Response.json({error:"존재하지 않는 채팅방입니다."},{status:404});
        }

        console.log('/api/notes');
        
        const {userId}=auth();

        if(!userId || userId!==note.userId){
            return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
        }

        await db.category.delete({
            where:{id},
        })

        return Response.json({message:"채팅방 삭제 성공하셨습니다."},{status:200});


    }catch(error){
        return Response.json({message:"채팅창 삭제 실패하셨습니다. 다시 시도해주세요."+JSON.stringify(error)},{status:500});
    }
}