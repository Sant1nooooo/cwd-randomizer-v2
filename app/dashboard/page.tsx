import { signOut } from "@/auth";
export default function DashboardPage()
{
    return(
        <>
            <h1>Dashboard Page</h1>
            <form
      action={async () => {
        "use server"
        await signOut()
        
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
        </>
    );
    

    
}