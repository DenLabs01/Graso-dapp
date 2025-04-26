"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle screen size detection
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 pt-12 pb-12 md:min-h-[90vh] md:pt-0">
      {/* Background Gradient - Updated with deep purple to the right, white to left/bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg,rgb(157, 214, 210) 0%,#f8fafc 50%, #c09aff 70%, #f8fafc 90%, #f8fafc 100%)",
          opacity: 0.6,
        }}
      />

      {/* Hero Content - Centered Text */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 md:pt-28 text-center">
        <h1 className="font-syne text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Making Real Estate More
          <br />
          Accessible to All
        </h1>
        <p className="mx-auto mt-6 md:mt-8 max-w-2xl font-raleway text-sm sm:text-base md:text-lg lg:text-xl text-black">
          Bringing a better and faster means for developers to raise funds,
          <br className="hidden md:block" />
          while giving individual investors fractional ownership of real world
          assets.
        </p>
        <div className="mt-8 md:mt-10 flex justify-center gap-4 md:gap-6">
          <Link
            href="/invest"
            className="rounded-md border border-black bg-white px-8 py-3 md:px-8 md:py-4 font-dm-sans text-sm md:text-base font-medium font-bold text-gray-800 transition-all hover:bg-gray-50"
          >
            <strong>Invest</strong>
          </Link>
          <Link
            href="/develop"
            className="rounded-md bg-[#00C2B5] px-8 py-3 md:px-8 md:py-4 font-dm-sans text-sm md:text-base font-medium text-white transition-all hover:bg-[#00B0A5]"
          >
            <strong>Develop</strong>
          </Link>
        </div>
      </div>

      {/* Property Showcase - Responsive for all screens */}
      <div className="relative mx-auto mt-1 md:mt-1 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full md:max-w-4xl">
        {/* Central Property - STREAM */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-t-2xl border-[15px] border-black shadow-lg sm:h-[280px] sm:w-[320px] bg-black">
          {/* Image Container */}
          <div className="relative h-full w-full">
            <Image
              src="/hero-section/stream-hero-img.webp"
              alt="Stream Property"
              width={320}
              height={580}
              className="object-contain rounded-2xl"
              sizes="(max-width: 640px) 280px, 320px"
              priority
            />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 text-center py-[-20px] px-[-10px]">
              <h1 className="font-dm-sans font-bold text-[15px] leading-[39px] text-white">
                STREAM
              </h1>
              <p className="font-dm-sans font-normal text-[10px] text-white mt-1">
                Lagos. Nigeria
              </p>
            </div>
          </div>
        </div>
        {/* Mobile-only simplified version of other properties */}
        {isMobile ? (
          <>
            {/* Simplified mobile layout with smaller thumbnails */}
            <div className="absolute left-[10%] top-[20%] z-10 h-[60px] w-[60px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/hola-hero-img.webp"
                alt="Hola Property"
                fill
                className="object-cover"
                sizes="60px"
              />
            </div>

            <div className="absolute right-[10%] top-[20%] z-10 h-[60px] w-[60px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/jos-estate-hero-img.webp"
                alt="Jos Estate Property"
                fill
                className="object-cover"
                sizes="60px"
              />
            </div>

            <div className="absolute left-[15%] bottom-[20%] z-10 h-[60px] w-[60px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/everclear-hero-img.webp"
                alt="Everclear Property"
                fill
                className="object-cover"
                sizes="60px"
              />
            </div>

            <div className="absolute right-[15%] bottom-[20%] z-10 h-[60px] w-[60px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/moneyland-hero-img.webp"
                alt="Money Land Property"
                fill
                className="object-cover"
                sizes="60px"
              />
            </div>
          </>
        ) : (
          <>
            {/* HOLA - Left side */}
            <div className="absolute right-[65%] sm:right-[75%] md:right-[85%] lg:right-[118%] top-0 sm:top-[-10%] md:top-[-20%] lg:top-[-40%] z-10 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[300px] lg:w-[300px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/hola-hero-img.svg"
                alt="Hola Property"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 150px, 300px"
              />
            </div>

            {/* JOS ESTATE - Right side */}
            <div className="absolute left-[65%] sm:left-[75%] md:left-[85%] lg:left-[110%] top-0 sm:top-[-10%] md:top-[-20%] lg:top-[-40%] z-10 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[300px] lg:w-[300px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/jos-estate-hero-img.svg"
                alt="Jos Estate Property"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 150px, 300px"
              />
            </div>

            {/* EVERCLEAR - Bottom left */}
            <div className="absolute bottom-0 sm:bottom-[5%] md:bottom-[8%] lg:bottom-[10%] right-[65%] sm:right-[75%] md:right-[85%] lg:right-[110%] z-10 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/everclear-hero-img.svg"
                alt="Everclear Property"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 150px, 250px"
              />
            </div>

            {/* MONEY LAND - Bottom right */}
            <div className="absolute bottom-0 sm:bottom-[5%] md:bottom-[8%] lg:bottom-[10%] left-[65%] sm:left-[75%] md:left-[85%] lg:left-[110%] z-10 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px] overflow-hidden rounded-lg">
              <Image
                src="/hero-section/moneyland-hero-img.svg"
                alt="Money Land Property"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 150px, 250px"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
