import { NextResponse } from "next/server"
import { auth } from "./auth"
 
export default auth((req) => {
    const isLoggedIn = req.auth;
    if (!req.auth) {
      return NextResponse.redirect("http://localhost:3000/login");
    }
  })

export const config = {
  matcher: ["/dashboard","/"],
};
