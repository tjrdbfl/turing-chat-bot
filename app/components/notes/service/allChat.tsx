import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";
import { PresentChat } from "../module/presentChat";
import { Category } from "@prisma/client";

export const AllChat = async () => {

    const { userId } = auth();
    let allNotes:Category[]=[];

    if (userId){
        allNotes = await db.category.findMany(
            {
                where: { userId },
                orderBy: { updateAt: 'desc' }
            });
    } 

    

    return (<>
        <div className="mt-5">
            {allNotes.map((element) => (
                <PresentChat category={element} key={element.id} />
            ))}
        </div>
    </>);
}