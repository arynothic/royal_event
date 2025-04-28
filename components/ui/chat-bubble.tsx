"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received"
  children?: React.ReactNode
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant = "received", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-max max-w-[80%] gap-2",
        variant === "sent" ? "ml-auto" : "mr-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
ChatBubble.displayName = "ChatBubble"

interface ChatBubbleAvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

const ChatBubbleAvatar = React.forwardRef<HTMLImageElement, ChatBubbleAvatarProps>(
  ({ className, src, fallback, alt, ...props }, ref) => (
    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-white/10 font-semibold">
      {src ? (
        <img
          ref={ref}
          src={src}
          alt={alt || fallback || "Avatar"}
          className={cn("h-full w-full rounded-full object-cover", className)}
          {...props}
        />
      ) : (
        <span className="text-sm text-white/70">{fallback}</span>
      )}
    </div>
  )
)
ChatBubbleAvatar.displayName = "ChatBubbleAvatar"

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received"
  isLoading?: boolean
}

const ChatBubbleMessage = React.forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ className, variant = "received", isLoading, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl px-4 py-2 max-w-md text-sm",
          variant === "sent"
            ? "bg-blue-600 text-white"
            : "bg-white/10 text-white",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <div className="flex gap-1.5">
          <div className="h-2 w-2 animate-bounce rounded-full bg-current" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:0.2s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:0.4s]" />
        </div>
      ) : (
        children
      )}
    </div>
  )
)
ChatBubbleMessage.displayName = "ChatBubbleMessage"

export { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage }
