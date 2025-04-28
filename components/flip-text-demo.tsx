import { FlipText } from "@/components/magicui/flip-text";
import { motion } from "motion/react";

export function FlipTextDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-16">
      <div className="max-w-4xl">
        <FlipText className="font-playfair text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2]">
          Why you should{" "}
          <span className="relative inline-block transform hover:scale-105 transition-transform">
            <span className="absolute inset-0 bg-yellow-200/70 -rotate-2" style={{ backgroundColor: 'rgba(255, 255, 0, 0.7)' }} />
            <span className="relative inline-block rotate-2">choose us</span>
          </span>
          ?
        </FlipText>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair mt-8 text-center text-lg text-gray-300 sm:text-xl md:text-2xl leading-relaxed"
        >
          We&apos;re currently college students with a <span className="text-pink-400">huge passion</span> for building industry-grade projects. While we may not be experts yet, our commitment to learning and delivering <span className="text-pink-400">exceptional results</span> sets us apart. What we can guarantee is <span className="text-pink-400">100% dedication</span>, <span className="text-pink-400">Honesty</span>, <span className="text-pink-400">Quality and Discipline </span> in every project we undertake. That can be seen on our portfolio showcases our ability to create excellent products through determination and innovation. We bring <span className="text-pink-400">fresh perspectives</span>, adaptability, and a <span className="text-pink-400">relentless drive</span> to grow and excel in this ever-evolving tech landscape.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-playfair mt-6 text-center text-lg text-gray-300 sm:text-xl md:text-2xl leading-relaxed"
        >
           We Personally Feel it - building a business is like raising your own baby. Whether you&apos;re a fellow student or a non-technical dreamer ready to take flight with your startup, we <span className="text-pink-400">feel your passion</span>. Your vision matters to us, and we&apos;re not just here to code - we&apos;re here to be your <span className="text-pink-400">partners in creation</span>. Let&apos;s build something amazing together, every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
            <p className="font-playfair text-gray-400 italic">
            &ldquo;We don&apos;t just write code, we pour our hearts into building your digital dreams. Let&apos;s turn our vision&apos;s into reality.&rdquo;
            </p>
          <p className="font-playfair mt-2 text-blue-400">- Raj, Lead Developer</p>
        </motion.div>
      </div>
    </div>
  );
}
