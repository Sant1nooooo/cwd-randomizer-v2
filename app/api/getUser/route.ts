import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";


export async function POST(req:Request)
{
    try
    {
        const data = await req.json();
        const user = await prisma.users.findMany({ where:{email: data.email}});
        return NextResponse.json(user[0]);
    }
    catch(e)
    {
        console.log("Error while putting user to the database",e);
    }
}