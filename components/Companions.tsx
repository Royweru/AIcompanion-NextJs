import { Companion } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface CompanionProps{
    data:(Companion&{
        _count:{
            messages:number
        }
    })[]
}

const Companions:React.FC<CompanionProps> = ({
  data
}) => {
  if (data.length===0){
    return (
        <div className=' pt-10 flex flex-col items-center justify-center space-y-3'>
            <div className=' relative w-60 h-60'>
                <Image
                  fill
                  className=' grayscale'
                  alt='Empty'
                  src="/images/empty.jpeg"
                />
            </div>
            <p className=' text-xl text-muted-foreground text-yellow-200 font-semibold'>
                No companions found
            </p>
        </div>
    )
  }
  return (
    <div>Companions!</div>
  )
}

export default Companions