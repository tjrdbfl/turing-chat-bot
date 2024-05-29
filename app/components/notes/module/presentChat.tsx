'use client';
import { Category as CategoryModel } from "@prisma/client";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useState } from "react";
import {  ChatInfoBtn } from "./chatInfoBtn";

export const PresentChat = ({ category }: { category: CategoryModel }) => {
  const [showMoreIcon, setShowMoreIcon] = useState(false); // State to control icon visibility

  return (
    <>
      <div
        className={`flex flex-row h-[55px] items-center hover:bg-slate-50 dark:bg-zinc-800 dark:hover:bg-sky-800`}
        onMouseEnter={() => setShowMoreIcon(true)} // Show icon on hover
        onMouseLeave={() => setShowMoreIcon(false)} // Hide icon on leave
      >
        <ChatBubbleOutlineIcon className="mx-4 text-black dark:text-white" />
        <div className="text-lg mr-2 dark:text-md text-black dark:text-white">
          {category.title.length <= 9
            ? category.title
            : category.title.substring(0, 9) + "..."}
        </div>
        {showMoreIcon && ( 
          <ChatInfoBtn category={category}/>
        )}
      </div>
    </>
  );
};
