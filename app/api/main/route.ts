import { db } from "@/app/lib/db";
import { MainCategorySchema } from "@/app/schemas/ChatSchema";
import { getEmbeddingForNote } from "../pinecone/chat-embedding";
import { chatsIndex } from "@/app/lib/pinecone";

//new category
export async function POST(req:Request){
    try{

        const body=await req.json(); 
        const parseResult=MainCategorySchema.safeParse(body);
       
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"입력하지 않은 항목이 있는지 확인해주세요."},{status:400});
        }

        const {title,content,userId}=parseResult.data;
        
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