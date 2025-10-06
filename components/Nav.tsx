"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full glass-card border-b border-white/10">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="flex items-center px-2 py-5 text-xl text-white transition-all duration-300 hover:text-electric-blue"
            >
              <span className="font-pp-mondwest gradient-text">TIC Hackathon 2.0</span>
            </Link>
          </div>
          {/* Standard nav bar for non-mobile */}
          <div className="hidden items-center space-x-6 text-balance text-center md:flex">
            <Link
              href="/about"
              className="px-3 py-5 text-white transition-all duration-300 hover:text-electric-blue relative after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-electric-blue after:to-heliotrope after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://forms.gle/x9AsZLftCKM1CAFE6"
              className="px-3 py-5 text-white transition-all duration-300 hover:text-electric-blue relative after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-electric-blue after:to-heliotrope after:transition-all after:duration-300 hover:after:w-full"
            >
              Volunteer/Judge
            </a>
            <Link
              href="/contact"
              className="px-3 py-5 text-white transition-all duration-300 hover:text-electric-blue relative after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-electric-blue after:to-heliotrope after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
            <a
              href="https://apply.hackberkeley.org/login"
              rel="noopener noreferrer"
              target="_blank"
              className="glass-button px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-neon"
            >
              Apply
            </a>
          </div>

          {/* Collapsible nav menu for mobile screens */}
          <div className="flex flex-col md:hidden">
            <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute right-[33px] top-[50px] z-20 h-[265px] w-[150px] flex flex-col items-center rounded-lg glass-card text-center md:hidden"
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
              <Link
                href="/about"
                className="px-3 py-5 text-white hover:text-electric-blue transition-colors duration-300"
              >
                About
              </Link>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://forms.gle/x9AsZLftCKM1CAFE6"
                className="px-3 py-5 text-white hover:text-electric-blue transition-colors duration-300"
              >
                Volunteer/Judge
              </a>
              <Link
                href="/contact"
                className="px-3 py-5 text-white hover:text-electric-blue transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="https://apply.hackberkeley.org"
                rel="noopener noreferrer"
                target="_blank"
                className="px-3 py-5 text-white hover:text-electric-blue transition-colors duration-300"
              >
                Apply
              </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
