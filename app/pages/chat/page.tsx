'use client';
import { ChatCategoryContext } from "@/app/components/chat/service/chat-context";
import { useState } from "react";
import ChatRoomPage from "./[id]/page";

const ChatPage=()=>{
    const [category,setCategory]=useState(0);

    return (
        <>
        <ChatCategoryContext.Provider value={{category,setCategory}}>
        {/* <ChatRoomPage id={14}/> */}
        </ChatCategoryContext.Provider>
        </>
    );
}
export default ChatPage;