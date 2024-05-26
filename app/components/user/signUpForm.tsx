'use client'
import { signUpSchema } from "@/app/schemas/user/signUpSchema"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form,FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
    const router=useRouter();
    
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        const response=await fetch('/api/user',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:values.username,
                email:values.email,
                password:values.password
            })
        })

        if(response.ok){
            router.push('/pages/user/login');
        }else{
            console.error('회원가입 실패');
        }
    }

    return (<>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <p className="text-xl text-black">이름</p>
                                <FormControl>
                                    <Input placeholder="실명을 입력해주세요." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <p className="text-xl text-black">이메일</p>
                                <FormControl>
                                    <Input placeholder="mail@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <p className="text-xl text-black">비밀번호</p>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="비밀번호를 입력해주세요.(8자리 이상)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <button className='w-full h-[50px] mt-6 bg-blue-500' type='submit'>
                    회원가입
                </button>
            </form>
            
        </Form>
    </>);
}