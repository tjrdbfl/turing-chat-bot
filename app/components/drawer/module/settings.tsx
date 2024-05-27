import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Setting=()=>{
    return(<>
    <div className='flex flex-row'>
    <SettingsOutlinedIcon className='text-slate-600 text-2xl mr-3 mt-1'/>
    <p className='text-lg'>설정</p>
    </div>
    </>);
}
export default Setting;