'use client';
import LogoutIcon from '@mui/icons-material/Logout';
import { SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

const SignOut=()=>{

    const { signOut } = useClerk();

    return(<>
    <button 
    className="flex flex-row w-[300px] h-[50px] pt-2 pl-4 border-1 hover:bg-slate-50"
    onClick={()=>{signOut({redirectUrl:'/'})}}>
        <LogoutIcon className='text-slate-600 text-2xl mt-1'/>
        <p className='text-lg ml-3'>로그아웃</p>
    </button>
    </>);
}
export default SignOut;