import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Help=()=>{
    return(<>
    <div className='flex flex-row ml-3'>
    <HelpOutlineOutlinedIcon className='text-slate-600 text-2xl mr-3 mt-1
    dark:text-white'/>
    <p className='text-lg dark:text-white'>도움말</p>
    </div>
    </>);
}   
export default Help;