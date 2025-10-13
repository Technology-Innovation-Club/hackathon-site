"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsPartners() {
  return (
    <div className="mx-auto flex max-w-screen-lg px-8 pb-16 pt-4 m-5 sm:px-4 md:px-0 lg:pb-0">
      <div className="m-auto">
        <motion.p 
          className="mb-4 text-center font-pp-mondwest text-3xl sm:text-4xl xl:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sponsors
        </motion.p>
        <motion.p 
          className="text-center text-base text-black sm:text-xl xl:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Big thanks to the sponsors who make this hackathon possible!
        </motion.p>
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 lg:grid-cols-2 lg:gap-10">
           <a
            href="https://www.zenithbank.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0 object-contain"
          >
            <Image
              src="/images/sponsors/zenith.png"
              alt="Zenith Bank Logo"
              className="object-contain"
              fill
            />
          </a>
          <a
            href="https://www.servicenow.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/servicenow_uni_meetup.png"
              alt="Servicenow University Meetup Nigeria Logo"
              fill
            />
          </a>
        </div>
      </div>
    </div>
  );
}
