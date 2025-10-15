"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-card md:glass-card bg-white md:bg-transparent border-b text-black border-white/10">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="flex items-center px-2 py-5 text-xl transition-all duration-300 hover:text-blue-400"
            >
              <span className="font-pp-mondwest">TIC Hackathon 2.0</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 text-balance text-center md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-5 text-black transition-all duration-300 hover:text-blue-400 relative after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-heliotrope after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tinyurl.com/tichackathon2"
              rel="noopener noreferrer"
              target="_blank"
              className="glass-button px-4 py-2 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-blue-400"
            >
              Apply
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col md:hidden">
            <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
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
                  className="absolute right-[33px] top-[50px] z-20 flex flex-col items-center rounded-lg glass-card bg-white backdrop-blur-md text-center md:hidden p-4"
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-3 text-black hover:text-blue-400 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="https://tinyurl.com/tichackathon2"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="px-3 py-3 text-black hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply
                  </a>
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