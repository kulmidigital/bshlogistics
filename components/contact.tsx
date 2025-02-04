"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

const contactInfo = [
  {
    title: "Email",
    value: "info@bshlogistics.com",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
  },
  {
    title: "Phone",
    value: "+252614118333",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        />
      </svg>
    ),
  },
  {
    title: "Address",
    value: "Halane AH/MIA, Mogadishu, Somalia",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5'>
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
  },
];

// Wrap the Contact component with dynamic import
const ContactComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className='relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white'
      id='contact'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-full h-full bg-[url(/grid.svg)] opacity-5' />
        <motion.div
          style={{ y, opacity }}
          className='absolute inset-0 bg-gradient-to-b from-[#003366]/5 to-[#0099FF]/5'
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block'>
            <h2 className='text-4xl font-bold text-[#003366] mb-4'>
              Contact Us
            </h2>
            <div className='h-1 w-full bg-gradient-to-r from-[#003366] to-[#0099FF] rounded-full' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-2xl mx-auto mt-6'>
            Get in touch with us for any inquiries about our services
          </motion.p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='space-y-8'>
            <div className='grid gap-6'>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Input
                    type='text'
                    placeholder='First Name'
                    className='bg-white'
                  />
                </div>
                <div className='space-y-2'>
                  <Input
                    type='text'
                    placeholder='Last Name'
                    className='bg-white'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <Input type='email' placeholder='Email' className='bg-white' />
              </div>
              <div className='space-y-2'>
                <Input
                  type='tel'
                  placeholder='Phone Number'
                  className='bg-white'
                />
              </div>
              <div className='space-y-2'>
                <Textarea
                  placeholder='Your Message'
                  className='min-h-[150px] bg-white'
                />
              </div>
            </div>
            <Button className='w-full bg-gradient-to-r from-[#003366] to-[#0099FF] text-white hover:shadow-lg transition-all'>
              Send Message
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='lg:pl-12'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-semibold text-[#003366] mb-6'>
                Get in Touch
              </h3>
              <div className='space-y-6'>
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='flex items-start gap-4'>
                    <div className='p-3 bg-[#0099FF]/10 rounded-lg text-[#003366]'>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className='font-medium text-[#003366]'>
                        {info.title}
                      </h4>
                      <p className='text-gray-600'>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className='mt-8 pt-8 border-t border-gray-100'>
                <h4 className='font-medium text-[#003366] mb-4'>
                  Business Hours
                </h4>
                <div className='space-y-2 text-gray-600'>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Export the component with dynamic import and SSR disabled
export const Contact = dynamic(() => Promise.resolve(ContactComponent), {
  ssr: false,
});
