import ChatForm from "@/app/components/chat/module/chatForm";
import CurrentContent from "@/app/components/content/module/currentContent";


const ChatRoomPage = ({ params }: { params: { id: string } }) => {
    
    const categoryId = parseInt(params.id);

    return (
        <>
            <div className="h-[100%]">
                <ChatForm categoryId={categoryId}/>
            </div >
        </>);

}
export default ChatRoomPage;