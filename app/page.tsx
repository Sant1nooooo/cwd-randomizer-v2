import { signOut } from "@/auth";
export default function Home() {

  return (
    <>
      <h1> HOMEPAGE</h1>
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
