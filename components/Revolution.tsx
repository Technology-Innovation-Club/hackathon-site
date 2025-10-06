"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    heading: "$100K Investment",
    description:
      "Teams selected by a panel of expert VCs have the opportunity to take some of the $100K investment from the Berkeley SkyDeck Fund and work full time on their project for the rest of the summer.",
  },
  {
    heading: "Exclusive Recruiting Opportunities",
    description:
      "Meet and network with other AI/LLM developers, industry experts, and potential investors. Build lasting connections and get your foot in the door.",
  },
  {
    heading: "Learn From the Best",
    description:
      "Attend workshops and hear from the AI community. This is your chance to learn from the best and take your skills to the next level.",
  },
  {
    heading: "Free Food, Free Swag, Free Credits",
    description:
      "We'll take care of your meals and drinks. Meanwhile, stock up on free swag from our sponsors.",
  },
];

const Revolution = () => {
  return (
    <div className="relative flex min-h-[70vh] min-w-full flex-col items-center overflow-hidden bg-black/50 pb-20">
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <Image
          src="/images/four-point.svg"
          className="mt-24"
          height={75}
          width={75}
          alt="Four Point"
        />
      </motion.div>
      <motion.h1 
        className="mt-6 font-pp-mondwest text-3xl md:text-5xl gradient-text text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Be Part of the Revolution.
      </motion.h1>
      <motion.p 
        className="text-md mt-4 w-[70vw] max-w-[600px] text-center text-gray-200 md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Explore the potential of large language models and other open source
        API's, all while <span className="gradient-text font-bold">making a lasting impact</span> in the world of
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
            <h3 className="mb-3 text-lg font-bold gradient-text md:text-xl group-hover:text-white transition-colors duration-300">
              {card.heading}
            </h3>
            <p className="text-md font-normal leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Revolution;
