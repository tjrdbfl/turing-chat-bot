type chatCategoryList = {
    id: number;
    title: string;
    category: string;
    aiMsg: string;
    userMsg: string;
}

type cardVariantsType = {
    offscreen: { y: number };
    onscreen: { y: number, rotate: number, transition: { type: string, bound: number, duration: number } };
}