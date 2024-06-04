'use client';
import { Category as CategoryModel } from "@prisma/client";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useState } from "react";
import {  ChatInfoBtn } from "../../components/chat/ChatInfoBtn";
import Link from "next/link";

export const PresentChat = ({ category }: { category: CategoryModel }) => {
  const [showMoreIcon, setShowMoreIcon] = useState(false); 

  return (
    <>
    <Link href={`/chat/${category.id}`}>
      <div
        className={`flex flex-row h-[55px] items-center hover:bg-slate-50 dark:bg-zinc-800 dark:hover:bg-sky-800`}
        onMouseEnter={() => setShowMoreIcon(true)} 
        onMouseLeave={() => setShowMoreIcon(false)}
      >
        <ChatBubbleOutlineIcon className="mx-4 text-black dark:text-white" />
        <div className="text-lg mr-2 dark:text-md text-black dark:text-white truncate">
          {category.title.length <= 9
            ? category.title
            : category.title.substring(0, 9) + "..."}
        </div>
        {showMoreIcon && ( 
          <ChatInfoBtn category={category}/>
        )}
      </div>
      </Link>
    </>
  );
};
