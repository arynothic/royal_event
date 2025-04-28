"use client";

import { MainMenu } from "@/components/Components/FlowingMenu/MainMenu";
import { MorphingText } from "@/components/morphing-text";
import Waves from "@/components/Backgrounds/Waves/Waves";
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainMenu />
      <div className="relative min-h-screen overflow-hidden">
        {/* Background with Waves */}
        <div className="absolute inset-0">
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-blue-900/20" />
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-32">
          <MorphingText 
            texts={[
              "Enterprise Solutions",
              "Premium Services",
              "Advanced Capabilities",
              "Strategic Technology",
              "Innovation Partners"
            ]}
              className="mb-36"
          />
          
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">Enterprise Web Applications</h2>
                  <p className="mt-1 text-lg text-white/50">Advanced Web Engineering</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  We engineer sophisticated web platforms that drive enterprise success. From high-performance React and Nextjs applications to complex distributed systems, we deliver scalable solutions that handle millions of users with uncompromising reliability and security.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white"> Mobile Applications</h2>
                  <p className="mt-1 text-lg text-white/50">Native & Cross-Platform Excellence</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  Create powerful mobile experiences that meet enterprise demands. We specialize in building performant native and cross-platform applications with sophisticated features like real-time sync, offline capabilities, and seamless cloud integration.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">SaaS Architecture & Engineering</h2>
                  <p className="mt-1 text-lg text-white/50">Enterprise-Grade Product Engineering</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  We architect cloud-native SaaS platforms designed for scale, security, and resilience. From multi-tenancy and subscription management to modular microservices and API-first design — we build the foundation your business can grow on.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">AI-Powered Solutions</h2>
                  <p className="mt-1 text-lg text-white/50">Intelligent Automation & Personalization</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  Infuse your product with AI. From personalized recommendations and predictive analytics to intelligent assistants and workflow automation, we design systems that adapt, learn, and deliver real value.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">Cloud-Native DevOps</h2>
                  <p className="mt-1 text-lg text-white/50">Modern Infrastructure for High Velocity Teams</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  We implement CI/CD pipelines, container orchestration (Kubernetes, Docker), and infrastructure as code (Terraform) to accelerate your release cycle while ensuring uptime, security, and scalability.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">Custom API Ecosystems</h2>
                  <p className="mt-1 text-lg text-white/50">Secure, Scalable, Developer-Friendly</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  We create high-performance, well-documented REST & GraphQL APIs that act as the backbone of your product. Perfect for internal integrations or third-party developers building on your platform.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">Product Strategy & MVP Development</h2>
                  <p className="mt-1 text-lg text-white/50">Validate Fast. Scale Smart.</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  From idea to launch, we help startups and enterprises define, design, and develop minimum viable products that align with user needs and market demands. Rapid iterations, validated learning.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">Data Platforms & Analytics</h2>
                  <p className="mt-1 text-lg text-white/50">Turn Data Into Competitive Advantage</p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent translate-y-1" />
              </div>
              <div className="pl-4 border-l border-white/10 space-y-8">
                <p className="text-xl text-white/70">
                  We build modern data infrastructure — from ETL pipelines and data warehouses to custom dashboards and AI-driven analytics — empowering you to make smarter, faster decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
