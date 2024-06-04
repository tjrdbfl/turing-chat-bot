'use client';
import { useEffect, useState } from "react";
import { Message, useChat } from 'ai/react';
import { ScrollArea, ScrollBar } from "@/app/components/common/scrollarea"
import { Textarea } from "@/app/components/common/textarea";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ChatUserIcon from "@/app/components/chat/ChatUserIcon";
import ChatAiIcon from "@/app/components/chat/ChatAiIcon";
import ChatCopyBtn from "@/app/components/chat/ChatCopyBtn";
import { useChatCategoryStore, useChatLoadingStore } from "../../store/chat/chat-zustand";
import ChatCategory from "./ChatCategory";
import ChatContent from "../../components/chat/ChatContent";
import { Chat } from "@prisma/client";
import ChatShareBtn from "../../components/chat/ChatShareBtn";
import LoadingPage from "@/app/loading";
import ChatAnswer from "@/app/components/chat/ChatAnswer";


const ChatForm = ({ categoryId}
    : { categoryId: number}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {showCategory,setShowCategory}=useChatCategoryStore();

    const [chatContent, setChatContent] = useState<Chat[]>([]);

    const { messages, input, handleInputChange, handleSubmit, error } = useChat({

        onFinish: async (messages: Message) => {
            try {

                const question = input;
                const answer = messages.role === 'assistant' ? messages.content : '';
                console.log("question: " + question);

                console.log("answer: " + answer);

                await fetch('/api/content', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        question,
                        answer,
                        categoryId
                    })
                    ,cache:'no-store'
                })
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        },
    });

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleSubmit(e);
        setIsLoading(true);
        setShowCategory(false);
    }

    const {loading,setLoading}=useChatLoadingStore();

    const getContent = async () => {
        setLoading(true);
        const response = await fetch('/api/content/getCurrentContent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            categoryId
          })
          ,cache:'no-store'
        })
    
        if (response.ok) {
            setShowCategory(false);
            const {content}=await response.json();
            return content;

        }
        
    }

    useEffect(()=>{
        getContent().then(
            (contentData)=>{
                setChatContent(contentData);
                setLoading(false);
                if(contentData?.length===0){
                    setShowCategory(true);
                }
            }
        )

    },[categoryId]);

    return (<>
        {loading ? <LoadingPage/> : <form onSubmit={onSubmit} id="chat" className="chat_form_container">
            {showCategory ? <ChatCategory /> :
                
                <div>
                    <div className="flex flex-col justify-start">
                        <ScrollArea className="h-[700px] w-full">
                            {chatContent.map((c)=>(
                                <ChatContent id={c.id} question={c.question||""} answer={c.answer||""}/>
                            ))}
                            
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
                                            <ChatAnswer id={parseInt(m.id)} isLoading={isLoading} messages={m.content} />
                                            <div className="animate-slidein500 opacity-0 ml-1 flex-row mb-[5%] mt-[2%]">
                                                <ChatCopyBtn textToCopy={m.content} />
                                                <ChatShareBtn/>
                                            </div>
                                        </div>
                                    )}
                                    {
                                        error && <>
                                            <div className="animate-slidein500 opacity-0 mt-[5%] ml-5">
                                                <ChatAiIcon isLoading={true} />
                                            </div>
                                            <h4 className="animate-slidein500 opacity-0 text-black text-[19px] mt-[2%] ml-5 dark:text-[19px] dark:mt-[3%] px-[1.5%] w-full dark:text-white">
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
                    className="w-[100%] h-[100%] leading-8 bg-slate-50 text-black dark:bg-zinc-800 dark:text-white"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="여기에 프롬프트 입력..."
                    maxRows={4}
                    aria-label="maximum height"
                />
                <button type="submit"
                    className="button_TelegramIcon"
                >
                    <SendOutlinedIcon
                        className="text-3xl text-black dark:text-white"
                    />
                </button>
            </div>
        </form >}

    </>);
}

export default ChatForm;