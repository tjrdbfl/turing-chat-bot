import ChatAiIcon from "@/app/components/chat/ChatAiIcon";

const ChatAnswer=({id,isLoading,messages}:{id:number,isLoading:boolean,messages:string})=>{
    
    return (
        <>
        <div key={id} className="mt-[5%]">
        <ChatAiIcon isLoading={isLoading}/>
            <h4 className="leading-10 text-black text-[19px] ml-1 mt-[2%] dark:text-xl dark:mt-[3%] px-[1.5%] w-full dark:text-white">
            {messages}
            </h4>
            </div>
        </>
    );
}
 
export default ChatAnswer;

