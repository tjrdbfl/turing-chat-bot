import { ChatCategoryContext, ChatCategoryContextValue } from "@/app/components/chat/service/chat-context";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { getChatCategory } from "@/app/api/chat/category-api";
import FindCurrentUser from "@/app/components/user/service/currentUserInfo";

const ChatCategory = () => {

    const chatCategoryList:chatCategoryList[]=getChatCategory();

    const context = useContext(ChatCategoryContext);
    console.log("ChatCategory: " + context.category);

    return (<>
        {context.category === 0 ?
            <div>
                <p className="catogory_header_text">{FindCurrentUser()?.firstName}님, 안녕하세요!</p>
                <p className="catogory_header_next_text">처음이신가요? 무엇을 도와드릴까요?</p>

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
                        </motion.button>
                    ))}
                </motion.div>
            </div>
            : null}
    </>
    );
};

export default ChatCategory;