import { redirect } from "next/navigation";
import { RegisterForm } from "./form";
import { auth } from "@/auth";
export default async function RegisterPage()
{
    const session = await auth();
    if(session) redirect('/');
    return(
        <RegisterForm/>
    );
}