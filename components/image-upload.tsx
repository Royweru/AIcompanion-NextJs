'use client'
import React, { useEffect, useState } from 'react'

import{CldUploadButton} from 'next-cloudinary'
import Image from 'next/image'

interface ImageUploadProps{
    value:string,
    onChange:(src:string)=>void
    disabled?:boolean
}

const ImageUpload:React.FC<ImageUploadProps> = ({
    value,
    onChange,
    disabled
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return false
    }
  return (
    <div className=' space-y-4 w-full flex flex-col justify-center items-center'>
        <CldUploadButton
        onUpload={(result:any)=>onChange(result.info.secure_url)}
         options={{
            maxFiles:1
         }}
         uploadPreset='ksr4nuvh'
        >
          <div className=' p-4 border-4 border-dashed
           border-primary/10
           rounded-lg
           hover:opacity-75
           transition
            flex
            flex-col
            space-y-2
            items-center
            justify-center
          '>
            <div className=' relative h-40 w-40'>
                    <Image
                      fill
                      alt='upload'
                      src={value||"/images/placeholder.jpeg"}
                      className='rounded-lg object-cover'
                      />
            </div>
          </div>
        </CldUploadButton>
    </div>
  )
}

export default ImageUpload