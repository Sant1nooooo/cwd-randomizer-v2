import { redirect } from "next/navigation";
import { RegisterForm } from "./form";
import { auth } from "@/auth";
export default async function RegisterPage()
{
    const session = await auth();
    if(session) redirect('/pages/dashboard');//cwd-randomizer-v2-two.vercel.app
    return(
        <RegisterForm/>
    );
}