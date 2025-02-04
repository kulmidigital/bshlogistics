"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What shipping services does BSH Logistics offer?",
    answer:
      "BSH Logistics provides comprehensive shipping solutions including air freight, sea freight, and customs clearance services. We handle both FCL (Full Container Load) and LCL (Less than Container Load) shipments, offering door-to-door delivery options worldwide.",
    category: "Services",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "We provide real-time tracking for all shipments through our advanced tracking system. Each shipment is assigned a unique tracking number, allowing you to monitor your cargo's journey from origin to destination with detailed status updates.",
    category: "Tracking",
  },
  {
    question: "What are your delivery timeframes?",
    answer:
      "Delivery timeframes vary based on the service type and destination. Air freight typically takes 24-72 hours, while sea freight can take 15-45 days depending on the route. We'll provide you with specific transit times during booking.",
    category: "Delivery",
  },
  {
    question: "How do you handle customs clearance?",
    answer:
      "Our experienced customs brokerage team handles all aspects of customs clearance, including documentation, duty calculation, and compliance checks. We maintain strong relationships with customs authorities to ensure smooth and efficient processing.",
    category: "Customs",
  },
  {
    question: "What types of cargo do you handle?",
    answer:
      "We handle a wide range of cargo types including general cargo, perishables, dangerous goods, oversized equipment, and valuable items. Each type of cargo receives specialized handling and storage according to international standards.",
    category: "Services",
  },
  {
    question: "How do you ensure cargo safety?",
    answer:
      "We implement comprehensive security measures including 24/7 monitoring, secure warehousing, and careful handling procedures. All shipments are fully insured, and we use industry-leading packaging standards to ensure your cargo's safety.",
    category: "Safety",
  },
  {
    question: "What documentation is required for shipping?",
    answer:
      "Required documents typically include commercial invoice, packing list, bill of lading/airway bill, and certificates of origin. Specific requirements may vary by destination and cargo type. Our team will guide you through the documentation process.",
    category: "Documentation",
  },
  {
    question: "Do you offer cargo insurance?",
    answer:
      "Yes, we offer comprehensive cargo insurance options to protect your shipments against loss or damage. Our team can help you select the appropriate coverage based on your cargo value and specific requirements.",
    category: "Insurance",
  },
];

export const FAQ = () => {
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
      className='relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50'
      id='faq'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-full h-full bg-[url(/grid.svg)] opacity-5' />
        <motion.div
          style={{ y, opacity }}
          className='absolute inset-0 bg-gradient-to-b from-[#003366]/5 to-[#0099FF]/5'
        />
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10 sm:mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block'>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#003366] mb-3 sm:mb-4'>
              Frequently Asked Questions
            </h2>
            <div className='h-1 w-full bg-gradient-to-r from-[#003366] to-[#0099FF] rounded-full' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base px-2 sm:px-0'>
            Find answers to common questions about our shipping services and
            processes
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='grid gap-4 sm:gap-6'>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <AccordionItem
                  value={`item-${index}`}
                  className='border-b border-[#003366]/10'>
                  <AccordionTrigger className='text-[#003366] hover:text-[#0099FF] transition-colors text-sm sm:text-base'>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-left'>
                      <span className='text-xs sm:text-sm font-medium bg-[#0099FF]/10 px-2 py-1 rounded w-fit'>
                        {faq.category}
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600 text-sm sm:text-base'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mt-12 sm:mt-16 text-center'>
          <p className='text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base'>
            Still have questions? We're here to help!
          </p>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#003366] to-[#0099FF] text-white rounded-lg text-sm sm:text-base font-medium hover:shadow-lg transition-all hover:scale-105'>
            Contact Support
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-3 h-3 sm:w-4 sm:h-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
