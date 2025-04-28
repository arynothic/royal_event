"use client"

import { useState, FormEvent, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble"
import { ChatInput } from "@/components/ui/chat-input"
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat"
import { ChatMessageList } from "@/components/ui/chat-message-list"

export function ExpandableChatDemo() {
  const router = useRouter()
  const { user, isLoaded } = useUser()
  const isAuthenticated = isLoaded && !!user

  const [messages, setMessages] = useState<Array<{
    id: number;
    content: string;
    sender: string;
    isSignInPrompt?: boolean;
  }>>([]);

  // Update messages when authentication state changes
  useEffect(() => {
    setMessages([
      {
        id: 1,
        content: isAuthenticated ? 
          "👋 Hi there! Welcome to Srijan Labs." : 
          "👋 Hey! Please sign in to chat with me and discover how I can help you build amazing things!",
        sender: "ai",
      },
      {
        id: 2,
        content: isAuthenticated ?
          "Our team is here to help you with any questions about our services, technology, or collaboration opportunities." :
          "Click here to sign in",
        sender: "ai",
        isSignInPrompt: !isAuthenticated
      }
    ]);
  }, [isAuthenticated]);

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Don't process message if not authenticated
    if (!isAuthenticated) {
      router.push('/sign-in?redirect_url=' + encodeURIComponent(window.location.pathname));
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ])
    setInput("")
    setIsLoading(true)

    // Generate a session ID if not exists
    const sessionId = localStorage.getItem('chatSessionId') || 
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem('chatSessionId', sessionId);

    // Send message to API
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input, sessionId }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: data.message,
          sender: "ai",
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "I apologize, but I'm having trouble responding right now. Please try again later.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAttachFile = () => {
    // Implement file attachment logic
  }

  const handleMicrophoneClick = () => {
    // Implement voice input logic
  }

  return (
    <div className="h-[600px] relative">
      <ExpandableChat
        size="lg"
        position="bottom-right"
        icon={<Bot className="h-6 w-6" />}
      >
        <ExpandableChatHeader className="flex flex-col items-center justify-center space-y-2 py-4 bg-black/40">
          <h1 className="text-xl font-semibold text-white">Chat with our AI Agent </h1>
          <p className="text-sm text-muted-foreground">
            Human support coming soon
          </p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                variant={message.sender === "user" ? "sent" : "received"}
                onClick={() => message.isSignInPrompt && router.push('/sign-in')}
                className={message.isSignInPrompt ? "cursor-pointer hover:opacity-80" : ""}
              >
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src={
                    message.sender === "user"
                      ? "/koreanuser.jpg"
                      : "/aiavatar.jpg"
                  }
                  fallback={message.sender === "user" ? "US" : "AI"}
                />
                <ChatBubbleMessage
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  {message.content}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src="/aiavatartraditional.jpg"
                  fallback="AI"
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border border-white/10 bg-black/50 focus-within:ring-1 focus-within:ring-white/20 p-1"
          >
            <ChatInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isAuthenticated ? "Send us a message about your project..." : "Please sign in to chat..."}
              disabled={!isAuthenticated}
              className="min-h-12 resize-none rounded-lg bg-transparent text-white border-0 p-3 shadow-none focus-visible:ring-0 placeholder:text-gray-400"
            />
            <div className="flex items-center p-3 pt-0 justify-between">
              <div className="flex">
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={handleAttachFile}
                >
                  <Paperclip className="size-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={handleMicrophoneClick}
                >
                  <Mic className="size-4" />
                </Button>
              </div>
              <Button type="submit" size="sm" className="ml-auto gap-1.5">
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  )
}
