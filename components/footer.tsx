"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

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
    icon: <MapPin className='w-5 h-5 mt-0.5 flex-shrink-0' />,
    content: "Halane AH/MIA, Mogadishu, Somalia",
  },
  {
    icon: <Mail className='w-5 h-5 flex-shrink-0' />,
    content: "info@bshlogistics.com",
  },
  {
    icon: <Phone className='w-5 h-5 flex-shrink-0' />,
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
              transition={{ duration: 0.5 }}>
              <Link href='/' className='block'>
                <Image
                  src='/bsh_logo.png'
                  alt='BSH Logistics'
                  width={200}
                  height={80}
                  className='object-contain brightness-0 invert mx-auto sm:mx-0'
                  priority
                />
              </Link>
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
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 order-2 sm:order-1'>
              <p className='text-sm text-gray-400'>
                © {new Date().getFullYear()} BSH Logistics. All rights reserved.
              </p>
              <p className='text-sm text-gray-400'>
                Designed By{" "}
                <a
                  href='https://www.kulmi.digital/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#0099FF] hover:text-[#0099FF]/80 transition-colors'>
                  Kulmi Digital
                </a>
              </p>
            </div>
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
