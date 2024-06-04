import FindCurrentUser from "@/app/services/auth";

const ChatUserIcon=()=>{
    return(<>
    <div className="animate-slidein500 opacity-0 ml-[2%] rounded-full w-9 h-9 p-0.5 bg-orange-500 text-[15px] flex items-center">{FindCurrentUser()?.firstName}</div>                           
    </>);
}
export default ChatUserIcon;