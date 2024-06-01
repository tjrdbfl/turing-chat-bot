import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";
import { PresentChat } from "./presentChat";

export const UpdateChat = async () => {

    const { userId } = auth();

    if (!userId) throw Error("권한이 없는 사용자입니다.");

    const allNotes = await db.category.findMany(
        {
            where: { userId },
            orderBy: { updateAt: 'desc' }
        });

    return (<>
        <div className="mt-5">
            {allNotes.map((element) => (
                <PresentChat category={element} key={element.id} />
            ))}
        </div>
    </>);
}