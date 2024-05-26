import { Dispatch, SetStateAction, createContext } from "react";

export interface ChatCategoryContextValue{
    category:number;
    setCategory:Dispatch<SetStateAction<number>>;
}
export const ChatCategoryContext=createContext(
    {
        category: 0,
        setCategory: () => {},
      } as ChatCategoryContextValue 
);