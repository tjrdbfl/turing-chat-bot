import * as React from 'react';
import { NextPage } from 'next';
import ChatHeader from '../components/chat/module/chatHeader';
import ChatPage from '../pages/chat/page';
import TemporaryDrawer from '../pages/drawer/page';

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