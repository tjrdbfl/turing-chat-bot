'use client';
import LogoutIcon from '@mui/icons-material/Logout';
import { useClerk } from "@clerk/nextjs";

const SignOut=()=>{

    const { signOut } = useClerk();

    return(<>
    <button 
    className="flex flex-row w-[300px] h-[50px] pt-2 pl-4 border-1 hover:bg-slate-50 dark:hover:bg-sky-800"
    onClick={()=>{signOut({redirectUrl:'/'})}}>
        
        <LogoutIcon className='text-slate-600 text-2xl mt-1 dark:text-white'/>
        <p className='text-lg ml-3 dark:text-white'>로그아웃</p>
    </button>
    </>);
}
export default SignOut;