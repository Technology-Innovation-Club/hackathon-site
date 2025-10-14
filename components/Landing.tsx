import React from "react";
import Image from "next/image";
import Logos from "./Logos";

const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden p-20">
      <div className="">
        <Logos />
      </div>
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center text-center animate-fade-in-up">
          <div className="max-w-2xl">
            <h1 className="flex flex-col font-pp-mondwest text-4xl text-black sm:text-6xl md:text-7xl">

              <span className="flex items-center justify-center">
                Tech Innovation Club
              </span>
              <div className="relative text-6xl md:text-8xl font-bold">Hackathon 2.0</div>
            </h1>

            <p className="mb-6 text-xl md:text-2xl font-semibold text-black animate-slide-in-right">
              October 24-25, 2025 @ Pan-Atlantic University
            </p>
            <p className="text-md mb-8 text-black lg:text-lg leading-relaxed animate-fade-in-up">
              Join 80 of the best hackers from within Pan-Atlantic University to create real-world solutions. Join us for 24 hours of hacking
              and more than <span className="font-bold">₦1 million in prizes</span>.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://tinyurl.com/tichackathon2"
              className="inline-block animate-fade-in-up"
            >
              <button className="group relative overflow-hidden bg-black px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-neon rounded-lg">
                <span className="relative z-10">Apply Now</span>
              </button>
            </a>
            <div className="mt-6 glass-card p-4 rounded-lg max-w-[350px] mx-auto animate-fade-in-up">
              <p className="text-sm text-black">
                <span className="font-semibold">Applications due:</span> <b>October 15th, 11:59pm WAT</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
