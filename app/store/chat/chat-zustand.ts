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

type ChatLoadingStore={
    loading:boolean,
    setLoading:(loading:boolean)=>void
}

export const useChatLoadingStore=create<ChatLoadingStore>()((set)=>({
    loading:false,
    setLoading: (newLoading: boolean) => set((state) => ({ ...state, loading: newLoading })),
}))