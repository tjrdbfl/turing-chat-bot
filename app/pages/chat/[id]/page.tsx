"use client";

import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ChatCategoryContext } from "@/app/components/chat/service/chat-context";
import { getChatCategory } from "@/app/api/chat/category-api";
import { Message, useChat } from 'ai/react';
import Answer from "../messages/page";
import { ScrollArea, ScrollBar } from "@/app/components/ui/scrollarea"
import ChatCategory from "../category/page";
import { Textarea } from "@/app/lib/textarea";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ChatUserIcon from "@/app/components/chat/module/chatUserIcon";
import ChatAiIcon from "@/app/components/chat/module/chatAiIcon";
import ChatCopyIcon from "@/app/components/chat/module/chatCopyIcon";


const ChatRoomPage = ({params}:{params:{id:string}}) => {
    const context = useContext(ChatCategoryContext);

    const chatCategoryList: chatCategoryList[] = getChatCategory();
    const [isLoading,setIsLoading]=useState<boolean>(false);
   
    const categoryId=parseInt(params.id);
    
    const { messages,input,handleInputChange, handleSubmit,error } = useChat({

        onFinish: async (messages:Message) => {
            try {

                const question=input;
                const answer=messages.role==='assistant'? messages.content:'';
                console.log("question: "+question);

                console.log("answer: "+answer);

                const response = await fetch('/api/content', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        question,
                        answer,
                        categoryId
                    })
                  })
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        },
    });

    const [showCategory, setShowCategory] = useState<boolean>(true);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleSubmit(e);
        setIsLoading(true);
        setShowCategory(false);
    }


    return (
        <>
            <div className="h-[100%]">
                <form onSubmit={onSubmit} id="chat" className="chat_form_container">
                    {showCategory ? <ChatCategory /> :
                        <div>
                            
                            <div className="flex flex-col justify-start">
                                <ScrollArea className="h-[700px] w-full">

                                    {showCategory &&
                                        <div>
                                            <ChatUserIcon />
                                            <h4 className="animate-slidein500 opacity-0 text-[19px] dark:text-white text-black ml-[2%] mt-[1%]">
                                                {chatCategoryList.find((item) => item.id === context.category)?.userMsg}
                                            </h4>

                                            <div className="animate-slidein500 opacity-0 mt-[5%]">
                                                <ChatAiIcon isLoading={isLoading} />
                                            </div>
                                            <h4 className="animate-slidein500 opacity-0 text-black text-[19px] mt-[2%] dark:text-[19px] dark:mt-[3%] px-[1.5%] w-full dark:text-white">
                                                {chatCategoryList.find((item) => item.id === context.category)?.aiMsg}
                                            </h4>
                                        </div>
                                    }

                                    {messages.map(m => {
                                        return (<>
                                            {m.role === 'user' && (
                                                <div className="animate-slidein500 opacity-0 flex flex-col">
                                                    <ChatUserIcon />
                                                    <p className="text-xl ml-5 mt-[2%] text-black dark:text-white">{m.content}</p>
                                                </div>
                                            )}
                                            {m.role === 'assistant' && (
                                                <div>
                                                    <Answer id={parseInt(m.id)} isLoading={isLoading} messages={m.content} />
                                                    <div className="animate-slidein500 opacity-0 flex-row mb-[5%] mt-[2%]">
                                                        <ChatCopyIcon />
                                                        <ShareIcon className="text-slate-400 h-11 w-11 p-[1%] hover:rounded-full hover:bg-slate-100 dark:hover:bg-zinc-700 " />
                                                    </div>
                                                </div>
                                            )}
                                            {
                                                error && <>
                                                    <div className="animate-slidein500 opacity-0 mt-[5%]">
                                                        <ChatAiIcon isLoading={true} />
                                                    </div>
                                                    <h4 className="animate-slidein500 opacity-0 text-black text-[19px] mt-[2%] dark:text-[19px] dark:mt-[3%] px-[1.5%] w-full dark:text-white">
                                                        오류가 발생했습니다. 다시 입력해주세요.
                                                    </h4>
                                                </>
                                            }
                                        </>);

                                    })}
                                    <ScrollBar orientation="vertical" />
                                </ScrollArea>
                            </div>

                        </div>
                    }


                    <div className="flex items-end h-auto rounded-3xl w-[100%] bg-slate-50 dark:bg-zinc-800  absolute bottom-[2%] px-[1%]
            overflow-hidden">
                        <Textarea
                            id="question"
                            className="w-[100%] h-[100%] bg-slate-50 text-black dark:bg-zinc-800 dark:text-white"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="여기에 프롬프트 입력..."
                            maxRows={4}
                            aria-label="maximum height"
                        />
                        <button type="submit"
                        disabled={isLoading}
                            className="button_TelegramIcon"
                        >
                            <SendOutlinedIcon
                                className="text-3xl text-black dark:text-white"
                            />
                        </button>
                    </div>
                </form >
            </div >


        </>);

}
export default ChatRoomPage;