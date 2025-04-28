"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export function SignInPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Show prompt after 10 seconds if user is not signed in
    const timer = setTimeout(() => {
      if (!isSignedIn) {
        setShowPrompt(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isSignedIn])

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 p-6 bg-black/90 rounded-lg shadow-xl max-w-md border border-blue-500/20">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-white">Get the Full Experience</h3>
        <p className="text-gray-300">
          Sign in to access exclusive features and personalize your experience.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/sign-in')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Sign In / Sign Up
          </button>
          <button
            onClick={() => setShowPrompt(false)}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
