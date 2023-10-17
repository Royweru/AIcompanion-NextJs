import React from 'react'

import CompanionForm from './components/CompanionForm';
import prisma from '@/lib/prismadb'
import { auth, redirectToSignIn } from '@clerk/nextjs';
interface CompanionIdPageProps{
    params:{
        companionId:string;
    }
  
}

const CompanionIdPage =async ({
    params
}:CompanionIdPageProps) => {
  const {userId} = auth()
  
  if (!userId){
    return redirectToSignIn()
  }
  const companion = await prisma.companion.findUnique({
    where:{
        id:params.companionId,
        userId
    }
  })
  const categories = await prisma.category.findMany()
  return (
    <CompanionForm
     initialData={companion}
     categories={categories}
     />
  )
}

export default CompanionIdPage