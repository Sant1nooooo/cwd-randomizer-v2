import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"


export async function POST(req:Request)
{
    try
    {
        const data = await req.json();
        console.log(data)
        //Check if the email is already used.
        const isSimilar = await prisma.users.findFirst({ where:{email: data.email}});
        if(isSimilar)
        {
            return NextResponse.json({message: "Email is already existing!"});
        }

        //If not then save the data database.
        await prisma.users.create({
            data: {username: data.username, email: data.email, password: data.password}
        });
        return NextResponse.json({message: "User successfully created!"});
    }
    catch(e)
    {
        console.log("Error while putting user to the database",e);
    }
}