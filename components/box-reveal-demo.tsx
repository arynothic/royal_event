"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion } from "framer-motion";

export function BoxRevealDemo() {
  return (
    <div className="min-h-screen w-full bg-black px-4 py-12 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <BoxReveal boxColor="#ff3333" duration={0.5}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8 text-3xl font-bold leading-tight sm:text-4xl md:text-[3.5rem]"
          >
            How Did We Dream Up सृजन Labs?<span className="text-red-500">.</span>
          </motion.p>
        </BoxReveal>

        <BoxReveal boxColor="#ff3333" duration={0.5}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-8 text-xl font-medium leading-relaxed md:mb-12 md:text-2xl"
          >
            It started with a simple revenue project and <span className="text-red-500">Raj, our lead developer</span>, who saw beyond the immediate task to something that could touch many lives.
          </motion.h2>
        </BoxReveal>

        <BoxReveal boxColor="#ff3333" duration={0.5}>
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-base leading-relaxed md:text-lg"
            >
              While working on a revenue generation project, Raj had a moment of clarity. &ldquo;What if we could turn this into a <span className="text-red-500">SaaS platform</span> that helps other startups and users?&rdquo; he thought. It wasn&rsquo;t just about building another tool; it was about creating opportunities to <span className="text-red-500">connect with people</span>, share knowledge, and gain real-world experience. That&rsquo;s how <span className="text-red-500">सृजन (Srijan) Labs</span> was born &ndash; not just as a company, but as a space for creation and growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-base leading-relaxed md:text-lg"
            >
              Our vision isn&rsquo;t driven by profit margins. At <span className="text-red-500">सृजन Labs</span>, we&rsquo;re here to learn, grow, and apply our knowledge to solve real-world problems. Each project is a new adventure, teaching us something valuable while we help others succeed. We&rsquo;ve already completed several projects, each one adding to our experience and understanding of what users truly need.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-base leading-relaxed md:text-lg"
            >
              Today, we&rsquo;re building something special &ndash; a platform where <span className="text-red-500">developers can find open-source projects</span> to learn from and contribute to, where <span className="text-red-500">non-technical business owners</span> can access affordable no-code solutions, and where innovation meets accessibility. We&rsquo;re still growing, still learning, still shaping our dream. Maybe one day we&rsquo;ll become a full-fledged SaaS company, but for now, we&rsquo;re focused on creating value and making technology accessible to everyone who needs it.
            </motion.p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
