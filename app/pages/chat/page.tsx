'use client';
import { CreateCategorySchema } from "@/app/schemas/chat/chatSchema";
import { useEffect, useState } from "react";
import LoadingPage from "../control/loading/page";

const ChatPage = () => {

    const [loading, setLoading] = useState(false);

    const createChat = async () => {
        console.log('onSubmit');
        setLoading(true);

        const response = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: '채팅방 제목',
                content: '채팅방 내용',
            })
        })

        if (response.ok) {
            //alert('채팅창 생성 성공');

            const responseData = await response.json();
            const newChat = responseData.newChat;
            const chatId = newChat.id;

            setLoading(false);
            window.location.replace(`${process.env.NEXT_PUBLIC_BASEURL}/pages/chat/${chatId}`);
        } else {
            setLoading(false);
            //alert('채팅창 생성 실패하셨습니다. 다시 시도해주세요.');
        }
    }

    useEffect(() => {
        createChat();
    }, []);

    return (<>
        {loading && <LoadingPage />}
    </>);
}
export default ChatPage;