"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsPartners() {
  return (
    <div className="mx-auto flex max-w-screen-lg px-8 pb-16 pt-4 sm:px-4 md:px-0 lg:pb-0">
      <div className="m-auto">
        <motion.p 
          className="mb-4 text-center font-pp-mondwest text-3xl gradient-text sm:text-4xl xl:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sponsors & Partners
        </motion.p>
        <motion.p 
          className="text-center text-base text-gray-200 sm:text-xl xl:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A round of applause for our sponsors, who make all of this possible.
        </motion.p>
        <div className="mt-16 flex flex-row justify-center gap-4">
          <a
            href="https://ticpau.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[80px] w-[160px] p-0 sm:h-[100px] sm:w-[200px] xl:h-[125px] xl:w-[250px]"
          >
            <Image
              src="/images/tic_logo.png"
              alt="Tech Innovation Club Logo"
              fill
            />
          </a>
          <a
            href="https://pau.edu.ng/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 h-[56px] w-[160px] p-0 sm:h-[70px] sm:w-[200px] xl:h-[87.5px] xl:w-[250px]"
          >
            <Image
              src="/images/pau_logo.png"
              alt="Pan-Atlantic University Logo"
              fill
            />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 lg:grid-cols-2 lg:gap-10">
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
        </div>
      </div>
    </div>
  );
}
