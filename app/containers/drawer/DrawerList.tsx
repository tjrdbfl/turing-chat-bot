"use client";
import Drawer from '@mui/material/Drawer';
import { ReactNode, useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { ThemeToggleBtn } from '@/app/components/theme/ThemeToggleBtn';
import Setting from '@/app/components/drawer/Settings';
import Help from '@/app/components/drawer/Help';
import SignOut from '@/app/components/auth/SignOut';
import { ChatAddBtn } from '@/app/components/chat/ChatAddBtn';
import { CurrentTheme } from '@/app/services/theme';

export default function DrawerList({ children }: { children: ReactNode }) {

    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
        
            <button 
            onClick={toggleDrawer(true)} 
            className="text-black hover:rounded-full hover:bg-slate-50 hover:shadow-lg hover:ring-1 hover:ring-slate-300 hover:ring-opacity-50 p-3
            dark:hover:bg-zinc-700 dark:hover:ring-0">
                <DensityMediumIcon className='dark:text-white'/>
                </button>
                
            <Drawer
            open={open} onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                  backgroundColor: CurrentTheme()==='dark' ? '#27272a' : '#fff', // Set background based on dark mode
                },
              }}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="w-12 h-12 ml-2 mt-2 hover:rounded-full hover:bg-slate-100 hover:shadow-xl
                    dark:hover:bg-zinc-700">
                    <DensityMediumIcon className='dark:text-white'/>
                </button>
                <div className='w-[300px] dark:bg-zinc-800' role="presentation">
                    <ChatAddBtn />
                    
                    {children}
                    <div className='fixed bottom-0 dark:bg-zinc-800'>

                        <div className='ml-4 mr-2 py-2'>
                            <ThemeToggleBtn />
                        </div>

                        <SignOut />

                        <div className='w-[300px] h-[50px] hover:bg-slate-50 pt-2 dark:hover:bg-sky-800'>
                            <Help />
                        </div>


                        <div className='w-[300px] h-[50px] hover:bg-slate-50 hover:shadow-lg pt-2 dark:hover:bg-sky-800'>
                            <Setting />
                        </div>
                    </div>
                </div>
            </Drawer>
            
        </>
    );
}