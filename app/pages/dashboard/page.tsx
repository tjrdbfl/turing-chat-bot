import ChatHeader from '@/app/components/chat/module/chatHeader';
import { Metadata, NextPage } from 'next';
import * as React from 'react';
import ChatPage from '../chat/page';
import TemporaryDrawer from '../drawer/page';

export const metadata:Metadata={
  title:"Turing Chat - dashboard",
}

const Chat: NextPage = () => {
  
  return (<>
    <div className="chat_container">
      <TemporaryDrawer />
      <div className="chat_container_background">
        <ChatHeader />
        <div className="chat_container_chat_window">

        <ChatPage/>       
        </div>
      </div>
    </div>
  </>
  );
}
export default Chat;