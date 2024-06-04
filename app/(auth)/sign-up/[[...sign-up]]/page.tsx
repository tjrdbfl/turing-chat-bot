import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata:Metadata={
    title:"Turing Chat - sign-up"
}
const SignUpPage=()=>{
    return (<>
     <div className="flex bg-white h-screen w-full p-[20%] items-center justify-center">
            <div className="border-4 rounded-2xl p-[5%]">
                <SignUp 
                appearance={{variables:{colorPrimary:"#0F172A"}}}/>
            </div>
        </div>
    </>);
}
export default SignUpPage;