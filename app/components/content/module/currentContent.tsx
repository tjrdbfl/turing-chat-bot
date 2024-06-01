'use client';
import ChatUserIcon from "../../chat/module/chatUserIcon";
import ChatCopyIcon from "../../chat/module/chatCopyIcon";
import ShareIcon from '@mui/icons-material/Share';
import ChatAiIcon from "../../chat/module/chatAiIcon";
import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";
import { useChatCategoryStore } from "../../chat/service/chat-zustand";

const CurrentContent = async ({categoryId}:{categoryId: number}) => {

    const {userId}=auth();
    const {showCategory,setShowCategory}=useChatCategoryStore();

    if(!userId){
        alert('권한이 없는 사용자입니다.');
        return null;
    }

    const content=await db.chat.findMany({
        where:{categoryId
            ,userId}
    });

    console.log(categoryId);
    console.log(content);

    if(content){
        setShowCategory(false);
    }
    
    return (<>
        {content.map(chat => {
            return (<>
                <div className="animate-slidein500 opacity-0 flex flex-col">
                    <ChatUserIcon />
                    <p className="text-xl ml-5 mt-[2%] text-black dark:text-white">{chat.question}</p>
                </div>

                <div>
                    <div key={chat.id} className="mt-[5%]">
                        <ChatAiIcon isLoading={true} />
                        <h4 className="leading-10 text-black text-[19px] mt-[2%] dark:text-xl dark:mt-[3%] px-[1.5%] w-full dark:text-white">
                            {chat.answer}
                        </h4>
                    </div>
                
                <div className="animate-slidein500 opacity-0 flex-row mb-[5%] mt-[2%]">
                    <ChatCopyIcon />
                    <ShareIcon className="text-slate-400 h-11 w-11 p-[1%] hover:rounded-full hover:bg-slate-100 dark:hover:bg-zinc-700 " />
                </div>
            </div >
            </>);
})
        }

    </>);
}

export default CurrentContent;