'use client';
import { motion } from "framer-motion";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { useTheme } from "next-themes";

export const ThemeToggleBtn=()=>{

    const { theme, setTheme } = useTheme();
   
    const currentTheme =theme;

    const className = `switch ${currentTheme==='dark' ? "on" : "off"}`;

    return(<>
    <div className="flex flex-row justify-between">
        <div className="flex flex-row">
        <ColorLensOutlinedIcon className="text-slate-600 text-2xl mr-3 dark:text-white"/>
        <p className="text-lg dark:text-white">테마</p>    
        </div>
    <motion.div animate className={className} onClick={()=>{ 
        setTheme( currentTheme === 'dark' ? 'light' : 'dark')
        }}>
        <motion.div animate />
      </motion.div>
      </div>
    </>);
}