'use server';

import { auth } from "@clerk/nextjs/server";

const {userId}=auth();

export const CreateChat = async () => {
   
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/main`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: '채팅방 제목',
            content: '채팅방 내용',
            userId
        })
        ,cache:'no-store'
    })

    if (!response.ok) {
        throw new Error('Failed to create chat');
      }
    
      const responseData = await response.json();
      return responseData.newChat.id;
};

