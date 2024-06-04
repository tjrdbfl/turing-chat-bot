import ChatHeader from '@/app/components/chat/module/chatHeader';
import Drawer from '@/app/containers/drawer/Drawer';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata:Metadata={
  title:"Turing Chat - layout",
}

const ChatLayout = ({children}:{children:React.ReactNode}) => {
  
  return (<>
    <div className="chat_container">
      <Drawer/>
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