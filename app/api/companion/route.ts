import { currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb'
export async function POST(req:Request) {
    try {
        const body = await req.json()
        const user = await currentUser();
        const {src, name, description,instructions,seed,categoryId}= body

        if(!user || !user.id || !user.firstName){
            return new NextResponse("unauthorized",{status:401})
        }

        if(!src||!description||!instructions||!seed||!categoryId){
            return new NextResponse("Missing required details",{status:400})
        }

        const companion = await prisma.companion.create({
            data:{
                categoryId,
                userId:user.id,
                userName:user.firstName,
                src,
                name,
                seed,
                description,
                instructions
            }
        })
        return NextResponse.json(companion)
    } catch (error) {
        console.log("[COMPANION_POST]",error)
        return new NextResponse("Internal error",{status:200})
    }
}