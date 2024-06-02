import { createChat } from '@/app/components/chat/service/chat-api';
import { redirect } from 'next/navigation';

const ChatPage = async () => {
  let chatId;
  
  try {
    chatId = await createChat();
  } catch (error) {
    console.error('Error creating chat:', error);
    return (
      <div>
        <p>Failed to create chat. Please try again later.</p>
      </div>
    );
  }

  // Redirect to the new chat page
  redirect(`/pages/chat/${chatId}`);

};

export default ChatPage;
