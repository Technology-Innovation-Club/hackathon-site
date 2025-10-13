"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    heading: "₦1 Million Prize Pool + Startup Funding",
    description:
      "Compete for a total prize pool of ₦1 million in startup funding, with top teams receiving 500k, 300k, and 200k respectively, plus opportunities to launch your solutions as startups.",
  },
  {
    heading: "AI-Powered Innovation",
    description:
      "Reimagine today with AI by building solutions that leverage artificial intelligence to solve real-world problems in fields like education, fintech, and productivity.",
  },
  {
    heading: "Real-World Impact",
    description:
      "Develop practical solutions with scalability in mind, potentially leading to partnerships with the university and beyond",
  },
  {
    heading: "Free Meals & Event Perks",
    description:
      "Enjoy complimentary meals and all-day access to the hack space, with opportunities for interactions and post-event support.",
  },
];

const Revolution = () => {
  return (
    <div className="relative flex min-h-[70vh] min-w-full flex-col items-center overflow-hidden pb-20">
      <motion.h1 
        className="mt-6 font-pp-mondwest text-3xl md:text-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Be Part of the Revolution.
      </motion.h1>
      <motion.p 
        className="text-md mt-4 w-[70vw] max-w-[600px] text-center text-black md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Explore the potential of large language models and other open source
        API&apos;s, all while <span className="font-bold">making a lasting impact</span> in the world of
        artificial intelligence.
      </motion.p>
      <div className="my-16 grid max-w-[85vw] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="group glass-card min-h-[140px] rounded-xl p-8 transition-all duration-300 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(130, 248, 255, 0.5)" }}
          >
            <h3 className="mb-3 text-lg font-bold md:text-xl group-hover:text-black transition-colors duration-300">
              {card.heading}
            </h3>
            <p className="text-md font-normal leading-relaxed text-black group-hover:text-black transition-colors duration-300">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Revolution;
