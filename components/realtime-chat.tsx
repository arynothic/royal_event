'use client'

import { cn } from '@/lib/utils'
import { ChatMessageItem } from '@/components/chat-message'
import { useChatScroll } from '@/hooks/use-chat-scroll'
import {
  type ChatMessage,
  useRealtimeChat,
} from '@/hooks/use-realtime-chat'
import { Button } from '@/components/ui/button'
import { Send, Image as ImageIcon } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { handleCommand, processMessageContent, commandsList } from '@/lib/chat-commands'

interface RealtimeChatProps {
  roomName: string
  username: string
  onMessage?: (messages: ChatMessage[]) => void
  messages?: ChatMessage[]
  persistent?: boolean
}

/**
 * Realtime chat component
 * @param roomName - The name of the room to join. Each room is a unique chat.
 * @param username - The username of the user
 * @param onMessage - The callback function to handle the messages. Useful if you want to store the messages in a database.
 * @param messages - The messages to display in the chat. Useful if you want to display messages from a database.
 * @returns The chat component
 */
export const RealtimeChat = ({
  roomName,
  username,
  onMessage,
  messages: initialMessages = [],
  persistent = false
}: RealtimeChatProps) => {
  const { containerRef, scrollToBottom } = useChatScroll()

  const {
    messages: realtimeMessages,
    sendMessage,
    isConnected,
  } = useRealtimeChat({
    roomName,
    username,
    isPersistent: persistent
  })
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Merge realtime messages with initial messages
  const allMessages = useMemo(() => {
    const mergedMessages = [...initialMessages, ...realtimeMessages]
    // Remove duplicates based on message id
    const uniqueMessages = mergedMessages.filter(
      (message, index, self) => index === self.findIndex((m) => m.id === message.id)
    )
    // Sort by creation date
    const sortedMessages = uniqueMessages.sort((a, b) => a.createdAt.localeCompare(b.createdAt))

    return sortedMessages
  }, [initialMessages, realtimeMessages])

  useEffect(() => {
    if (onMessage) {
      onMessage(allMessages)
    }
  }, [allMessages, onMessage])

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom()
  }, [allMessages, scrollToBottom])


  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!newMessage.trim() || !isConnected) return;

      // Check for help command
      if (newMessage === '/help') {
        const helpText = commandsList.map(cmd => 
          `${cmd.command} - ${cmd.description}`
        ).join('\n');
        const formattedHelp = helpText.split('\n').map(line => `<div>${line}</div>`).join('');
        await sendMessage(helpText, 'text', undefined, 'matrix', formattedHelp);
        setNewMessage('');
        return;
      }

      // Check for other commands
      if (newMessage.startsWith('/')) {
        const [command, ...rest] = newMessage.split(' ');
        const content = rest.join(' ');
        if (!content) return;

        const commandResult = handleCommand(command, content);
        if (commandResult) {
            await sendMessage(
              commandResult.content,
              'text',
              undefined,
              commandResult.style,
              commandResult.formattedContent
            );
        } else {
          // If command not found, send as normal message
          await sendMessage(newMessage, 'text', undefined, 'default');
        }
      } else {
        // Normal message with link formatting
        const processed = processMessageContent(newMessage);
        await sendMessage(processed, 'text', undefined, 'default');
      }

      setNewMessage('');
    },
    [newMessage, isConnected, sendMessage]
  );

  return (
    <div className="fixed inset-0 flex flex-col bg-[#1E1E1E] text-green-400 font-mono">
      {/* Terminal Header */}
      <div className="bg-black/90 py-3 px-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-400 font-medium">chat@{roomName} - active</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {allMessages.length === 0 ? (
          <div className="text-center text-sm text-gray-500">
            <span className="text-green-500">➜</span> {persistent ? 'No messages yet.' : 'Instance Created. Start the conversation!'}
          </div>
        ) : null}
        <div className="space-y-1">
          {allMessages.map((message, index) => {
            const prevMessage = index > 0 ? allMessages[index - 1] : null
            const showHeader = !prevMessage || prevMessage.user.name !== message.user.name

            return (
              <div
                key={message.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                <ChatMessageItem
                  message={message}
                  isOwnMessage={message.user.name === username}
                  showHeader={showHeader}
                />
              </div>
            )
          })}
        </div>
      </div>

      <form onSubmit={handleSendMessage} className="sticky bottom-0 left-0 right-0">
        <div className="flex flex-col w-full bg-black border-t border-gray-800">
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              
              if (file.size > 14 * 1024 * 1024) { // 14MB limit
                alert('Image size must be less than 14MB');
                return;
              }
              
              setIsLoading(true);
              try {
                // Convert to base64
                const reader = new FileReader();
                reader.onload = async (event) => {
                  const base64 = event.target?.result as string;
                  await sendMessage(
                    file.name,
                    'image',
                    base64
                  );
                  setIsLoading(false);
                };
                reader.readAsDataURL(file);
              } catch (err) {
                console.error('Failed to process image:', err);
                setIsLoading(false);
              } finally {
                e.target.value = ''; // Reset input
              }
            }}
            className="hidden"
            id="image-upload"
          />
          <div className="flex items-center gap-2 w-full p-4">
            <div className="hidden sm:flex items-center gap-2 text-sm min-w-[110px]">
              <span className="text-green-500 text-base">➜</span>
              <span className="text-blue-500 text-base">~/chat</span>
              <span className="text-gray-400 text-base">$</span>
            </div>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={isConnected ? "Type your message here..." : "Connecting..."}
              disabled={!isConnected}
              autoComplete="off"
              className={cn(
                "flex-1 h-12 bg-[#2D2D2D] text-green-400 placeholder-gray-500 rounded px-4 text-base",
                "border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500",
                "font-mono text-sm outline-none transition-colors",
                !isConnected && "opacity-50"
              )}
            />
            <div className="flex items-center gap-2">
              <label 
                htmlFor="image-upload"
                className={cn(
                  "h-12 px-3 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded transition-all cursor-pointer",
                  (!isConnected || isLoading) && "opacity-50 cursor-not-allowed"
                )}
              >
                <ImageIcon className="size-4" />
              </label>
              <Button
                className={cn(
                  "h-12 px-6 bg-green-500 hover:bg-green-600 text-black rounded transition-all",
                  (!isConnected || !newMessage.trim()) && "opacity-50"
                )}
                type="submit"
                disabled={!isConnected || !newMessage.trim()}
              >
                <Send className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
