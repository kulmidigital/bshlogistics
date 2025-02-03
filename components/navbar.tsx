"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "About us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
  { name: "Air Cargo", href: "#air-cargo" },
  { name: "Sea Cargo", href: "#sea-cargo" },
  { name: "Online Shopping", href: "#shopping" },
  { name: "Custom Clearance", href: "#clearance" },
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg py-4" : "bg-transparent py-6"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='text-white font-bold text-2xl'>
            <Link href='/' className='flex items-center gap-2'>
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                🚢
              </motion.div>
              <span className='bg-gradient-to-r from-blue-200 via-blue-300 to-purple-300 bg-clip-text text-transparent'>
                BSH Cargo
              </span>
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <div className='hidden lg:flex items-center gap-1'>
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                onHoverStart={() => setActiveItem(item.name)}
                onHoverEnd={() => setActiveItem(null)}
                className='relative'>
                <Link
                  href={item.href}
                  className='px-4 py-2 text-sm text-white/90 hover:text-white transition-colors relative rounded-full'>
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div
                      layoutId='navbar-hover'
                      className='absolute inset-0 bg-white/10 rounded-full -z-10'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className='lg:hidden p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Animated Background Line */}
      <motion.div
        className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent'
        animate={{
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.nav>
  );
};
