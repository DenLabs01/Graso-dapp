import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Other sections will go here */}
    </main>
  );
}
