import { redirect } from 'next/navigation';

import { Metadata } from "next";
import { CreateChat } from '@/app/services/chat.api';

export const metadata:Metadata={
    title:"Turing Chat - ChatPage"
}

const ChatPage = async () => {
  let chatId;
  
  try {
    chatId = await CreateChat();
  } catch (error) {
    console.error('Error creating chat:', error);
    return (
      <div>
        <p>Failed to create chat. Please try again later.</p>
      </div>
    );
  }

  // Redirect to the new chat page
  redirect(`/chat/${chatId}`);

};

export default ChatPage;
