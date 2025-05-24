import Hero from "@/components/hero-component/Hero";
import Navbar from "@/components/navbar";
import { Features } from "@/components/features";
import AboutPlatform from "@/components/about/about";
import JoinUs from "@/components/JoinUs/JoinUs";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <AboutPlatform />
      <Features />
      <JoinUs />
      <Footer />
    </main>
  );
}
