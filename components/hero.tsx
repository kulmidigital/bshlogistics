"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const PARTICLE_COLORS = [
  "rgba(147, 197, 253, 0.5)", // blue-300
  "rgba(196, 181, 253, 0.5)", // purple-300
  "rgba(251, 207, 232, 0.5)", // pink-300
  "rgba(167, 243, 208, 0.5)", // emerald-300
];

const PARTICLE_COUNT = 30;
const CONNECTION_RADIUS = 150; // Maximum distance for particles to connect

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const images = ["hero", "hero1", "hero2", "hero3", "hero4", "hero5"];

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2, // Velocity X
      vy: (Math.random() - 0.5) * 0.2, // Velocity Y
      color:
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Bounce off edges
          if (newX < 0 || newX > 100) particle.vx *= -1;
          if (newY < 0 || newY > 100) particle.vy *= -1;

          // Keep within bounds
          newX = Math.max(0, Math.min(100, newX));
          newY = Math.max(0, Math.min(100, newY));

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Image rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  // Calculate particle connections
  const getParticleConnections = useCallback(() => {
    const connections: Array<{
      from: Particle;
      to: Particle;
      distance: number;
    }> = [];

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx =
          ((particles[i].x - particles[j].x) * window.innerWidth) / 100;
        const dy =
          ((particles[i].y - particles[j].y) * window.innerHeight) / 100;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_RADIUS) {
          connections.push({
            from: particles[i],
            to: particles[j],
            distance,
          });
        }
      }
    }

    return connections;
  }, [particles]);

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Hero Background Images Carousel */}
      <div className='absolute inset-0'>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            className='absolute inset-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
            }}>
            <Image
              src={`/${images[currentImage]}.webp`}
              alt='Global Shipping Network'
              fill
              className='object-cover object-center brightness-50'
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        className='absolute left-4 top-1/2 z-50 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white/90 hover:text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110'
        onClick={() =>
          setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
        }>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      <button
        className='absolute right-4 top-1/2 z-50 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white/90 hover:text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110'
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>

      {/* Gradient overlays */}
      <div className='absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60' />
      <motion.div
        className='absolute inset-0 z-20 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-pink-500/10 mix-blend-overlay'
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Main Content */}
      <div
        className={`relative z-30 h-screen flex flex-col ${outfit.className}`}>
        {/* Hero Content */}
        <div className='flex-1 flex items-center'>
          <div className='max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 px-4 pt-20'>
            {/* Left Content */}
            <div className='col-span-7 space-y-8'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='space-y-6'>
                <h1 className='text-6xl font-bold text-white space-y-3'>
                  <span className='block'>Transform Your</span>
                  <span className='block bg-gradient-to-r from-blue-200 via-blue-300 to-purple-300 bg-clip-text text-transparent'>
                    Global Logistics
                  </span>
                </h1>
                <p className='text-xl text-white/80 max-w-xl'>
                  Experience seamless shipping solutions with BSH Cargo. We
                  connect businesses worldwide with reliable, efficient, and
                  innovative logistics services.
                </p>
              </motion.div>

              {/* Cost Calculator Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='flex items-center'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='relative group'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity' />
                  <div className='relative px-8 py-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 rounded-xl flex items-center gap-4'>
                    <div className='p-2 bg-white/20 rounded-lg'>
                      <span className='text-xl'>🚢</span>
                    </div>
                    <div>
                      <h3 className='font-medium text-white'>Calculate Cost</h3>
                      <p className='text-sm text-white/80'>Get instant quote</p>
                    </div>
                  </div>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='flex items-center gap-8 pt-8 border-t border-white/10'>
                <div className='space-y-1'>
                  <div className='text-3xl font-bold text-white'>15K+</div>
                  <div className='text-sm text-white/60'>Active Clients</div>
                </div>
                <div className='space-y-1'>
                  <div className='text-3xl font-bold text-white'>98%</div>
                  <div className='text-sm text-white/60'>Success Rate</div>
                </div>
                <div className='space-y-1'>
                  <div className='text-3xl font-bold text-white'>150+</div>
                  <div className='text-sm text-white/60'>Countries</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Shipping Types */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className='col-span-5 flex flex-col justify-center gap-4'>
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-blue-500/20 rounded-xl'>✈️</div>
                  <div>
                    <h3 className='text-lg font-medium text-white'>
                      Air Freight
                    </h3>
                    <p className='text-sm text-white/60'>
                      Express worldwide delivery
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-purple-500/20 rounded-xl'>🚢</div>
                  <div>
                    <h3 className='text-lg font-medium text-white'>
                      Sea Freight
                    </h3>
                    <p className='text-sm text-white/60'>
                      Cost-effective shipping
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-pink-500/20 rounded-xl'>🛃</div>
                  <div>
                    <h3 className='text-lg font-medium text-white'>
                      Customs Clearance
                    </h3>
                    <p className='text-sm text-white/60'>
                      Hassle-free processing
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Carousel Indicators */}
        <div className='pb-8'>
          <div className='flex justify-center gap-3'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`group relative h-1.5 transition-all duration-500 ${
                  currentImage === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/70"
                } rounded-full overflow-hidden`}>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400'
                  initial={false}
                  animate={{
                    x: currentImage === index ? "0%" : "-100%",
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Particle Network */}
      <div className='absolute inset-0 z-40 overflow-hidden'>
        <svg className='absolute inset-0 w-full h-full'>
          {/* Draw connections */}
          {getParticleConnections().map((connection, i) => (
            <line
              key={`connection-${i}`}
              x1={`${connection.from.x}%`}
              y1={`${connection.from.y}%`}
              x2={`${connection.to.x}%`}
              y2={`${connection.to.y}%`}
              stroke={connection.from.color}
              strokeOpacity={
                (1 - connection.distance / CONNECTION_RADIUS) * 0.5
              }
              strokeWidth={1}
            />
          ))}
          {/* Draw particles */}
          {particles.map((particle, i) => (
            <g key={`particle-${i}`}>
              <circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r='2'
                fill={particle.color}>
                <animate
                  attributeName='r'
                  values='2;3;2'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle>
              <circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r='4'
                fill={particle.color}
                fillOpacity='0.2'>
                <animate
                  attributeName='r'
                  values='4;6;4'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};
