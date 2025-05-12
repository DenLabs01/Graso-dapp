import Hero from '@/components/hero-component/Hero';
import Navbar from "@/components/navbar";
import { Features } from "@/components/features";

import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <JoinUs />
      <Footer />
    </main>
  );
}


