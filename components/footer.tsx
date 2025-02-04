"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { name: "Air Freight", href: "#services" },
  { name: "Sea Freight", href: "#services" },
  { name: "Customs Clearance", href: "#services" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
  { name: "Track Shipment", href: "#track" },
];

const contactInfo = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5 mt-0.5 flex-shrink-0'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        />
      </svg>
    ),
    content: "Halane AH/MIA, Mogadishu, Somalia",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5 flex-shrink-0'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
    content: "info@bshlogistics.com",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5 flex-shrink-0'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        />
      </svg>
    ),
    content: "+252614118333",
  },
];

export const Footer = () => {
  return (
    <footer className='relative bg-[#003366] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12'>
          {/* Logo and Tagline Section */}
          <div className='space-y-4 text-center sm:text-left'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='relative w-48 h-16 mx-auto sm:mx-0'>
              <Image
                src='/bsh_logo.png'
                alt='BSH Logistics'
                fill
                className='object-contain brightness-0 invert'
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-gray-300 text-sm sm:text-base italic'>
              Globally connected, locally invested
            </motion.p>
          </div>

          {/* Services Section */}
          <div className='text-center sm:text-left'>
            <h3 className='text-lg font-semibold mb-4'>Our Services</h3>
            <ul className='space-y-2 text-sm sm:text-base text-gray-300'>
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className='hover:text-[#0099FF] transition-colors'>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className='text-center sm:text-left'>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2 text-sm sm:text-base text-gray-300'>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='hover:text-[#0099FF] transition-colors'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='text-center sm:text-left sm:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-4 sm:space-y-2 text-sm sm:text-base text-gray-300'>
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className='flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3'>
                  <div className='flex-shrink-0'>{info.icon}</div>
                  <div className='sm:min-w-[300px]'>{info.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center sm:text-left'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-400 order-2 sm:order-1'>
              © {new Date().getFullYear()} BSH Logistics. All rights reserved.
            </p>
            <div className='flex gap-4 sm:gap-6 order-1 sm:order-2'>
              <a
                href='/privacy'
                className='text-sm text-gray-400 hover:text-[#0099FF] transition-colors'>
                Privacy Policy
              </a>
              <a
                href='/terms'
                className='text-sm text-gray-400 hover:text-[#0099FF] transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
