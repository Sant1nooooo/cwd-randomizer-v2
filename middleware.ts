import { NextResponse } from "next/server"
import { auth } from "./auth"
 
export default auth((req) => {

  if (!req.auth) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ["/pages/dashboard"],
};

/*
  CHANGES:
  (TUESDAY)
  1. Middleware 
    - NextResponse.redirect(new URL('/login', req.url))
  2. registerUser()
    - from "http://localhost:3000/api/register" to "http://cwd-randomizer-v2-two.vercel.app/api/register"
  3. getUser()
    - from "http://localhost:3000/api/getUser" to "http://cwd-randomizer-v2-two.vercel.app/api/register"
  4. LoginPage and RegisterPage
    - from "/" to "http://cwd-randomizer-v2-two.vercel.app"
  
  THURSDAY
  1. UI of Login and Dashboard page.
*/
