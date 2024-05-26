import * as React from 'react';
import ChatHeader from "./components/chat/module/chat-header";
import TemporaryDrawer from "./pages/drawer/page";
import { NextPage } from 'next';
import ChatPage from './pages/chat/page';
import SignOut from './components/user/signOut';

const Home: NextPage = () => {

  return (<>
    <div className="chat_container">
      <TemporaryDrawer />

      <div className="chat_container_background">
        <ChatHeader />
        <SignOut/>
        <div className="chat_container_chat_window">

        <ChatPage/>       
        </div>
      </div>
    </div>
  </>
  );
}
export default Home;