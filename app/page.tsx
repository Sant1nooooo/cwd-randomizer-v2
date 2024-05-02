
import { redirect } from "next/navigation";
import { LoginForm } from "./ui/form";
import  "../app/styles/login.css"
import { auth } from "@/auth";
import Image from 'next/image'
import ChangeRandomizer from "./ui/change-randomizer";
export default async function Home() {
  const session = await auth();
  if(session) redirect('/pages/dashboard');//cwd-randomizer-v2-two.vercel.app
  return (
    <>
      <nav>
        <Image src='/assets/cwd-logo.png' width={70} height={70} alt='Cloudwalk Digital Logo' priority/>
        <p> Cloudwalk Digital</p>
      </nav>
      <div className="login-content">
        {/* <ChangeRandomizer/> */}
        <Image src={`/assets/big-randomizer-1.png`} width={365} height={60} priority alt="Randomizer-picture"/>
        <LoginForm/>
      </div>
      {/* <p>Email: jerome@gmail.com</p>
      <p>Password: jerome123</p>
      <p>routes:</p>
      <p>/</p>
      <p>/dashboard</p>
      <p>/login</p>
      <p>/register</p> */}
    </>
  );
}
