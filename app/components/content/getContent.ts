import { db } from "@/app/lib/db"

const GetContent=async ({categoryId}:{categoryId:number})=>{
    try{
        const content=await db.chat.findMany({
            where:{categoryId}
        })

        return content;

    }catch(error){
        console.log(error)

        return [];
    }

   
}
export default GetContent;