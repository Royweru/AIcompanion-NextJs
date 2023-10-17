"use client"
import { Companion } from '@prisma/client'
import React from 'react'
import ChatMessage, { ChatMessageProps } from './ChatMessage'

interface ChatMessagesProps{
    messages:ChatMessageProps[],
    isLoading:boolean,
    companion:Companion
}

const ChatMessages:React.FC<ChatMessagesProps> = ({
    messages,
    isLoading,
    companion
}) => {
  return (
    <div className='flex flex-1 overflow-y-auto pr-4'>
      <ChatMessage 
       src={companion.src}
       role='system'
       content={`Hellow I am ${companion.name},${companion.description}`}
      />
       <ChatMessage 
       src={companion.src}
       role='user'
       content={`Hellow I am ${companion.name},${companion.description}`}
      />
      
    </div>
  )
}

export default ChatMessages