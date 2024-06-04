'use client';
import Modal from '@mui/material/Modal';
import { useChatLoadingStore } from '@/app/store/chat/chat-zustand';

export const DeleteModal = ({ open, setOpen,id }:
    {
        open: boolean,
        setOpen: (open: boolean) => void,
        id:number
    }
) => {

    const {setLoading}=useChatLoadingStore();
    
    const onClick=async ()=>{
        setLoading(true);
        setOpen(false);
        
        const response = await fetch('/api/category', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id:id
          })
          ,cache:'no-store'
        })
    
        if (response.ok) {
          alert('채팅창 삭제 성공');
        } else {
          alert('채팅창 삭제 실패하셨습니다. 다시 시도해주세요.');
        }
        window.location.reload();
        setLoading(false);
    }

    return (<>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='w-[550px] h-[250px] rounded-lg p-10 bg-white dark:bg-zinc-800
            absolute top-[30%] xl:left-[37%] md:left-[22%]'>
                <p
                    id="modal-modal-title"
                    className='text-black text-2xl dark:text-white'>
                    채팅을 삭제하시겠습니까?
                </p>
                <p id="modal-modal-description"
                    className='text-black dark:text-white mt-7'>
                    더 이상 이 채팅을 볼 수 없게 됩니다. 프롬프트, 대답, 의견과 같은 관련 활동도 Turing Chat 앱에서 삭제됩니다.
                </p>

                <div className='flex flex-row w-full mt-7 ml-[67%] gap-x-4'>

                    <button
                        className='text-blue-500 text-xl p-3 hover:rounded-full hover:bg-blue-50
                        dark:hover:bg-zinc-600'
                        onClick={onClick}>삭제</button>

                    <button
                        className='text-blue-500 text-xl p-3 hover:rounded-full hover:bg-blue-50
                        dark:hover:bg-zinc-600'
                        onClick={() => setOpen(false)}
                    >취소</button>
                </div>
            </div>

        </Modal>
    </>);
}