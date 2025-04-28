"use client"

import { Twitter, Github, Code, Star, Coins } from "lucide-react"

export const Icons = {
  twitter: Twitter,
  github: Github,
  code: Code,
  star: Star,
  coins: Coins,
}

export type Icon = typeof Icons[keyof typeof Icons]
