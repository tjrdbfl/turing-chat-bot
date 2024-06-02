'use client';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Popover } from '@mui/material';
import { FC, useState,MouseEvent } from 'react';

interface CopyButtonProps {
    textToCopy: string;
}
const ChatCopyBtn: FC<CopyButtonProps> = ({ textToCopy }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleCopy = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigator.clipboard.writeText(textToCopy);
    };

    return (<>
        <button
            onClick={handleCopy}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <ContentCopyIcon className="text-slate-400 ml-3 h-11 w-11 p-[9px] hover:rounded-full hover:bg-slate-100 dark:hover:bg-zinc-600 " />
        </button>

        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <p className='text-black bg-white dark:bg-zinc-700 p-3 dark:text-white'>copy</p>
      </Popover>
    </>);
}
export default ChatCopyBtn;