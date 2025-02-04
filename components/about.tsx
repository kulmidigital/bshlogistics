"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every shipment, maintaining the highest standards of service quality and reliability.",
    icon: "🎯",
  },
  {
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and creative solutions to optimize logistics operations and enhance customer experience.",
    icon: "💡",
  },
  {
    title: "Integrity",
    description:
      "Operating with complete transparency, honesty, and ethical practices in all our business dealings.",
    icon: "🤝",
  },
  {
    title: "Customer Focus",
    description:
      "Putting our customers first, understanding their needs, and delivering personalized logistics solutions.",
    icon: "👥",
  },
  {
    title: "Global Reach",
    description:
      "Leveraging our worldwide network to connect businesses across borders with seamless efficiency.",
    icon: "🌏",
  },
  {
    title: "Sustainability",
    description:
      "Committed to environmentally responsible practices and reducing our carbon footprint in global logistics.",
    icon: "🌱",
  },
];

export const About = () => {
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
      className='relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white'
      id='about'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-full h-full bg-[url(/grid.svg)] opacity-5' />
        <motion.div
          style={{ y, opacity }}
          className='absolute inset-0 bg-gradient-to-b from-[#003366]/5 to-[#0099FF]/5'
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* About Us Section */}
        <div className='text-center mb-12 sm:mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block'>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#003366] mb-4'>
              About BSH Logistics
            </h2>
            <div className='h-1 w-full bg-gradient-to-r from-[#003366] to-[#0099FF] rounded-full' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto mt-6 text-base sm:text-lg px-4 sm:px-0'>
            BSH Logistics is a leading global logistics provider, delivering
            innovative shipping solutions that connect businesses worldwide.
            With our extensive network and decades of expertise, we ensure your
            cargo reaches its destination efficiently and securely.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-2xl'>🎯</span>
              <h3 className='text-xl sm:text-2xl font-semibold text-[#003366]'>
                Our Mission
              </h3>
            </div>
            <p className='text-gray-600 text-sm sm:text-base'>
              To provide exceptional logistics services that empower businesses
              to thrive in the global marketplace, delivering reliable,
              efficient, and innovative shipping solutions while maintaining the
              highest standards of customer service and operational excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-2xl'>🔭</span>
              <h3 className='text-xl sm:text-2xl font-semibold text-[#003366]'>
                Our Vision
              </h3>
            </div>
            <p className='text-gray-600 text-sm sm:text-base'>
              To be the most trusted and innovative logistics partner globally,
              setting new standards in shipping efficiency, sustainability, and
              customer satisfaction while facilitating seamless international
              trade connections.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-8 sm:mb-12'>
          <h3 className='text-2xl sm:text-3xl font-bold text-[#003366] mb-4 sm:mb-6'>
            Our Values
          </h3>
          <p className='text-gray-600 max-w-2xl mx-auto text-sm sm:text-base'>
            The principles that guide us in delivering excellence every day
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]'>
              <div className='flex items-center gap-3 mb-3 sm:mb-4'>
                <span className='text-xl sm:text-2xl'>{value.icon}</span>
                <h4 className='text-lg sm:text-xl font-semibold text-[#003366]'>
                  {value.title}
                </h4>
              </div>
              <p className='text-gray-600 text-sm sm:text-base'>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8'>
          {[
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Countries Served" },
            { number: "10K+", label: "Successful Deliveries" },
            { number: "98%", label: "Customer Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-center p-2 sm:p-4'>
              <div className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#003366] to-[#0099FF] bg-clip-text text-transparent'>
                {stat.number}
              </div>
              <div className='text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
