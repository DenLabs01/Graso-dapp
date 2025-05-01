import Hero from '@/components/hero-component/Hero';
import Navbar from "@/components/navbar";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );

}


