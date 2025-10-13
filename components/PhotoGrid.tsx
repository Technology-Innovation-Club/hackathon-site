"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoGrid() {
  return (
    <div className="relative z-10 flex min-h-screen min-w-full flex-col items-center overflow-hidden px-8 pb-12 pt-24">
      <motion.h1 
        className="-mb-5 font-pp-mondwest text-4xl text-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Join 80+ hackers in building
      </motion.h1>
      <motion.h1 
        className="mb-10 mt-6 font-pp-mondwest text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        the next wave of AI innovations.
      </motion.h1>
      <div className="relative aspect-square w-full max-w-4xl">
        {/* Grid for desktop and larger devices */}
        <div className="z-10 hidden h-full grid-cols-11 grid-rows-11 gap-3 md:grid">
          {[
            { col: "col-span-3 col-start-1", row: "row-span-2 row-start-1", img: "DSC_0569.png", delay: 0 },
            { col: "col-span-3 col-start-4", row: "row-span-2 row-start-1", img: "DSC_0493.jpg", delay: 0.1 },
            { col: "col-span-3 col-start-7", row: "row-span-3 row-start-1", img: "DSC_0444.png", delay: 0.2 },
            { col: "col-span-2 col-start-10", row: "row-span-3 row-start-1", img: "DSC_0235.png", delay: 0.3 },
            { col: "col-span-2 col-start-1", row: "row-span-3 row-start-3", img: "DSC_0655.png", delay: 0.4 },
            { col: "col-span-4 col-start-3", row: "row-span-3 row-start-3", img: "DSC_0703.jpg", delay: 0.5 },
            { col: "col-span-5 col-start-7", row: "row-span-4 row-start-4", img: "DSC_0683.jpg", delay: 0.6 },
            { col: "col-span-4 col-start-1", row: "row-span-3 row-start-6", img: "DSC_0532.jpg", delay: 0.7 },
            { col: "col-span-2 col-start-5", row: "row-span-4 row-start-6", img: "DSC_0274.png", delay: 0.8 },
            { col: "col-span-2 col-start-7", row: "row-span-4 row-start-8", img: "DSC_0342.jpg", delay: 0.9 },
            { col: "col-span-3 col-start-9", row: "row-span-4 row-start-8", img: "DSC_0419.png", delay: 1.0 },
            { col: "col-span-4 col-start-1", row: "row-span-3 row-start-9", img: "DSC_0119.jpg", delay: 1.1 },
            { col: "col-span-2 col-start-5", row: "row-span-2 row-start-10", img: "DSC_0022.jpg", delay: 1.2 },
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
              <Image
                className="h-full w-full object-cover"
                src={`/images/image-grid/${item.img}`}
                alt={item.img}
                width={200}
                height={200}
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
              <Image
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
