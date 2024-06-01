import {create} from 'zustand';

type ChatCategoryStore={
    category:number,
    setCategory:(category:number)=>void,
    showCategory:boolean,
    setShowCategory:(showCategory:boolean)=>void
}

export const useChatCategoryStore=create<ChatCategoryStore>()((set)=>({
    category:0,
    setCategory: (newCategory: number) => set((state) => ({ ...state, category: newCategory })),
    showCategory:true,
    setShowCategory: (show: boolean) => set((state) => ({ ...state, showCategory: show })),
  
}))
