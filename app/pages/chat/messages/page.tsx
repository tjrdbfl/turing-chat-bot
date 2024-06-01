'use client';
import { motion } from "framer-motion";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Message } from "ai/react";
import ChatAiIcon from "@/app/components/chat/module/chatAiIcon";

const Answer=({id,isLoading,messages}:{id:number,isLoading:boolean,messages:string})=>{
    
    return (
        <>
        <div key={id} className="mt-[5%]">
        <ChatAiIcon isLoading={isLoading}/>
            <h4 className="leading-10 text-black text-[19px] mt-[2%] dark:text-xl dark:mt-[3%] px-[1.5%] w-full dark:text-white">
            {messages}
            </h4>
            </div>
        </>
    );
}
 
export default Answer;

