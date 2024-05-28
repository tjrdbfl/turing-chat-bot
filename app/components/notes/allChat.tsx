import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";

export const AllChat=async()=>{
    const {userId}=auth();

    if(!userId) throw Error("권한이 없는 사용자입니다.");

    const allNotes=await db.category.findMany({where:{userId}});

    return(<>
    <div>
    {JSON.stringify(allNotes)}
    </div>
    </>);
}