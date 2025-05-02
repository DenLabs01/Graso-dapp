import Hero from "@/components/hero-component/Hero";
import Navbar from "@/components/navbar";
import { Features } from "@/components/features";
import AboutPlatform from "@/components/about/about";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutPlatform />
      <Features />
    </main>
  );
}
