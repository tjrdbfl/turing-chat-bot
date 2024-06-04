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

export type cardVariantsType = {
    offscreen: { y: number };
    onscreen: { y: number, rotate: number, transition: { type: string, bound: number, duration: number } };
}