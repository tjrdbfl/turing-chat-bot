'use client';
import Modal from '@mui/joy/Modal';
import { useForm } from 'react-hook-form';
import { CreateChatSchema } from '@/app/schemas/chat/chatSchema';
import { Form, FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Category } from '@prisma/client';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import { useTheme } from 'next-themes';


export const ChatModal = ({ open, setOpen, onSubmit, category }
    : {
        open: boolean
        , setOpen: (open: boolean) => void
        , onSubmit: (values: CreateChatSchema) => void
        , category?: Category
    }) => {

    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    
    const form = useForm<CreateChatSchema>(
        {
            resolver: zodResolver(CreateChatSchema),
            defaultValues: {
                title: category?.title || '',
                content: category?.content || ''
            }
        }
    );

    return (<>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className='w-[550px] h-[550px] rounded-lg bg-white p-5 dark:bg-zinc-800
            absolute top-[20%] xl:left-[37%] md:left-[20%]'>
                <div className='flex flex-row'>
                    <SwitchAccessShortcutAddIcon className="text-2xl mt-2 mr-2 text-blue-500" />
                    <p className='mb-5 text-center text-3xl font-medium 
                bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text inline-block text-transparent'>
                        Create Chat
                    </p>

                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <div className="space-y-6">
                            <FormField
                                control={form.control}
                                name='title'
                                render={({ field }) => (
                                    <FormItem>
                                        <p className="text-xl text-black my-2 ml-1 dark:text-white">Title</p>
                                        <FormControl>
                                            <div>
                                                <input
                                                    className='border-2 border-slate-300 w-full rounded-md text-lg text-black p-2 dark:text-white
                                                dark:border-zinc-800'
                                                    placeholder="제목을 입력해주세요." {...field} />

                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='content'
                                render={({ field }) => (
                                    <FormItem>
                                        <p className="text-xl text-black mb-2 ml-1 dark:text-white">Description</p>
                                        <FormControl>
                                            <div>
                                            <textarea 
                                    className='w-full h-[180px] text-black border-2 border-slate-300 rounded-lg p-2 text-lg dark:text-white dark:border-0'
                                    placeholder="세부사항을 입력해주세요." {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <button className="mt-5 w-full h-16 relative inline-flex items-center justify-center p-[3px] me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                        hover:opacity-85"
                            type='submit'>
                                {currentTheme==='dark' ?
                                <span className="w-full relative px-5 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Submit    
                                </span> 
                                :
                                <span className='text-white text-xl'>Submit</span>    }
                           
                        </button>

                    </form>

                </Form>
            </div>

        </Modal>
    </>);
}