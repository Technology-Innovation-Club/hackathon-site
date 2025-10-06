"use client";

import { motion } from "framer-motion";

export default function PhotoGrid() {
  return (
    <div className="relative z-10 flex min-h-screen min-w-full flex-col items-center overflow-hidden px-8 pb-12 pt-24">
      <motion.h1 
        className="-mb-5 font-pp-mondwest text-4xl text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Join 1000+ hackers in building
      </motion.h1>
      <motion.h1 
        className="mb-10 mt-6 font-pp-mondwest text-4xl gradient-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        the next generation of responsible AI.
      </motion.h1>
      <div className="relative aspect-square w-full max-w-4xl">
        <motion.div 
          className="absolute -left-[100px] top-[300px] size-40 rotate-45"
          animate={{ rotate: [45, 60, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            className="h-40 w-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </motion.div>
        <motion.div 
          className="absolute right-0 top-0 -z-10 size-28 translate-x-1/2 translate-y-1/2 rotate-12"
          animate={{ rotate: [12, 27, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            className="h-40 w-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 -translate-y-1/2 translate-x-32"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            className="h-40 w-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </motion.div>
        {/* Grid for desktop and larger devices */}
        <div className="z-10 hidden h-full grid-cols-11 grid-rows-11 gap-3 md:grid">
          {[
            { col: "col-span-3 col-start-1", row: "row-span-2 row-start-1", img: "DSC_0569", delay: 0 },
            { col: "col-span-3 col-start-4", row: "row-span-2 row-start-1", img: "DSC_0493", delay: 0.1 },
            { col: "col-span-3 col-start-7", row: "row-span-3 row-start-1", img: "DSC_0444", delay: 0.2 },
            { col: "col-span-2 col-start-10", row: "row-span-3 row-start-1", img: "DSC_0235", delay: 0.3 },
            { col: "col-span-2 col-start-1", row: "row-span-3 row-start-3", img: "DSC_0655", delay: 0.4 },
            { col: "col-span-4 col-start-3", row: "row-span-3 row-start-3", img: "DSC_0703", delay: 0.5 },
            { col: "col-span-5 col-start-7", row: "row-span-4 row-start-4", img: "DSC_0683", delay: 0.6 },
            { col: "col-span-4 col-start-1", row: "row-span-3 row-start-6", img: "DSC_0532", delay: 0.7 },
            { col: "col-span-2 col-start-5", row: "row-span-4 row-start-6", img: "DSC_0274", delay: 0.8 },
            { col: "col-span-2 col-start-7", row: "row-span-4 row-start-8", img: "DSC_0342", delay: 0.9 },
            { col: "col-span-3 col-start-9", row: "row-span-4 row-start-8", img: "DSC_0419", delay: 1.0 },
            { col: "col-span-4 col-start-1", row: "row-span-3 row-start-9", img: "DSC_0119", delay: 1.1 },
            { col: "col-span-2 col-start-5", row: "row-span-2 row-start-10", img: "DSC_0022", delay: 1.2 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${item.col} ${item.row}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img
                className="h-full w-full object-cover"
                src={`/images/image-grid/${item.img}.png`}
                alt={item.img}
              />
            </motion.div>
          ))}
        </div>
        {/* Smaller layout for mobile */}
        <div className="z-10 grid h-full grid-cols-6 grid-rows-8 gap-2 md:hidden">
          {[
            { col: "col-span-3 col-start-1", row: "row-span-1 row-start-1", img: "DSC_0569", delay: 0 },
            { col: "col-span-3 col-start-4", row: "row-span-1 row-start-1", img: "DSC_0493", delay: 0.1 },
            { col: "col-span-2 col-start-1", row: "row-span-2 row-start-2", img: "DSC_0655", delay: 0.2 },
            { col: "col-span-4 col-start-3", row: "row-span-2 row-start-2", img: "DSC_0703", delay: 0.3 },
            { col: "col-span-4 col-start-1", row: "row-span-2 row-start-4", img: "DSC_0532", delay: 0.4 },
            { col: "col-span-2 col-start-5", row: "row-span-3 row-start-4", img: "DSC_0274", delay: 0.5 },
            { col: "col-span-4 col-start-1", row: "row-span-3 row-start-6", img: "DSC_0119", delay: 0.6 },
            { col: "col-span-2 col-start-5", row: "row-span-2 row-start-7", img: "DSC_0022", delay: 0.7 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${item.col} ${item.row}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <img
                className="h-full w-full object-cover"
                src={`/images/image-grid/${item.img}.png`}
                alt={item.img}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
