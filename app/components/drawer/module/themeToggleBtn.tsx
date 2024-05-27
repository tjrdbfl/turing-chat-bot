'use client';
import { motion } from "framer-motion";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { useTheme } from "next-themes";
import { useState } from "react";

export const ThemeToggleBtn=()=>{

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
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
        <motion.div animate >
            {currentTheme==='dark' ? <DarkModeOutlinedIcon className="text-sm mb-2 ml-0.5 text-slate-500"/>: <LightModeOutlinedIcon className="text-sm mb-2 ml-0.5 text-slate-500"/>}
        </motion.div>
      </motion.div>
      </div>
    </>);
}