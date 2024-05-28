import { db } from "@/app/lib/db";
import { createNoteSchema } from "@/app/schemas/notes/note";
import { auth } from "@clerk/nextjs/server";

//new chat
export async function POST(req:Request){
    try{

        const body=await req.json(); 
        const parseResult=createNoteSchema.safeParse(body);
       
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"입력하지 않은 항목이 있는지 확인해주세요."},{status:400});
        }

        const {title,content}=parseResult.data;
        console.log(JSON.stringify(title)+" "+JSON.stringify(content));

        const {userId}=auth();

        if(!userId){
            return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
        }

        console.log(JSON.stringify(userId));
        
        const newChat=await db.category.create({
            data:{
                title,
                content,
                userId
            }
        });

        console.log('/api/notes');
        
        return Response.json({newChat},{status:201});

    }catch(error){
        return Response.json({message:"채팅창 생성 실패하셨습니다."+JSON.stringify(error)},{status:500});
    }
   
}