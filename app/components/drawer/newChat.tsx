'use client';
import AddIcon from '@mui/icons-material/Add';

export const NewChatBtn=()=>{

    return(<>
    <button 
    className='flex flex-row mt-16 ml-5 shadow-lg p-3 rounded-3xl border-1 hover:bg-slate-50'
    onClick={()=>{}}>
        <AddIcon className='mt-0.5'/>
        <p className='text-lg ml-2'>새 채팅</p>
    </button>
    </>);
}