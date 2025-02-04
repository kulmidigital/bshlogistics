"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Add this interface before the services array
interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  stats: {
    [key: string]: string;
  };
  gradient: string;
  accent: string;
}

const services: Service[] = [
  {
    title: "Air Freight",
    description:
      "Swift global logistics with real-time tracking and premium handling. Our extensive network ensures your cargo reaches its destination through optimized routes, offering the perfect balance of speed and cost-efficiency.",
    image: "/hero2.webp",
    icon: "✈️",
    features: [
      "Door-to-door express delivery",
      "Real-time cargo tracking",
      "Worldwide network coverage",
      "Premium handling & packaging",
    ],
    stats: {
      speed: "24-72h",
      coverage: "200+ routes",
      tracking: "Real-time",
    },
    gradient: "from-[#003366]/5 to-[#0099FF]/5",
    accent: "bg-[#003366]",
  },
  {
    title: "Sea Freight",
    description:
      "Cost-effective solutions for bulk shipping with flexible FCL and LCL options. Weekly departures from major global ports, backed by robust tracking and expert handling for secure worldwide delivery.",
    image: "/hero3.webp",
    icon: "🚢",
    features: [
      "FCL & LCL shipping options",
      "Weekly global departures",
      "Competitive bulk rates",
      "Comprehensive port network",
    ],
    stats: {
      capacity: "20-40ft",
      routes: "Global ports",
      frequency: "Weekly",
    },
    gradient: "from-[#003366]/5 to-[#0099FF]/5",
    accent: "bg-[#003366]",
  },
  {
    title: "Customs Clearance",
    description:
      "Expert customs brokerage with privileged agency relationships. Our specialized team handles complex documentation and procedures, ensuring swift clearance through our extensive bonded warehouse network.",
    image: "/hero5.webp",
    icon: "🛃",
    features: [
      "Expert documentation handling",
      "Pre-arrival clearance",
      "Duty & tax assessment",
      "Bonded warehouse access",
    ],
    stats: {
      experience: "15+ years",
      network: "Nationwide",
      clearance: "24/7",
    },
    gradient: "from-[#003366]/5 to-[#0099FF]/5",
    accent: "bg-[#003366]",
  },
];

export const Services = () => {
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
      className='relative py-10 overflow-hidden bg-gradient-to-b from-white to-gray-50'
      id='services'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
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
              Our Services
            </h2>
            <div className='h-1 w-full bg-gradient-to-r from-[#003366] to-[#0099FF] rounded-full' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-2xl mx-auto mt-4'>
            Comprehensive logistics solutions tailored to your global shipping
            needs
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500'>
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover transform group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <div className='flex items-center gap-2'>
                    <motion.span
                      className='text-2xl'
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
                      {service.icon}
                    </motion.span>
                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 relative'>
                <p className='text-gray-600 mb-6'>{service.description}</p>

                <div className='space-y-6'>
                  <div className='grid grid-cols-3 gap-4'>
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className='text-center group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300'>
                        <div className='text-[#0099FF] font-semibold'>
                          {value}
                        </div>
                        <div className='text-xs text-gray-500 capitalize'>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <ul className='space-y-2'>
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className='flex items-center text-sm text-gray-600'>
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${service.accent} mr-2`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] to-[#0099FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
