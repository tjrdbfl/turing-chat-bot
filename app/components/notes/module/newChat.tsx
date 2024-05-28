'use client';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { useForm } from 'react-hook-form';
import { CreateNoteSchema, createNoteSchema } from '@/app/schemas/notes/note';
import { Form,FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { zodResolver } from '@hookform/resolvers/zod';

export const NewChatBtn = () => {

  const [open, setOpen] = React.useState<boolean>(false);
  
  const form=useForm<CreateNoteSchema>(
    {resolver: zodResolver(createNoteSchema),
        defaultValues: {
            title: '',
            content: ''
        }}
  );

  const onSubmit = async (values: CreateNoteSchema) => {
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
    form.reset();
    window.location.reload();
  }
  

  return (<>
    <React.Fragment>
      <button
        className='flex flex-row mt-16 ml-5 shadow-lg p-3 rounded-3xl border-1 hover:bg-slate-50
        dark:bg-zinc-600 dark:hover:bg-zinc-500'
        onClick={() => setOpen(true)}>
        <AddIcon className='mt-0.5 dark:text-white' />
        <p className='text-lg ml-2 dark:text-white'>새 채팅</p>
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog
          sx={{ width: 500, height: 550}}
        >
          <div className='w-full h-full dark:bg-zinc-800 dark:p-5'>
          <p className='mb-5 text-center text-2xl font-medium text-slate-700 dark:text-white'>Add Chat</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-6">
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <p className="text-xl text-black my-2 dark:text-white">제목</p>
                                <FormControl>
                                    <input
                                    className='border-2 border-slate-300 h-13 w-full rounded-lg text-lg p-2 dark:text-white'
                                    placeholder="제목을 입력해주세요." {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='content'
                        render={({ field }) => (
                            <FormItem>
                                <p className="text-xl text-black mb-2 dark:text-white">설명</p>
                                <FormControl>
                                    <textarea 
                                    className='w-full dark:text-white'
                                    style={{fontSize:18,padding:10,height:180,borderRadius:10,borderWidth:2,borderColor:'#cbd5e1', marginBottom:20}}
                                    placeholder="세부사항을 입력해주세요." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <button 
                className='fixed bottom-5 mt-10 w-[458px] h-16 rounded-lg bg-black border-1 text-white border-slate-100 shadow-lg text-xl hover:bg-slate-800
                dark:bg-white dark:text-black dark:font-semibold dark:hover:bg-slate-100 dark:w-[417px] dark:h-[50px] dark:bottom-9' 
                type='submit'>
                    등록
                </button>
            </form>
            
        </Form>
        </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  </>);
}