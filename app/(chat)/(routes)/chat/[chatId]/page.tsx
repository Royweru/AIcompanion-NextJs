import { auth, redirectToSignIn, useUser } from '@clerk/nextjs'
import React from 'react'

import prisma from '@/lib/prismadb'
import { redirect } from 'next/navigation'

import ChatClient from './components/client'

interface ChatIdPageProps{
    params:{
        chatId:string
    }
}

const ChatIdPage= async ({params}:ChatIdPageProps) => {
    const {userId} =  auth()

    if(!userId){
        redirectToSignIn()
    }

    const companion  = await prisma.companion.findUnique({
        where:{
            id:params.chatId
        },
        include:{
            messages:{
                orderBy:{
                    createdAt:"asc"
                },
                where:{
                    userId 
                },
            },
            _count:{
                select:{
                    messages:true
                }
            }
        }
    })

    if(! companion){
        return redirect('/')
    }
  return (
   <ChatClient companion= {companion} />
  )
}

export default ChatIdPage
