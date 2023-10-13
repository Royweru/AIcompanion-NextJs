import SearchInput from '@/components/search-input'
import Categories from '@/components/Categories'

import { UserButton } from '@clerk/nextjs'
import React from 'react'
import prisma from '@/lib/prismadb'
const RootPage = async() => {
  const categories = await prisma.category.findMany()
  return (
    <div className=' h-full p-4 space-y-2'>
      <SearchInput />
      <Categories data ={categories}/>
    </div>
  )
}

export default RootPage