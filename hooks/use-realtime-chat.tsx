'use client'

import { createClient } from '@/lib/client'
import { RealtimeChannel } from '@supabase/supabase-js'
import { useCallback, useEffect, useRef, useState } from 'react'
import { loadMessageHistory, saveMessageToDb } from '@/lib/chat-db'

interface UseRealtimeChatProps {
  roomName: string
  username: string
  isPersistent?: boolean
}

export interface ChatMessage {
  id: string
  content: string
  type: 'text' | 'image' | 'system'
  imageUrl?: string
  style?: 'default' | 'golden' | 'rainbow' | 'matrix' | 'neon' | 'red' | 'pink' | 'white'
  formattedContent?: string
  user: {
    name: string
  }
  createdAt: string
}

const EVENT_MESSAGE_TYPE = 'message'

export function useRealtimeChat({ roomName, username, isPersistent = false }: UseRealtimeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [channel, setChannel] = useState<RealtimeChannel | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const supabaseRef = useRef(createClient())

  useEffect(() => {
    const supabase = supabaseRef.current
    let welcomeTimeoutId: NodeJS.Timeout | undefined
    
    // Load message history if persistent mode is enabled
    if (isPersistent) {
      loadMessageHistory(roomName).then((historicalMessages) => {
        setMessages(historicalMessages)
      })
    }
    
    const newChannel = supabase.channel(roomName, {
      config: {
        broadcast: { self: true },
        presence: { key: username },
      },
    })

    newChannel
      .on('broadcast', { event: EVENT_MESSAGE_TYPE }, ({ payload }: { payload: unknown }) => {
        const message = payload as ChatMessage
        setMessages((current) => {
          // Prevent duplicate messages
          if (current.some((m) => m.id === message.id)) {
            return current
          }
          return [...current, message]
        })
      })
      .subscribe(async (status: 'SUBSCRIBED' | 'TIMED_OUT' | 'CLOSED' | 'CHANNEL_ERROR') => {
        if (status === 'SUBSCRIBED') {
          setIsConnected(true)
          // Add join message directly to messages
          const welcomeMessageId = crypto.randomUUID()
          setMessages(current => [
            ...current,
            {
              id: welcomeMessageId,
              content: `Fuck You ${username}! 🎉`,
              type: 'system',
              user: {
                name: 'System'
              },
              createdAt: new Date().toISOString(),
              style: 'neon'
            }
          ])
          
          // Remove welcome message after 5 seconds
          welcomeTimeoutId = setTimeout(() => {
            setMessages(current => current.filter(msg => msg.id !== welcomeMessageId))
          }, 5000)
        } else {
          setIsConnected(false)
        }
      })

    setChannel(newChannel)


    return () => {
      if (welcomeTimeoutId) {
        clearTimeout(welcomeTimeoutId)
      }
      supabase.removeChannel(newChannel)
    }
  }, [roomName, username, isPersistent])

  const sendMessage = useCallback(
    async (content: string, type: ChatMessage['type'] = 'text', imageUrl?: string, style: ChatMessage['style'] = 'default', formattedContent?: string) => {
      if (!channel || !isConnected) return

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        type,
        imageUrl,
        style,
        formattedContent,
        user: {
          name: username,
        },
        createdAt: new Date().toISOString(),
      }

      try {
        const result = await channel.send({
          type: 'broadcast',
          event: EVENT_MESSAGE_TYPE,
          payload: message,
        })

        if (result === 'ok') {
          // Save message to database if persistent mode is enabled
          if (isPersistent) {
            await saveMessageToDb(message, roomName)
          }
          return true
        }
        return false
      } catch (error) {
        console.error('Failed to send message:', error)
        return false
      }
    },
    [channel, isConnected, username, isPersistent, roomName]
  )

  return { messages, sendMessage, isConnected }
}
