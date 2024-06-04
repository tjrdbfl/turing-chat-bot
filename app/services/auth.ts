import { useUser } from "@clerk/nextjs";

const FindCurrentUser=()=>{
    const {user}=useUser();
    return user;
}
export default FindCurrentUser;
