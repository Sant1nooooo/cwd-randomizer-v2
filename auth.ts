import Credentials from "next-auth/providers/credentials"
import {prisma} from './lib/prisma'
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages:{signIn:'/'},
    providers: [
        Credentials({
        credentials: { email: {},password: {}},
        async authorize(credentials)
        {            
            const email = credentials.email as string;
            const password = credentials.password as string;
            const user = await prisma.users.findMany({ where:{email: email}});
            const currentUser = user[0];
            if(!user) return null
            const isPasswordCorrect = password.toString() === user[0].password?.toString()
            if(isPasswordCorrect)
            {
              return currentUser
                // return{}
            }
            return null
        }
    }),
  ],
})