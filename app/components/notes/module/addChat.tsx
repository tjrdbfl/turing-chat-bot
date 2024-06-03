'use client';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import { CreateCategorySchema } from '@/app/schemas/chat/chatSchema';
import { useState, Fragment } from 'react';
import { ChatModal } from './chatModal';
import { useRouter } from 'next/navigation';
import { auth, getAuth } from '@clerk/nextjs/server';
import FindCurrentUser from '../../user/service/currentUserInfo';
import { useChatLoadingStore } from '../../chat/service/chat-zustand';


export const AddChatBtn = () => {

  const [open, setOpen] = useState<boolean>(false);
  const {setLoading}=useChatLoadingStore();
  const router=useRouter();
  
  const onSubmit = async (values: CreateCategorySchema) => {
    console.log('onSubmit');
    setOpen(false);
    setLoading(true);

    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
      }),
      cache:'no-store'
    })

    if (response.ok) {
      alert('채팅창 생성 성공');

      const responseData = await response.json();
      const newChat = responseData.newChat;
      const chatId = newChat.id;
      router.push(`/pages/chat/${chatId}`);
      router.refresh();
    } else {
      alert('채팅창 생성 실패하셨습니다. 다시 시도해주세요.');
    }

    setLoading(false);
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
        onSubmit={onSubmit} />
    </Fragment>
  </>);
}