export async function getUser(inputEmail: string)
{
    try
    {
        const fetchedData = await fetch('http://cwd-randomizer-v2-two.vercel.app/api/getUser',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email:inputEmail})
        })
        const res = await fetchedData.json();
        const userData = { username:res[0].username ,email: res[0].email, password: res[0].password};
        return userData;

    }
    catch(e)
    {
        console.log('error on getuser()',e);
    }
}
export async function registerUser(user:Object)
{
    try
    {
        const res = await fetch('https://cwd-randomizer-v2-two.vercel.app/api/register',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(user)
        });
        if(res.ok)
        {
            const successMessage = await res.json();
            return successMessage.message;
        }
        else
        {

            const error = await res.json();
            return error.message;
        }
    }
    catch(e)
    {
        return 'Someting went wrong while creating account.'
    }
}