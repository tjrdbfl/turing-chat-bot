"use client";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { NewChatBtn } from '@/app/components/drawer/module/newChat';
import { ThemeToggleBtn } from '@/app/components/drawer/module/themeToggleBtn';
import Setting from '@/app/components/drawer/module/settings';
import Help from '@/app/components/drawer/module/help';

export default function TemporaryDrawer() {

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <>
      <button
        onClick={() => setOpen(false)}
        className="w-12 h-12 ml-2 mt-2 hover:rounded-full hover:bg-slate-100 hover:shadow-xl">
        <DensityMediumIcon />
      </button>

      <Box sx={{ width: 300 }} role="presentation">
        <NewChatBtn />

        <div className='fixed bottom-0'>

        
            <div className='ml-4 mr-2 py-2'>
            <ThemeToggleBtn />
            </div>

          <div className='ml-4 w-[280px] h-[50px] hover:bg-slate-50  pt-2'>
            <Help />
          </div>

          
          <div className='ml-4 w-[280px] h-[50px] hover:bg-slate-50 hover:shadow-lg  pt-2'>
            <Setting />
          </div>
        </div>
      </Box>
    </>
  );

  return (
    <span className="bg-slate-100 p-2 dark:bg-slate-800">
      <button onClick={toggleDrawer(true)} className="text-black hover:rounded-full hover:bg-slate-50 hover:shadow-lg hover:ring-1 hover:ring-slate-300 hover:ring-opacity-50 p-3"><DensityMediumIcon /></button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </span>
  );
}