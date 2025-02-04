"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { Navbar } from "@/components/navbar";

// Dynamically import the Contact component with SSR disabled
const Contact = dynamic(
  () => import("@/components/contact").then((mod) => mod.Contact),
  {
    ssr: false,
    loading: () => (
      <div className='min-h-[600px] flex items-center justify-center'>
        <div className='animate-pulse text-[#003366]'>
          Loading contact section...
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#000913] via-black to-[#000913] overflow-x-hidden'>
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
      </div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Suspense
        fallback={
          <div className='min-h-[600px] flex items-center justify-center'>
            <div className='animate-pulse text-[#003366]'>
              Loading contact section...
            </div>
          </div>
        }>
        <Contact />
      </Suspense>
    </main>
  );
}
