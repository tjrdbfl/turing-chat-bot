import { motion } from "framer-motion";
import { getChatCategory } from "@/app/api/chat/category-api";
import FindCurrentUser from "@/app/components/user/service/currentUserInfo";
import { useChatCategoryStore } from "@/app/components/chat/service/chat-zustand";
import ChatUserIcon from "./chatUserIcon";
import ChatAiIcon from "./chatAiIcon";

const ChatCategory = () => {

    const chatCategoryList: chatCategoryList[] = getChatCategory();

    const { category, setCategory, showCategory, setShowCategory } = useChatCategoryStore();

    return (<>
        {showCategory && (category === 0 ?
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
                            onClick={() => { setCategory(element.id); }}
                        >
                            {element.title}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
            :
            <>

                <div>
                    <ChatUserIcon />
                    <h4 className="animate-slidein500 opacity-0 text-[19px] dark:text-white text-black ml-[2%] mt-[1%]">
                        {chatCategoryList.find((item) => item.id === category)?.userMsg}
                    </h4>

                    <div className="animate-slidein500 opacity-0 mt-[5%]">
                        <ChatAiIcon isLoading={true} />
                    </div>
                    <h4 className="animate-slidein500 opacity-0 text-black text-[19px] mt-[2%] dark:text-[19px] dark:mt-[3%] px-[1.5%] w-full dark:text-white">
                        {chatCategoryList.find((item) => item.id === category)?.aiMsg}
                    </h4>
                </div>
            </>

        )}
    </>
    );
};

export default ChatCategory;