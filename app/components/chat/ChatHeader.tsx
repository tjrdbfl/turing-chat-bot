
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';

const ChatHeader=()=>{

  return(
    <div className="flex justify-content-between mt-1">
    <SwitchAccessShortcutAddIcon className="chat_header_icon"/>
    <h1 className="chat_header_text">Turing Chat</h1>
  </div>
  );
};

export default ChatHeader;