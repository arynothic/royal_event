import { cn } from '@/lib/utils'
import type { ChatMessage } from '@/hooks/use-realtime-chat'

interface ChatMessageItemProps {
  message: ChatMessage
  isOwnMessage: boolean
  showHeader: boolean
}

export const ChatMessageItem = ({ message, isOwnMessage, showHeader }: ChatMessageItemProps) => {
  const prefix = isOwnMessage ? '~/you' : '~';
  
  if (message.type === 'system') {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-black/80 py-2 px-4 rounded-md border border-cyan-500/30">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-cyan-500">System</span>
            <span className="text-gray-400">•</span>
            <span 
              className="text-cyan-400 shadow-[0_0_15px_-3px_rgba(34,211,238,0.5)]"
              dangerouslySetInnerHTML={{ 
                __html: message.formattedContent || message.content 
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      'flex mt-2 w-full transition-all',
      isOwnMessage ? 'flex-row-reverse' : 'flex-row'
    )}>
      <div className={cn(
        'max-w-[90%] w-full flex flex-col gap-1 font-mono',
        isOwnMessage ? 'items-end' : 'items-start'
      )}>
        {showHeader && (
          <div className={cn(
            'flex items-center gap-2 text-sm px-2 text-muted-foreground w-full',
            isOwnMessage ? 'justify-end' : 'justify-start'
          )}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">➜</span>
              {isOwnMessage ? (
                <>
                  <span className="text-blue-500">{prefix}</span>
                  <span className="text-yellow-500">[{message.user.name}]</span>
                </>
              ) : (
                <span className="text-yellow-500">{message.user.name}</span>
              )}
              <span className="text-gray-400">$</span>
            </div>
            <span className="opacity-50">
              {new Date(message.createdAt).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </span>
          </div>
        )}
        {message.type === 'image' ? (
          <div
            className={cn(
              'max-w-sm rounded-md overflow-hidden',
              isOwnMessage ? 'ml-8' : 'mr-8'
            )}
          >
            <img 
              src={message.imageUrl} 
              alt={message.content}
              className="w-full h-auto max-h-[500px] object-contain rounded border border-gray-800"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
                console.error('Failed to load image');
              }}
              loading="lazy"
            />
            {message.content && (
              <div className={cn(
                'py-2 px-3 text-sm bg-black/80 text-green-400',
                'border-t border-gray-800'
              )}>
                {message.content}
              </div>
            )}
          </div>
        ) : (
          <div
            className={cn(
              'py-3 px-4 rounded-md text-base w-fit font-mono break-all',
              {
                'bg-black/90 text-amber-400 border border-amber-500/50 shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]': message.style === 'golden',
                'bg-black/80': !message.style || message.style === 'default',
                'bg-black/95 border border-cyan-500/30': message.style === 'neon',
                'bg-black/90': message.style === 'rainbow' || message.style === 'matrix',
              },
              isOwnMessage ? 'ml-8' : 'mr-8'
            )}
          >
            <div 
              dangerouslySetInnerHTML={{ 
                __html: message.formattedContent || message.content 
              }}
              className={cn(
                'prose prose-invert max-w-none',
                message.style === 'rainbow' && 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent',
                message.style === 'matrix' && 'text-green-500 font-bold',
                message.style === 'neon' && 'text-cyan-400 shadow-[0_0_15px_-3px_rgba(34,211,238,0.5)]',
                message.style === 'red' && 'text-red-500',
                message.style === 'pink' && 'text-pink-500',
                message.style === 'white' && 'text-white',
                !message.style && 'text-green-400'
              )}
            />
          </div>
        )}
      </div>
    </div>
  )
}
