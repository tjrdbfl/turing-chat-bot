import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment, useState } from 'react';
import { DeleteModal } from './deleteModal';

export const DeleteChat=({id}
    :{id:number}
)=>{
    const [open, setOpen] = useState<boolean>(false);
    
    const onClick=async(id:number)=>{
        setOpen(false);
        const response = await fetch('/api/notes', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id:id
          })
        })
    
        if (response.ok) {
          alert('채팅창 생성 성공');
        } else {
          alert('채팅창 생성 실패하셨습니다. 다시 시도해주세요.');
        }
    
        window.location.reload();
    }

    return(<>
    <Fragment>
    <button 
    onClick={() => setOpen(true)}
    className='flex flex-row w-full h-12 px-2 items-center hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-sky-800'>
    <DeleteIcon className='text-slate-600 mx-2 dark:text-white'/>
    <p className="text-slate-600 ml-1 dark:text-white">삭제</p>
    </button>
    <DeleteModal open={open} setOpen={setOpen} id={id}/>
    </Fragment>
    </>);
}