import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment, useState } from 'react';
import { DeleteModal } from './DeleteModal';

export const DeleteChatBtn=({id}
    :{id:number}
)=>{
    const [open, setOpen] = useState<boolean>(false);
    
    return(<>
    <Fragment>
    <button 
    onClick={() => setOpen(true)}
    className='flex flex-row w-full h-12 px-2 items-center hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-sky-800'>
    <DeleteIcon className='text-slate-600 mx-2 dark:text-white'/>
    <p className="text-slate-600 mx-1 mr-2 dark:text-white">삭제</p>
    </button>
    <DeleteModal open={open} setOpen={setOpen} id={id}/>
    </Fragment>
    </>);
}