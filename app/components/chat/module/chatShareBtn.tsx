'use client';

import ShareIcon from '@mui/icons-material/Share';
import { Dialog } from '@mui/material';
import { Fragment, useState } from 'react';
import { CurrentTheme } from '../../drawer/service/currentTheme';
import ChatCopyBtn from './chatCopyBtn';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const ChatShareBtn = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <Fragment>
            <button onClick={() => { setOpen(true) }}>
                <ShareIcon className="text-slate-400 h-[45px] w-[45px] p-[10px] hover:rounded-full hover:bg-slate-100 dark:hover:bg-zinc-700 " />
            </button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='bg-white w-full h-[220px] dark:bg-zinc-800'>
                    <div className='text-[20px] m-[25px] dark:text-white'>공유할 공개 페이지 만들기</div>
                    <div className='flex flex-row bg-slate-100 w-[560px] py-[10px] mx-[20px] text-xl px-[20px] text-black rounded-full  dark:bg-zinc-700 dark:text-white'>
                        {window.location.href}
                        <div className='absolute right-7 bottom-[95px]'>
                            <ChatCopyBtn textToCopy={window.location.href} />
                        </div>
                    </div>

                    <div className='flex flex-row mt-[7px]'>
                        <WarningAmberIcon className='text-blue-500 ml-[20px] mt-[20px] text-[20px]' />
                        <div
                            className='text-blue-500 text-sm bg-white dark:bg-zinc-800 mt-[20px] mx-[10px] '
                        >링크가 있는 모든 사용자가 항목을 보거나 다른 사용자와 공유할 수 있으므로 신중하게 공유해 주세요. 내 공개 링크에서 링크를 삭제할 수 있습니다.</div>
                    </div>
                </div>

            </Dialog>


        </Fragment>

    </>);
}
export default ChatShareBtn;