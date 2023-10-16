
import React from 'react'
import { AvatarImage,Avatar } from './ui/avatar'

interface BotAvatarProps{
    src:string
}
const BotAvatar:React.FC<BotAvatarProps> = ({
    src
}) => {
  return (
    <Avatar className=' h-12 w-12'>
        <AvatarImage src={src}/>
    </Avatar>
  )
}

export default BotAvatar