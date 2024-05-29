import { z } from "zod";

export const CreateChatSchema=z.object({
    title:z.string().min(1,{message:"필수 항목입니다."}),
    content:z.string().optional()
})

export type CreateChatSchema=z.infer<typeof CreateChatSchema>;

export const updateChatSchema=CreateChatSchema.extend({
    id:z.number().min(1)
})

export const deleteChatSchema=z.object({
    id:z.number().min(1)
})