import { z } from "zod";

export const createNoteSchema=z.object({
    title:z.string().min(1,{message:"필수 항목입니다."}),
    content:z.string().optional()
})

export type CreateNoteSchema=z.infer<typeof createNoteSchema>;