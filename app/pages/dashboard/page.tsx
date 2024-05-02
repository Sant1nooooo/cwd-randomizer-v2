import Navigation from "@/app/ui/dashboard/navigation";
import Pagination from "@/app/ui/dashboard/pagination";
import Analytics from "@/app/ui/dashboard/analytics";
import Button from "../../ui/signout-button";
import  "@/app/styles/dashboard.css"
export default function DashboardPage()
{
/*
  As much as possible 'auth' yung gagamitin hindi useSession, gagamitin lang yung useSession kapag need lagyan ng 'use client' yung component.
*/
  return(
      <>
        <Navigation/>
        <Analytics/>
        <Pagination/>
        <Button/>
      </>
  );  
}