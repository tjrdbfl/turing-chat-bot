'use client';
import ChatUserIcon from "../../chat/module/chatUserIcon";
import ChatCopyIcon from "../../chat/module/chatCopyIcon";
import ShareIcon from '@mui/icons-material/Share';
import ChatAiIcon from "../../chat/module/chatAiIcon";
import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";
import { useChatCategoryStore } from "../../chat/service/chat-zustand";
import { useEffect } from "react";

const CurrentContent = ({id,question,answer}:
  {id:number,question:string,answer:string}) => {

    const {showCategory,setShowCategory}=useChatCategoryStore();

    return (<>
        {!showCategory && 
             (<>
                <div className="animate-slidein500 opacity-0 flex flex-col">
                    <ChatUserIcon />
                    <p className="text-xl ml-5 mt-[2%] text-black dark:text-white">{question}</p>
                </div>

                <div>
                    <div key={id} className="animate-slidein500 mt-[5%] ml-1">
                        <ChatAiIcon isLoading={true} />
                        <h4 className="leading-10 ml-1 text-black text-[19px] mt-[2%] dark:text-xl dark:mt-[3%] px-[1.5%] w-full dark:text-white">
                            {answer}
                        </h4>
                    </div>
                
                <div className="animate-slidein500 opacity-0 flex-row mb-[5%] mt-[2%]">
                    <ChatCopyIcon />
                    <ShareIcon className="text-slate-400 h-11 w-11 p-[1%] hover:rounded-full hover:bg-slate-100 dark:hover:bg-zinc-700 " />
                </div>
            </div >
            </>)
        }
    </>);
}

export default CurrentContent;