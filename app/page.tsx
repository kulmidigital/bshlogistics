import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#000913] via-black to-[#000913] overflow-x-hidden'>
      <div className='fixed inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
