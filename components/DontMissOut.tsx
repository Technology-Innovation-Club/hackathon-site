"use client";

import { motion } from "framer-motion";

export default function DontMissOut() {
  return (
    <motion.div 
      className="px-10 py-28 md:px-0 glass-card mx-8 md:mx-16 rounded-2xl border border-white/10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="mb-8 text-center font-pp-mondwest text-3xl sm:text-4xl xl:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Don&apos;t Miss Out.
      </motion.p>
      <motion.div 
        className="mb-8 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-center text-base text-black sm:text-xl xl:text-2xl">
          <span className="font-semibold">Friday, October 24 at 1pm WAT</span> - <span className="font-semibold">Saturday, October 25 at 5pm WAT</span>
        </p>
        <p className="text-center text-base text-black sm:text-xl xl:text-2xl">
          Pan-Atlantic University, Abuja Classroom
        </p>
      </motion.div>
      <motion.div 
        className="mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a
          rel="noopener noreferrer"
          target="_blank"
          href="https://tinyurl.com/tichackathon2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="group relative overflow-hidden px-12 py-4 font-bold text-white bg-black transition-all duration-300 hover:shadow-neon rounded-lg text-lg sm:text-xl xl:text-2xl">
            <span className="relative z-10">Apply Now</span>
          </button>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
