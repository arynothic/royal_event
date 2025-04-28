"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  scrollToBottom?: boolean
}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, scrollToBottom = true, children, ...props }, ref) => {
    const messagesEndRef = React.useRef<HTMLDivElement>(null)

    const scrollToEnd = React.useCallback(() => {
      if (scrollToBottom) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    }, [scrollToBottom])

    React.useEffect(() => {
      scrollToEnd()
    }, [children, scrollToEnd])

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent",
          className
        )}
        {...props}
      >
        {children}
        <div ref={messagesEndRef} />
      </div>
    )
  }
)
ChatMessageList.displayName = "ChatMessageList"

export { ChatMessageList }
