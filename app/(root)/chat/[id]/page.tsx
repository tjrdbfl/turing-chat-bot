import ChatForm from "@/app/components/chat/module/chatForm";


import { Metadata } from "next";

export const metadata:Metadata={
    title:"Turing Chat - ChatRoomPage"
}

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