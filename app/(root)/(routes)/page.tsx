import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Sparkles } from 'lucide-react'
const RootPage = () => {
  return (
    <div>
     <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default RootPage