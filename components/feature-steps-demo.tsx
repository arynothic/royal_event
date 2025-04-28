"use client"

import { FeatureSteps } from "@/components/ui/feature-steps"

const features = [
  { 
    step: 'Step 1', 
    title: 'Requirements Analysis',
    content: 'We analyze your business needs and create a detailed technical specification.', 
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Custom Development',
    content: 'Our expert team develops tailored software solutions at competitive rates.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Launch & Support',
    content: 'We ensure smooth deployment and provide ongoing maintenance and support.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
]

export function FeatureStepsDemo() {
  return (
    <div className="bg-background text-foreground min-h-screen flex items-center">
      <FeatureSteps 
        features={features}
        title="Custom Software Development"
        autoPlayInterval={4000}
      />
    </div>
  )
}
