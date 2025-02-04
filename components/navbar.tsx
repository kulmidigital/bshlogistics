"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Our Services", href: "#services" },
  { name: "About us", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Air Cargo", href: "#services" },
  { name: "Sea Cargo", href: "#services" },
  { name: "Custom Clearance", href: "#services" },
  { name: "Contact", href: "#contact" },
];

// Animation variants for the mobile menu
const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      opacity: {
        duration: 0.2,
      },
      height: {
        duration: 0.3,
      },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      opacity: {
        duration: 0.3,
      },
      height: {
        duration: 0.3,
      },
    },
  },
};

// Animation variants for menu items
const menuItemVariants = {
  closed: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.2,
    },
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-1.5"
            : "bg-white/90 backdrop-blur-sm py-2"
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-14'>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='relative flex items-center'>
              <Link href='/' className='flex items-center'>
                <Image
                  src='/bsh_logo.png'
                  alt='BSH Logistics'
                  width={180}
                  height={45}
                  className='object-contain'
                  priority
                />
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className='hidden lg:flex items-center gap-5'>
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  onHoverStart={() => setActiveItem(item.name)}
                  onHoverEnd={() => setActiveItem(null)}
                  className='relative'>
                  <Link
                    href={item.href}
                    className='px-2 py-1.5 text-[14px] text-[#003366] hover:text-[#0099FF] transition-colors relative rounded-md font-medium'>
                    {item.name}
                    {activeItem === item.name && (
                      <motion.div
                        layoutId='navbar-hover'
                        className='absolute inset-0 bg-[#0099FF]/5 rounded-md -z-10'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Get Quote Button */}
              <motion.a
                href='#services'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-4 py-1.5 bg-gradient-to-r from-[#003366] to-[#0099FF] text-white rounded-md text-[14px] font-medium hover:shadow-lg transition-all'>
                Get Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-1.5 text-[#003366] hover:text-[#0099FF] rounded-md hover:bg-[#0099FF]/5 transition-colors'>
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.3 }}
                className='relative w-6 h-6'>
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
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Animated Background Line */}
        <motion.div
          className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0099FF]/10 to-transparent'
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

      {/* Mobile Menu Dropdown with Enhanced Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
            className='fixed top-[3.5rem] left-0 right-0 bg-white shadow-lg z-40 lg:hidden overflow-hidden'>
            <motion.div
              className='p-4 space-y-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block px-4 py-2 text-[#003366] hover:text-[#0099FF] hover:bg-[#0099FF]/5 rounded-md transition-colors'
                  variants={menuItemVariants}
                  custom={i}
                  whileHover={{ x: 8 }}>
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href='#services'
                onClick={() => setIsMobileMenuOpen(false)}
                className='block px-4 py-2 bg-gradient-to-r from-[#003366] to-[#0099FF] text-white rounded-md text-center font-medium hover:shadow-lg transition-all'
                variants={menuItemVariants}
                custom={menuItems.length}
                whileHover={{ scale: 1.02 }}>
                Get Quote
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
