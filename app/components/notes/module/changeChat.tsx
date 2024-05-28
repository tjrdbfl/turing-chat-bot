import CreateIcon from '@mui/icons-material/Create';

export const ChangeChat=()=>{
    return(<>
    <div className='flex flex-row px-5 h-12 items-center hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-sky-800'>
    <CreateIcon className='text-slate-700 mr-2 dark:text-white'/>
    <p className="text-slate-700 dark:text-white">이름 변경</p>
    </div>
    </>);
}