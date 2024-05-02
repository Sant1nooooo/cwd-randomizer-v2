'use client'
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [data, setData] = useState({email: '', password:''})
  async function handleSubmit(e:FormEvent<HTMLFormElement>)
  {
      e.preventDefault();
      try
      {
        const response = await signIn("credentials", {email: data.email, password: data.password, redirect:false}); 
        if(response?.error)
        {
          setError('INVALID CREDENTIALS');
          return;
        }
        router.push('/pages/dashboard'); //Redirecting the user to the dashboard after the successful signIn.
      }
      catch (error)
      {
        setError('Something went wrong!');
      }
  }
  function handleInput(e:any)
  {
    setData({...data, [e.target.name]:e.target.value});
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input name="email" className='email' type="email" placeholder="Email" onChange={handleInput}/>
        <input name="password" className='password' type="password" placeholder="Password" onChange={handleInput}/>
        <button><span>LOGIN</span></button>
      </form>
      {error && <h1 className='error-message'>{error}</h1>}
    </>
  );
}