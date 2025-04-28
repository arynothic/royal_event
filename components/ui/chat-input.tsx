"use client"

import * as React from "react"
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize"

import { cn } from "@/lib/utils"

export interface ChatInputProps
  extends Omit<TextareaAutosizeProps, "onSubmit"> {
  onSubmit?: (value: string) => void
}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ className, onSubmit, ...props }, ref) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (
        event.key === "Enter" &&
        !event.shiftKey &&
        !event.nativeEvent.isComposing
      ) {
        event.preventDefault()
        const value = event.currentTarget.value.trim()
        if (value && onSubmit) {
          onSubmit(value)
          event.currentTarget.value = ""
        }
      }
    }

    return (
      <TextareaAutosize
        ref={ref}
        className={cn(
          "flex w-full rounded-xl bg-background resize-none border border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onKeyDown={handleKeyDown}
        maxRows={5}
        {...props}
      />
    )
  }
)
ChatInput.displayName = "ChatInput"

export { ChatInput }
