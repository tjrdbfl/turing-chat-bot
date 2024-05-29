"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import { useContext, useEffect, useRef, useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ChatCategoryContext } from "@/app/components/chat/service/chat-context";
import FileUploadBtn from "@/app/components/chat/module/file-upload";
import { getChatCategory } from "@/app/api/chat/chat-api";
import { useChat } from 'ai/react';
import { Variants, motion, useScroll } from "framer-motion";
import Answer from "../answer/page";
import { ScrollArea, ScrollBar } from "@/app/components/ui/scrollarea"
import ChatCategory from "../category/page";

export const messages = [
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
    "function onSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault(); handleSubmit(e);}",
]

const ChatForm = () => {
    const context = useContext(ChatCategoryContext);

    const chatCategoryList: chatCategoryList[] = getChatCategory();

    //const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
    const { input, handleInputChange, handleSubmit, isLoading, error } = useChat();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleSubmit(e);
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    return (
        <>
            <div className="h-[100%]">
                <form onSubmit={onSubmit} id="chat" className="chat_form_container">
                    {context.category === 0 ? <ChatCategory/> :
                        <div>
                                
                            <div className="flex flex-col justify-start">
                            <ScrollArea className="h-[700px] w-full">
                            
                                <h4 className="chat_form_text">
                                    {chatCategoryList.find((item) => item.id === context.category)?.aiMsg}
                                </h4>
                                    {messages.map(m => (
                                        <>
                                            <Answer id={1} isLoading={isLoading} messages={m} />
                                            {/* {m.role === 'user' && (
                                                <h4 className="chat_form_text">{m.content}</h4>
                                            )}
                                            {m.role === 'assistant' && (
                                                <div>
                                                    <motion.div
                                                        key={m.id}
                                                        className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text inline-block text-transparent"
                                                        animate={{
                                                            scale: [1, 2, 2, 1, 1],
                                                            rotate: [0, 0, 180, 180, 0],
                                                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            ease: "easeInOut",
                                                            times: [0, 0.2, 0.5, 0.8, 1],
                                                            repeat: isLoading ? Infinity : 0,
                                                            repeatDelay: 1
                                                        }}
                                                    />
                                                    <h4 className="chat_form_text">{m.content}</h4>
                                                    <div className="flex-row">
                                                        <ContentCopyIcon className="text-slate-400 ml-5 mt-3 h-6 w-6" />
                                                        <ShareIcon className="text-slate-400 ml-3 mt-3 h-5 w-5" />
                                                    </div>
                                                </div>
                                            )} */}
                                        </>

                                    ))}
                                    <ScrollBar orientation="vertical" />
                                </ScrollArea>
                            </div>

                        </div>
                    }


                    <div className="flex items-end h-auto rounded-3xl w-[100%] bg-slate-50 absolute bottom-[4%] px-[1%]
            overflow-hidden">
                        <div id="question"
                            className="chat_form_input_div"
                        ><textarea
                                id="question"
                                value={input}
                                onChange={handleInputChange}
                                className={`chat_form_input_prompt`}
                                placeholder="여기에 프롬프트 입력..."
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" && !event.shiftKey) {
                                        onSubmit;
                                        event.currentTarget.value = ''
                                    }
                                }}
                            /></div>

                        <FileUploadBtn />
                        <button type="submit"
                            disabled={isLoading}
                            className="button_TelegramIcon"
                        >
                            <TelegramIcon
                                className="text-3xl"
                            />
                        </button>
                    </div>
                </form >
            </div >


        </>

    );
}
export default ChatForm;
