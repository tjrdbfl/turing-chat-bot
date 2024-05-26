import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt';
import { signUpSchema } from "@/app/schemas/user/signUpSchema";

//sign-up
export async function POST(req:Request){
    try{
        const body=await req.json();
        const {email,username,password}=signUpSchema.parse(body);

        const existingUserByEmail=await db.user.findUnique({
            where:{email:email}
        });

        if(existingUserByEmail){  
            return NextResponse.json({user:null,message:"이 이메일을 사용하는 사용자가 이미 존재합니다."},{status:409})
        }

        const existingUserByUsername=await db.user.findUnique({
            where:{username:username}
        })

        if(existingUserByUsername){
            return NextResponse.json({user:null,message:"이 사용자 이름을 가진 사용자가 이미 존재합니다."},{status:409})
        }

        const hashedPassword=await hash(password,10);
        const newUser=await db.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        });

        console.log('/api/user')
        
        //password 빼고 반환(보안을 위해)
        const {password:newUserPassword,...rest}=newUser;

        return NextResponse.json({user:rest,message:"회원가입이 성공적으로 완료되었습니다."},{status:201});

    }catch(error){
        return NextResponse.json({message:"회원가입에 실패하셨습니다."+JSON.stringify(error)},{status:500});
    }
   
}

export async function GET(){
    return NextResponse.json({message:"success"})
}