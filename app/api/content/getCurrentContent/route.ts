import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req:Request){
    try{
        const body=await req.json();

        console.log("body: "+JSON.stringify(body));

        const {categoryId}=body;
        

        const {userId}=auth();

        if(!userId){
            return Response.json({error:"권한이 없는 사용자입니다."},{status:401});
        }

        const content=await db.chat.findMany({
            where:{categoryId,userId}
        });

        return Response.json({content},{status:201});

    }catch(error){
        return Response.json({message:"채팅 내용이 존재하지 않습니다."+JSON.stringify(error)},{status:500});
    }
}