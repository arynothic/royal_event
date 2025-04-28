"use client";

import { MainMenu } from "@/components/reactdev/Components/FlowingMenu/MainMenu";
import { MorphingText } from "@/components/magicui/morphing-text";
import { ExpandableChatDemo } from "@/components/expandable-chat-demo";
import AudioDisc from "@/components/ui/audio-disc";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainMenu />
      <div className="relative min-h-screen overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-blue-900/20" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-32">
          <MorphingText 
            texts={[
              "Meet Our Team",
              "Creative Minds",
              "Tech Innovators",
              "Designers",
              "Code Artists"
            ]}
            className="mb-24"
          />
          
          <div className="max-w-4xl mx-auto space-y-32">
            {/* Lead Developer */}
            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>o
                  <h2 className="text-4xl font-bold tracking-tight">The Raj</h2>
                  <p className="mt-1 text-lg text-white/50">Lead Developer</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  Innovative developer with a strong foundation in software engineering and a drive to solve real-world problems through technology. My expertise spans multiple programming languages and frameworks, enabling me to create robust, scalable solutions across various platforms.
                </p>

                {/* Technical Skills */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white/90">Technical Proficiencies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-white/40 mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "C++", "C", "Golang", "Rust", "JavaScript", "Dart"].map((lang) => (
                          <span key={lang} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/40 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "SQL", "MongoDB", "AI/ML", "Cloud Computing"].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 text-sm tracking-wider items-center mt-6">
                  <a 
                    href="https://github.com/TheRaj71" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/the-raj71" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://instagram.com/theraj7171" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a 
                    href="https://raj-six.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
                    </svg>
                    Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* UI/UX Designer */}
            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight">UI/UX Designer</h2>
                  <p className="mt-1 text-lg text-white/50">Rishikesh Yadav</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-6">
                <p className="text-xl text-white/70">
                  Crafting intuitive and beautiful user experiences. Focused on the intersection 
                  of aesthetics and functionality in modern web design.
                </p>
                <div className="flex flex-wrap gap-4 text-sm tracking-wider">
                  <a 
                    href="https://github.com/321Rishikesh" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kumar-rishikesh-4a409b298/" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://instagram.com/rishikesh__ydv__" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Backend Engineer */}
            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight">Backend Engineer</h2>
                  <p className="mt-1 text-lg text-white/50">Aryan Chaudhary</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-6">
                <p className="text-xl text-white/70">
                  Backend architecture specialist focused on building robust, scalable systems. 
                  Experienced in designing efficient databases and API architectures.
                </p>
                <div className="flex flex-wrap gap-4 text-sm tracking-wider">
                  <a 
                    href="https://github.com/ChaudharyAryan04" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aryan-chaudhary-868b382a3/" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://instagram.com/arynothic" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Full Stack Developer */}
            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight">Full Stack Developer</h2>
                  <p className="mt-1 text-lg text-white/50">Rishav Raj</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-6">
                <p className="text-xl text-white/70">
                  Versatile full stack developer with expertise in both frontend and backend technologies.
                  Passionate about creating seamless, end-to-end solutions and exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-4 text-sm tracking-wider">
                  <a 
                    href="https://github.com/rishavraj13" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rishavraj1314" 
                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div className="mt-32 pt-32 border-t border-white/10 max-w-4xl mx-auto">
            <AudioDisc className="grayscale" />
          </div>
        </div>
      </div>
      <ExpandableChatDemo />
    </main>
  );
}
