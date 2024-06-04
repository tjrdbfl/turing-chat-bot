import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";
import { PresentChat } from "./PresentChat";
import { Category } from "@prisma/client";
import { ScrollArea, ScrollBar } from "@/app/components/common/scrollarea"

export const AllChat = async () => {

    const { userId } = auth();
    let allNotes: Category[] = [];

    if (userId) {
        allNotes = await db.category.findMany(
            {
                where: { userId },
                orderBy: { updateAt: 'desc' }
            });
    }

    return (<>
        <ScrollArea className="h-[490px] w-full mt-7">

            {allNotes.map((element) => (
                <PresentChat category={element} key={element.id} />
            ))}

            <ScrollBar orientation="vertical" />
        </ScrollArea>
    </>);
}