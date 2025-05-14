"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";

const contactInfo = [
  {
    title: "Kenya Office",
    value: (
      <>
        <p>Jamia plaza | Kigali Street</p>
        <p>P.O. Box 17305 - 00100 Nrb Kenya</p>
        <p>Tel: +254701430430</p>
        <p>Email: info@bshlogistics.co.m</p>
        <p>Warehouse: Former KBS Garage, Yare Care Eastleigh</p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    title: "Kenya Airport Office",
    value: (
      <>
        <p>Jomo Kenyatta Airport</p>
        <p>Cargo terminal, MAFUTA road</p>
        <p>Opposite orakom</p>
        <p>Agrotronic house, 2nd floor</p>
        <p>Email: info@bshlogistics.com</p>
      </>
    ),
    icon: <MapPin className='w-5 h-5' />,
  },
  {
    title: "Somalia Office",
    value: (
      <>
        <p>Halane AH/MIA, Mogadisho - Somalia</p>
        <p>Tel: +252 614118333</p>
        <p>Email: info@bsh.so</p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    title: "China - Guangzhou",
    value: (
      <>
        <p>Bsh logistics ltd.</p>
        <p>GZ warehouse 仓库地址: 荔城仓/利成仓</p>
        <p>
          广州市白云区石井镇石门街道石沙路4号荔城仓大门进来左手边B仓第二个门斜坡卸货，导航：利成仓
        </p>
        <p>收货时间：周一至周六早 9:30 --18:00，周天休息</p>
        <p>仓库联系人：陈先生15112091016</p>
        <p>
          请一定要在唛头写上进仓号JD+BSH+客户名
          电话，带中文装箱单给仓管，否则丢包不赔。
        </p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    title: "China - Yiwu/Shenzhen",
    value: (
      <>
        <p>Bsh logistics ltd.</p>
        <p>
          Yiwu Warehouse:Warehouse No. 432-435, Area B, 3rd Floor, Yiwu Port,
          No.266 Chengxin Avenue,
          Yiwu义乌仓库:义乌市诚信大道266号义乌港三楼B区432-435仓库，导航:义乌港
        </p>
        <p>收货时间：每天8点-17 点，周六周日都正常收货</p>
        <p>联系人：梁先生：15967958712</p>
        <p>
          请一定要在唛头写上进仓号JD+BSH+客户名
          电话，带中文装箱单给仓管，否则丢包不赔。
        </p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    title: "UK Office",
    value: (
      <>
        <p>BSH Logistics</p>
        <p>185 LONDON ROAD</p>
        <p>MITCHAM, CR4 2JB</p>
        <p>Email: info@bshlogistics.com</p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    title: "EU Shipping",
    value: (
      <>
        <p>HOMEBOX - BSH Logistics</p>
        <p>1 rue des Préaux</p>
        <p>95310 Saint Ouen l'Aumône, France</p>
        <p>Email: info@bshlogistics.com</p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    title: "Dubai Office",
    value: (
      <>
        <p>Almamzar Gate No.7A</p>
        <p>Email: info@bshlogistics.com</p>
      </>
    ),
    icon: <Building2 className='w-5 h-5' />,
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

        <div className='flex flex-col gap-16'>
          {/* Global Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h3 className='text-2xl font-semibold text-[#003366] mb-8 text-center'>
              Our Global Offices
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group'>
                  <div className='flex items-start gap-4'>
                    <div className='p-3 bg-gradient-to-br from-[#003366]/10 to-[#0099FF]/10 rounded-lg text-[#003366] shrink-0 group-hover:bg-[#003366]/20 transition-colors'>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className='font-medium text-[#003366] mb-3'>
                        {info.title}
                      </h4>
                      <div className='text-gray-600 space-y-1.5 text-sm'>
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='max-w-2xl mx-auto w-full bg-white rounded-2xl p-8 shadow-lg'>
            <h3 className='text-2xl font-semibold text-[#003366] mb-6'>
              Send Us a Message
            </h3>
            <div className='grid gap-6'>
              <div className='grid sm:grid-cols-2 gap-4'>
                <Input
                  type='text'
                  placeholder='First Name'
                  className='bg-white border-gray-200 focus:border-[#0099FF] focus:ring-[#0099FF]/20'
                />
                <Input
                  type='text'
                  placeholder='Last Name'
                  className='bg-white border-gray-200 focus:border-[#0099FF] focus:ring-[#0099FF]/20'
                />
              </div>
              <Input
                type='email'
                placeholder='Email'
                className='bg-white border-gray-200 focus:border-[#0099FF] focus:ring-[#0099FF]/20'
              />
              <Input
                type='tel'
                placeholder='Phone Number'
                className='bg-white border-gray-200 focus:border-[#0099FF] focus:ring-[#0099FF]/20'
              />
              <Textarea
                placeholder='Your Message'
                className='min-h-[150px] bg-white border-gray-200 focus:border-[#0099FF] focus:ring-[#0099FF]/20'
              />
              <Button className='w-full bg-gradient-to-r from-[#003366] to-[#0099FF] text-white hover:shadow-lg transition-all'>
                Send Message
              </Button>
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
