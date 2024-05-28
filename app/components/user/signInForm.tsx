'use client'
import { signInSchema } from "@/app/schemas/user/signInSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form,FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"

export const SignInform=()=>{
    const form=useForm<z.infer<typeof signInSchema>>({
        resolver:zodResolver(signInSchema),
        defaultValues:{
            email:'',
            password:''
        }
    });

    const router=useRouter();
    const onSubmit=async (values:z.infer<typeof signInSchema>)=>{

        try{
            const signInData=await signIn('credentials',{
                email:values.email,
                password:values.password,
                redirect:true,
                callbackUrl:`${window.location.origin}/chat`
            }).then(()=>{
                alert(JSON.stringify(signInData));
                //router.push(`${window.location.origin}/chat`);
            }).catch((error)=>{
                alert(JSON.stringify(signInData));
                alert('로그인 실패하셨습니다. 다시 로그인 해주세요.');
            });
        }catch{
            
        }
    };

    return (<>
    <Form {...form}>
        <form 
        className="w-full"
        onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
                <FormField
                control={form.control}
                name='email'
                render={({field})=>(
                    <FormItem>
                        <p className="text-xl text-black">이메일</p>
                        <FormControl>
                            <Input 
                            type='email'
                            placeholder='mail@example.com' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name='password'
                render={({field})=>(
                    <FormItem>
                        <p className="text-xl text-black">비밀번호</p>
                        <FormControl>
                            <Input 
                            type='password'
                            placeholder='비밀번호를 입력해주세요.' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
            </div>
            <button 
            type="submit" 
            className="h-[50px] text-black">로그인</button>
        </form>
    </Form>
    </>);
}