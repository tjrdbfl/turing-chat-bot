'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

export const ThemeToggleBtn=()=>{
    const [isOn, setIsOn] = useState(false);
    const className = `switch ${isOn ? "on" : "off"}`;

    return(<>
    <div className="flex flex-row justify-between">
        <div className="flex flex-row">
        <ColorLensOutlinedIcon className="text-slate-600 text-2xl mr-3"/>
        <p className="text-lg">테마</p>    
        </div>
    <motion.div animate className={className} onClick={() => setIsOn(!isOn)}>
        <motion.div animate >
            {isOn? <DarkModeOutlinedIcon className="text-sm mb-2 ml-0.5 text-slate-500"/>: <LightModeOutlinedIcon className="text-sm mb-2 ml-0.5 text-slate-500"/>}
        </motion.div>
      </motion.div>
      </div>
    </>);
}