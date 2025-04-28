'use client'

import { RealtimeChat } from '@/components/realtime-chat'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { MatrixRain } from '@/components/matrix-rain'

export default function ChatPage() {
  const { user } = useUser()
  const [roomName, setRoomName] = useState('')
  const [isJoined, setIsJoined] = useState(false)
  const [isPersistent, setIsPersistent] = useState(false)

  if (!user) {
    return null
  }

  if (!isJoined) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1E1E1E] font-mono text-green-400">
        <MatrixRain />
        <div className="w-full max-w-lg p-8 bg-black/90 border border-gray-800 rounded-lg">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400">terminal@chat - connect</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-500">~/connect</span>
              <span className="text-gray-400">$</span>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="flex-1 bg-transparent border-none text-green-400 placeholder-gray-600 focus:ring-0 font-mono outline-none"
                placeholder="Enter room name..."
                autoFocus
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input
                type="checkbox"
                id="persistent"
                checked={isPersistent}
                onChange={(e) => setIsPersistent(e.target.checked)}
                className="rounded border-gray-600 text-green-500 focus:ring-green-500 bg-transparent"
              />
              <label htmlFor="persistent">Enable message history</label>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsJoined(true)}
                disabled={!roomName}
                className={cn(
                  "px-6 py-2 bg-green-500 text-black rounded font-medium transition-opacity",
                  !roomName && "opacity-50"
                )}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <RealtimeChat 
      roomName={roomName} 
      username={user.username || `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.id}
      persistent={isPersistent}
    />
  )
}
