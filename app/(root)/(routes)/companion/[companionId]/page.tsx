import React from 'react'

import CompanionForm from './components/CompanionForm';
import prisma from '@/lib/prismadb'
interface CompanionIdPageProps{
    params:{
        companionId:string;
    }
  
}

const CompanionIdPage =async ({
    params
}:CompanionIdPageProps) => {

  const companion = await prisma.companion.findUnique({
    where:{
        id:params.companionId
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