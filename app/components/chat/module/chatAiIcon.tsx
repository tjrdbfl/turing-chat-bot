import { motion } from "framer-motion";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Message } from "ai/react";

const ChatAiIcon=({isLoading}:{isLoading:boolean})=>{
    return(<>
     <motion.div
                className="mt-5 ml-5 w-5 h-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                    scale: [1.5, 1.2, 1.2, 1.2, 1.5],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["50%", "20%", "20%", "50%", "50%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: isLoading ? Infinity:0,
                    repeatDelay: 1
                }}
            >
                <AutoAwesomeIcon className="text-lg mb-2" />
            </motion.div>
    </>);
}
export default ChatAiIcon;