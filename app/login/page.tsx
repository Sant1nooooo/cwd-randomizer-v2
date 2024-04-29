import { redirect } from "next/navigation";
import { LoginForm } from "./form";
import { auth } from "@/auth";
export default async function LoginPage()
{
  const session = await auth();
  if(session) redirect('http://cwd-randomizer-v2-two.vercel.app');
  return(
    <>
      <LoginForm/>
      <p>Email: jerome@gmail.com</p>
      <p>Password: jerome123</p>
      <p>routes:</p>
      <p>/</p>
      <p>/dashboard</p>
      <p>/login</p>
      <p>/register</p>
    </>
  );
}