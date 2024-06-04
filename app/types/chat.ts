export type Message = {
    role: string;
    content: string;
}

export type ChatCategoryList = {
    id: number;
    title: string;
    category: string;
    aiMsg: string;
    userMsg: string;
}