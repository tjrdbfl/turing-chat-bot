import ChatHeader from '@/app/components/chat/module/chatHeader';
import { Metadata, NextPage } from 'next';
import * as React from 'react';
import ChatPage from '../chat/page';
import TemporaryDrawer from '../drawer/page';
import ChatRoomPage from '../chat/[id]/page';

export const metadata:Metadata={
  title:"Turing Chat - layout",
}

const ChatLayout = ({children}:{children:React.ReactNode}) => {
  
  return (<>
    <div className="chat_container">
      <TemporaryDrawer />
      <div className="chat_container_background">
        <ChatHeader />
        <div className="chat_container_chat_window">

        {children}     
        </div>
      </div>
    </div>
  </>
  );
}
export default ChatLayout;