import { createClient } from '@/lib/client'
import type { ChatMessage } from '@/hooks/use-realtime-chat'

const supabase = createClient()

export const saveMessageToDb = async (message: ChatMessage, roomName: string) => {
  try {
    const { error } = await supabase
      .from('chat_messages')
      .insert({
        id: message.id,
        room_name: roomName,
        content: message.content,
        type: message.type,
        image_url: message.imageUrl,
        style: message.style,
        formatted_content: message.formattedContent,
        user_name: message.user.name,
        created_at: message.createdAt
      })

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error saving message:', error)
    return false
  }
}

export const loadMessageHistory = async (roomName: string): Promise<ChatMessage[]> => {
  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('room_name', roomName)
      .order('created_at', { ascending: true })

    if (error) throw error

    return data.map((msg: {
      id: string;
      content: string;
      type: string;
      image_url?: string;
      style?: string;
      formatted_content?: string;
      user_name: string;
      created_at: string;
    }) => ({
      id: msg.id,
      content: msg.content,
      type: msg.type as ChatMessage['type'],
      imageUrl: msg.image_url,
      style: msg.style as ChatMessage['style'],
      formattedContent: msg.formatted_content,
      user: {
        name: msg.user_name
      },
      createdAt: msg.created_at
    }))
  } catch (error) {
    console.error('Error loading message history:', error)
    return []
  }
}
