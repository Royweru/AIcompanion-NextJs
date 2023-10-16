import { currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb'




export async function PATCH(
    req:Request,
    {params}:{params:{companionId:string}}
    ) {
    try {
        const body = await req.json()
        const user = await currentUser();
        const {src, name, description,instructions,seed,categoryId}= body

        if(!params.companionId){
            return new NextResponse("companion ID id required",{status:400})
        }

        if(!user || !user.id || !user.firstName){
            return new NextResponse("unauthorized",{status:401})
        }

        if(!src||!description||!instructions||!seed||!categoryId){
            return new NextResponse("Missing required details",{status:400})
        }

        const companion = await prisma.companion.update({
            where:{
                id:params.companionId
            },
            data:{
                categoryId,
                userId:user.id,
                userName:user.firstName,
                src:src,
                name,
                seed,
                description,
                instructions
            }
        })
        return NextResponse.json(companion)
    } catch (error) {
        console.log("[COMPANION_PATCH]",error)
        return new NextResponse("Internal error",{status:200})
    }
}