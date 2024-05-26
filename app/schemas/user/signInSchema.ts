import { z } from "zod";

export const signInSchema=z.object({
    email:z.string().min(1,'필수 항목입니다.').email('유효하지 않은 이메일입니다.'),
    password:z.string().min(1,'필수 항목입니다.').min(8,'최소 8자리 이상이어야 합니다.')
});