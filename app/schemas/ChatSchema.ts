import { z } from "zod";

export const CreateCategorySchema=z.object({
    title:z.string().min(1,{message:"필수 항목입니다."}),
    content:z.string().optional(),
})

export const MainCategorySchema=z.object({
    title:z.string().min(1,{message:"필수 항목입니다."}),
    content:z.string().optional(),
    userId:z.string().min(1)
})

export type CreateCategorySchema=z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema=CreateCategorySchema.extend({
    id:z.number().min(1)
})

export const DeleteCategorySchema=z.object({
    id:z.number().min(1)
})

export const CreateChatSchema=z.object({
    question:z.string().min(1),
    answer:z.string().min(1),
    categoryId:z.number().min(1)
})