'use client';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import { CreateChatSchema } from '@/app/schemas/chat/chatSchema';
import { useState,Fragment } from 'react';
import { ChatModal } from './chatModal';

export const ekjkek=()=>{

}


export const AddChatBtn = () => {

  const [open, setOpen] = useState<boolean>(false);

  
  const onSubmit = async (values: CreateChatSchema) => {
    console.log('onSubmit');
    setOpen(false);

    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
      })
    })

    if (response.ok) {
      alert('채팅창 생성 성공');
    } else {
      alert('채팅창 생성 실패하셨습니다. 다시 시도해주세요.');
    }

    window.location.reload();
  }
  

  return (<>
    <Fragment>
      <button
        className='flex flex-row mt-16 ml-5 shadow-lg p-3 rounded-3xl border-1 hover:bg-slate-50
        dark:bg-zinc-600 dark:hover:bg-zinc-500'
        onClick={() => setOpen(true)}>
        <AddIcon className='mt-0.5 dark:text-white' />
        <p className='text-lg ml-2 dark:text-white'>새 채팅</p>
      </button>
      <ChatModal open={open} setOpen={setOpen}
      onSubmit={onSubmit}/>
    </Fragment>
  </>);
}