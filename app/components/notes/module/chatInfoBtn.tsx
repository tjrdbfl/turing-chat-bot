'use client';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Modal, Popover } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { ChangeChat } from './changeChat';
import { DeleteChat } from './deleteChat';

export const ChatInfoBtn = ({ id }: { id: number }) => {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popOverId = open ? 'simple-popover' : undefined;

  return (<>
    <button
      onClick={handleClick}
      className='ml-auto mr-2 h-10 text-center w-10 rounded-full hover:bg-slate-200 hover:shadow-md dark:hover:bg-sky-900'
    >
      <MoreVertIcon className="text-2xl mt-[1.5px] rounded-full text-slate-600 dark:text-white" />
    </button>
    <Popover
      id={popOverId}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
    >
      <ChangeChat />
      <DeleteChat />
    </Popover>
  </>);
}