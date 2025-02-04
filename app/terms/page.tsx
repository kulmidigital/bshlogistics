"use client";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className='relative py-20 bg-gradient-to-b from-gray-50 to-white'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-full h-full bg-[url(/grid.svg)] opacity-5' />
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='prose prose-lg max-w-none'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-[#003366] mb-4'>
              Terms and Conditions
            </h1>
            <p className='text-gray-600'>Last updated: February 04, 2025</p>
            <div className='h-1 w-40 bg-gradient-to-r from-[#003366] to-[#0099FF] mx-auto mt-6 rounded-full' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white rounded-2xl p-8 shadow-lg'>
            <p className='text-gray-600 mb-8'>
              Please read these terms and conditions carefully before using Our
              Service.
            </p>

            <div className='space-y-8'>
              <section>
                <h2 className='text-2xl font-bold text-[#003366] mb-4'>
                  Interpretation and Definitions
                </h2>
                <h3 className='text-xl font-semibold text-[#003366] mb-3'>
                  Interpretation
                </h3>
                <p className='text-gray-600 mb-6'>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>

                <h3 className='text-xl font-semibold text-[#003366] mb-3'>
                  Definitions
                </h3>
                <p className='text-gray-600 mb-4'>
                  For the purposes of these Terms and Conditions:
                </p>
                <ul className='list-disc pl-6 space-y-4 text-gray-600'>
                  <li>
                    <strong className='text-[#003366]'>Affiliate</strong> means
                    an entity that controls, is controlled by or is under common
                    control with a party, where "control" means ownership of 50%
                    or more of the shares, equity interest or other securities
                    entitled to vote for election of directors or other managing
                    authority.
                  </li>
                  <li>
                    <strong className='text-[#003366]'>Country</strong> refers
                    to: Somalia
                  </li>
                  <li>
                    <strong className='text-[#003366]'>Company</strong>{" "}
                    (referred to as either "the Company", "We", "Us" or "Our" in
                    this Agreement) refers to BSH Logistics, Halane AH/MIA,
                    Mogadishu, Somalia.
                  </li>
                  <li>
                    <strong className='text-[#003366]'>Device</strong> means any
                    device that can access the Service such as a computer, a
                    cellphone or a digital tablet.
                  </li>
                  <li>
                    <strong className='text-[#003366]'>Service</strong> refers
                    to the Website.
                  </li>
                  <li>
                    <strong className='text-[#003366]'>Website</strong> refers
                    to BSH Logistics, accessible from{" "}
                    <a
                      href='https://www.bshlogistics.com'
                      rel='external nofollow noopener'
                      target='_blank'
                      className='text-[#0099FF] hover:text-[#003366] transition-colors'>
                      https://www.bshlogistics.com
                    </a>
                  </li>
                  <li>
                    <strong className='text-[#003366]'>You</strong> means the
                    individual accessing or using the Service, or the company,
                    or other legal entity on behalf of which such individual is
                    accessing or using the Service, as applicable.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className='text-2xl font-bold text-[#003366] mb-4'>
                  Acknowledgment
                </h2>
                <div className='space-y-4 text-gray-600'>
                  <p>
                    These are the Terms and Conditions governing the use of this
                    Service and the agreement that operates between You and the
                    Company. These Terms and Conditions set out the rights and
                    obligations of all users regarding the use of the Service.
                  </p>
                  <p>
                    Your access to and use of the Service is conditioned on Your
                    acceptance of and compliance with these Terms and
                    Conditions. These Terms and Conditions apply to all
                    visitors, users and others who access or use the Service.
                  </p>
                  <p>
                    By accessing or using the Service You agree to be bound by
                    these Terms and Conditions. If You disagree with any part of
                    these Terms and Conditions then You may not access the
                    Service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className='text-2xl font-bold text-[#003366] mb-4'>
                  Contact Us
                </h2>
                <p className='text-gray-600 mb-4'>
                  If you have any questions about these Terms and Conditions,
                  You can contact us:
                </p>
                <ul className='list-disc pl-6 text-gray-600'>
                  <li>
                    By email:{" "}
                    <a
                      href='mailto:info@bshlogistics.com'
                      className='text-[#0099FF] hover:text-[#003366] transition-colors'>
                      info@bshlogistics.com
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
