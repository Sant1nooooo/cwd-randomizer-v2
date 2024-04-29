'use client'
import { useState } from "react";
import { registerUser } from "@/lib/actions";
import { redirect } from "next/navigation";

export function RegisterForm()
{
    const [message, setMessage] = useState('');
    const [data, setData] = useState({email: '', username: '', password:''});
    if(message === "User successfully created!") redirect('/login')
    function handleTextInput(e:any)
    {
        setData({...data, [e.target.name]: e.target.value});
    }
    async function handleFormSubmit(e:any)
    {
        e.preventDefault();
        setMessage(await registerUser(data));
    }
    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <input name="email" type="email" placeholder="Enter email..." required onChange={handleTextInput}/>
                <input name="username" type="text" placeholder="Enter username..." required onChange={handleTextInput}/>
                <input name="password" type="password" placeholder="Enter password..." required onChange={handleTextInput}/>
                <button>SUBMIT</button>
            </form>
            {message && <h1>{message}</h1>}
        </>
    );
}