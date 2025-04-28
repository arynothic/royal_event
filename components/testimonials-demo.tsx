"use client";

import { Testimonials } from "@/components/ui/testimonials"

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50&h=50&auto=format&fit=crop',
    text: 'Srijan Labs transformed our workflow completely. Their automation solutions helped us reduce manual tasks by 70% and improved accuracy significantly to my Bakery business.',
    name: 'Divya Jangir',
    username: '@divii',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&auto=format&fit=crop',
    text: 'Working with The Raj and his team was a game-changer. Their software solutions streamlined our Teaching operations and boosted our productivity by 85%.',
    name: 'Sarah Chen',
    username: '@sarahchen',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=50&h=50&auto=format&fit=crop',
    text: 'The custom automation tools from Srijan Labs have revolutionized how we handle data. What took days now happens in minutes.',
    name: 'Manav Jangir',
    username: '@manavdanav',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&auto=format&fit=crop',
    text: 'Impressed by the level of customization and scalability. Srijan Labs truly understands modern business needs and owner raj expertise with AI is highly commended.',
    name: 'Anshika Sharma',
    username: '@padhakuanshika',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&auto=format&fit=crop',
    text: 'The Raj and his team delivered beyond our expectations. Their solutions helped us achieve 200% growth in just 6 months in our healthcare business.',
    name: 'Gulnoza Shodmonova',
    username: '@gulnoza',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&auto=format&fit=crop',
    text: 'The Saas platform by Srijan Labs has become our competitive advantage. Exceptional results and amazing support especially in AI Division.',
    name: 'Varun Punia',
    username: '@varunpunia',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=50&h=50&auto=format&fit=crop',
    text: 'Our ROI since implementing Srijan Labs solutions has been phenomenal. Best investment in Softwares we\'ve made.',
    name: 'Michael Patel',
    username: '@michaelpatel',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&auto=format&fit=crop',
    text: 'The attention to detail and understanding of our business needs made Srijan Labs stand out. Their solutions are transformative.',
    name: 'Travis Kim',
    username: '@travis_kim',
    social: 'https://twitter.com'
  }
];

export function TestimonialsDemo() {
  return (
    <div className="container py-10">
      <Testimonials
        testimonials={testimonials}
        title="What our customers are saying"
        description="See how businesses are transforming with Srijan Labs Software solutions"
      />
    </div>
  )
}
