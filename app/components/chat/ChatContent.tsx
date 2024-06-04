'use client';
import ChatUserIcon from "./ChatUserIcon";
import ChatCopyBtn from "./ChatCopyBtn";
import ChatAiIcon from "./ChatAiIcon";
import { useChatCategoryStore } from "../../store/chat/chat-zustand";
import ChatShareBtn from "./ChatShareBtn";

const ChatContent = ({id,question,answer}:
  {id:number,question:string,answer:string}) => {

    const {showCategory}=useChatCategoryStore();

    return (<>
        {!showCategory && 
             (<>
                <div className="animate-slidein500 opacity-0 flex flex-col">
                    <ChatUserIcon />
                    <p className="text-xl ml-5 mt-[2%] text-black dark:text-white">{question}</p>
                </div>

                <div>
                    <div key={id} className="animate-slidein500 mt-[5%]">
                        <ChatAiIcon isLoading={true} />
                        <h4 className="leading-10 ml-1 text-black text-[19px] mt-[2%] dark:text-xl dark:mt-[3%] px-[1.5%] w-full dark:text-white">
                            {answer}
                        </h4>
                    </div>
                
                <div className="animate-slidein500 opacity-0 flex-row mb-[5%] mt-[2%] ml-1">
                    <ChatCopyBtn textToCopy={answer} />
                    <ChatShareBtn/>
                </div>
            </div >
            </>)
        }
    </>);
}

export default ChatContent;