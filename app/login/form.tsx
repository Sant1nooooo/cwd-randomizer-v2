'use client'
import { signIn } from "next-auth/react";
import { FormEvent,useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [data, setData] = useState({email: '', password:''})
  async function handleSubmit(e:FormEvent<HTMLFormElement>)
  {
      e.preventDefault();

      console.log('Executing handleSubmit function...', data);
      try
      {
        const response = await signIn("credentials", {email: data.email, password: data.password, redirect:false}); 
        if(response?.error)
        {
          setError('Invalid credentials');
          return;
        }
        router.push('/dashboard');
      }
      catch (error)
      {
        console.log('Something went wrong!');
      }
  }
  function handleInput(e:any)
  {
    setData({...data, [e.target.name]:e.target.value});
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <label> Email <input name="email" type="email" onChange={handleInput}/> </label>
        <label>
          Password
          <input name="password" type="password"  onChange={handleInput}/>
        </label>
        <button>Sign In</button>
      </form>
      {error && <h1>{error}</h1>}
    </>
  );
}