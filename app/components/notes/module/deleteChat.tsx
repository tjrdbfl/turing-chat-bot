import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteChat=()=>{
    return(<>
    <div className='flex flex-row h-12 px-2 items-center hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-sky-800'>
    <DeleteIcon className='text-slate-600 mx-2 dark:text-white'/>
    <p className="text-slate-600 ml-1 dark:text-white">삭제</p>
    </div>
    </>);
}