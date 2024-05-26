import { SignUpForm } from "@/app/components/user/signUpForm";

const SignUpPage=()=>{
    return (<>
    <div className="bg-white h-screen w-full p-[20%]">
        <div className="border-4 rounded-2xl p-[5%]">
    <SignUpForm/>
    </div>
    </div>
    </>);
}
export default SignUpPage;