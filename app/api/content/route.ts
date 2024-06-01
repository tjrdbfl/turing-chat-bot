import { db } from "@/app/lib/db";
import { CreateChatSchema } from "@/app/schemas/chat/chatSchema";
import { auth } from "@clerk/nextjs/server";

export async function POST(req:Request){

    try{

        const body=await req.json(); 
        console.log(JSON.stringify(body));
        const parseResult=CreateChatSchema.safeParse(body);
       
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"입력하지 않은 항목이 있는지 확인해주세요."},{status:400});
        }

        const {question,answer,categoryId}=parseResult.data;
        
        const {userId}=auth();

        if(!userId){
            return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
        }

        
        const newChat=await db.chat.create({
            data:{
                question,
                answer,
                userId,
                categoryId,
            }
        });
        
        return Response.json({newChat},{status:201});

    }catch(error){
        return Response.json({message:"채팅창 생성 실패하셨습니다. 다시 시도해주세요."+JSON.stringify(error)},{status:500});
    }
   
}
