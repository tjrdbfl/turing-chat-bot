'use client';
import { ChatCategoryContext } from "@/app/components/chat/service/chat-context";
import { useState } from "react";
import ChatForm from "./form/page";

const ChatPage=()=>{
    const [category,setCategory]=useState(0);

    return (
        <>
        <ChatCategoryContext.Provider value={{category,setCategory}}>
        <ChatForm/>
        </ChatCategoryContext.Provider>
        </>
    );
}
export default ChatPage;