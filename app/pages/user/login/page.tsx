import { SignInform } from "@/app/components/user/signInForm"

const LoginPage=()=>{
    return(<>
    <div className="bg-white h-screen w-full p-[20%]">
        <div className="border-4 rounded-2xl p-[5%]">
    <SignInform/>
    </div>
    </div>
    </>)
}
export default LoginPage;