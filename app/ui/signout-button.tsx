import { signOut } from "@/auth";

export default function Button()
{
    return(
        <form action={async ()=>{
            "use server"
            await signOut();
        }
        }>
            <button type='submit'>LOG OUT</button>
        </form>
    );
}