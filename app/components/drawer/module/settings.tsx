import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Setting=()=>{
    return(<>
    <div className='flex flex-row ml-3'>
    <SettingsOutlinedIcon className='text-slate-600 text-2xl mr-3 mt-1 dark:text-white'/>
    <p className='text-lg dark:text-white'>설정</p>
    </div>
    </>);
}
export default Setting;