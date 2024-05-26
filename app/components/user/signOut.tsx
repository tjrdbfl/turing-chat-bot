'use client';

import { signOut } from "next-auth/react";

const SignOut=()=>{

    return(<>
    <button 
    className="bg-blue-500 h-[50px]"
    onClick={()=>{signOut({
        redirect:true,
        callbackUrl:`${window.location.origin}/pages/user/login`
    })}}>로그아웃</button>
    </>);
}
export default SignOut;