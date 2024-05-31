
import { ChatCategoryContext, ChatCategoryContextValue } from "@/app/components/chat/service/chat-context";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { getChatCategory } from "@/app/api/chat/chat-api";
import { Session } from "next-auth";


const ChatCategory = () => {

    
    const chatCategoryList:chatCategoryList[]=getChatCategory();
    const context = useContext(ChatCategoryContext);
    console.log("ChatCategory: " + context.category);

    return (<>
        {context.category === 0 ?
            <div>
                <motion.div className="chat_category_container"
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    {chatCategoryList.map((element) => (
                        <motion.button key={element.id} type="button"
                            className="chat_catogry_button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => { context.setCategory(element.id); }}
                        >
                            {element.title}
                            {/* <p className="chat_catogry_text">
                                {element.title}
                            </p> */}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
            : null}
    </>
    );
};

export default ChatCategory;