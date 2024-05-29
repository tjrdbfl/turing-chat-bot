'use client';
import { CreateChatSchema } from '@/app/schemas/notes/noteSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CreateIcon from '@mui/icons-material/Create';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Category } from '@prisma/client';
import { ChatModal } from './chatModal';

export const UpdateChat = ({ category }: { category: Category }) => {

    const [open, setOpen] = useState<boolean>(false);

    const onSubmit = async (values: CreateChatSchema) => {
        console.log('onSubmit');
        setOpen(false);

        const response = await fetch('/api/notes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:category.id,
                ...values
            })
        })

        if (response.ok) {
            alert('이름 변경 성공');
        } else {
            alert('이름 변경 실패하셨습니다. 다시 시도해주세요.');
        }

        window.location.reload();
    }

    return (<>
        <Fragment>
            <button
                onClick={() => setOpen(true)}
                className='flex flex-row px-5 h-12 items-center hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-sky-800'>
                <CreateIcon className='text-slate-700 mr-2 dark:text-white' />
                <p className="text-slate-700 dark:text-white">이름 변경</p>
            </button>
            <ChatModal open={open} setOpen={setOpen}
            category={category} onSubmit={onSubmit} />
        </Fragment>
    </>);
}