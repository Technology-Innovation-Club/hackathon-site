"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logos from "./Logos";

const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden pt-20">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-xl flex-col place-content-between items-start justify-between px-8 py-20 md:px-20 md:py-40">
        <div className="relative flex flex-col items-start text-left animate-fade-in-up">
          <div className="max-w-md">
            <h1 className="flex flex-col font-pp-mondwest text-4xl text-black sm:text-6xl md:text-7xl">

              <span className="flex items-end">
                Tech Innovation Club
              </span>
              <div className="relative text-6xl md:text-8xl font-bold">Hackathon 2.0</div>
            </h1>

            <p className="mb-6 inline-block bg-gradient-to-r from-[#82F8FF] via-[#DA47FF] to-[#FFD700] bg-clip-text text-xl text-transparent md:text-2xl font-semibold animate-slide-in-right">
              October 24-25, 2025 @ Pan-Atlantic University
            </p>
            <p className="text-md mb-8 text-black lg:text-lg leading-relaxed animate-fade-in-up">
              Over 80 hackers from around the world will come together to
              revolutionize the AI landscape. Join us for 24 hours of hacking
              and more than <span className="font-bold">$100,000 in prizes</span>.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://apply.hackberkeley.org"
              className="inline-block animate-fade-in-up"
            >
              <button className="group relative overflow-hidden bg-gradient-to-r from-electric-blue to-heliotrope px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-neon rounded-lg">
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-heliotrope to-electric-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>
            </a>
            <div className="mt-6 glass-card p-4 rounded-lg max-w-[350px] animate-fade-in-up">
              <p className="text-sm text-black">
                <span className="text-electric-blue font-semibold">Applications due:</span> <b>October 13th, 11:59pm WAT</b>
              </p>
            </div>
            <Logos className="visible mt-12 lg:hidden" />
          </div>
        </div>
      </div>
      <div className="right-[375px] top-[325px] hidden rotate-12 lg:absolute lg:block">
        <Image
          src="/images/rounded-star.svg"
          alt="Star-2"
          className="z-1"
          width={250}
          height={250}
        />
      </div>
      <div className="visible right-[50px] top-[-30px] hidden lg:absolute lg:block">
        <Image
          src="/images/eight-point.svg"
          alt="Star-1"
          className="z-10"
          width={630}
          height={630}
        />
      </div>
      <div className="absolute right-[240px] top-[600px] hidden text-6xl text-black lg:block">
        <Logos />
      </div>
    </div>
  );
};

export default Landing;
