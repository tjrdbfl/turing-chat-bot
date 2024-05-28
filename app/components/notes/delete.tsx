import { db } from '@/app/lib/db';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const DeleteChat=({categoryId}:{categoryId:number})=>{

    const handleClick = async () => {
        try{
            await db.category.delete({
                where:{
                    id:categoryId
                }
            }).then()
        }catch(error){
            alert('채팅창 삭제 실패하셨습니다. 다시 시도해주세요.');
        }
       
    }

return(<>
    <button
    onClick={handleClick}
    >
    <MoreVertIcon/>
    </button>
    </>);
}