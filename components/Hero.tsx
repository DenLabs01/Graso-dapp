import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen px-4 md:px-8 lg:px-16"
      style={{
        background: `
          linear-gradient(to right top, 
            white 0%, 
            rgb(255, 255, 255) 30%, 
            rgba(248, 233, 233, 0) 70%),
          linear-gradient(to right, 
            rgb(157, 214, 210) 0%, 
            rgb(157, 214, 210) 40%, 
            rgb(230, 212, 241) 60%, 
            #c09aff 100%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto pt-12 md:pt-20 pb-8 md:pb-16">
        {/* Hero Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold mb-4 md:mb-6">
            Making Real Estate More Accessible to All
          </h1>
          <p className="text-base md:text-lg text-black mb-6 md:mb-8 max-w-3xl mx-auto">
            Bringing a better and faster means for developers to raise funds,
            while giving individual investors fractional ownership of real world assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link 
              href="#"
              className="px-8 md:px-12 py-3 bg-white text-black rounded-lg font-medium border-1 border-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              <strong>Invest</strong>
            </Link>
            <Link 
              href="#"
              className="px-8 md:px-12 py-3 bg-[#24C2A5] text-white rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <strong>Develop</strong>
            </Link>
          </div>
        </div>

        {/* Property Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Surrounding Properties */}
          <div className="relative w-full">
            {/* Mobile Layout Properties */}
            <div className="block md:hidden">
              {/* Top Row */}
              <div className="flex justify-between mb-4">
                {/* Hola - Top Left */}
                <div className="w-[120px] h-[160px] rounded-2xl overflow-hidden border-4 border-white bg-white">
                  <Image
                    src="/hero-section/hola-hero-img.webp"
                    alt="Hola Property"
                    width={120}
                    height={120}
                    className="object-cover h-[110px]"
                  />
                  <div className="bg-white text-black p-2">
                    <h3 className="font-bold uppercase text-xs">HOLA</h3>
                    <p className="text-[10px] opacity-90 text-[#A0A0A1]">Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Jos Estate - Top Right */}
                <div className="w-[120px] h-[160px] rounded-2xl overflow-hidden border-4 border-white bg-white">
                  <Image
                    src="/hero-section/jos-estate-hero-img.webp"
                    alt="Jos Estate"
                    width={120}
                    height={120}
                    className="object-cover h-[110px]"
                  />
                  <div className="bg-white text-black p-2">
                    <h3 className="font-bold uppercase text-xs">JOS ESTATE</h3>
                    <p className="text-[10px] opacity-90 text-[#A0A0A1]">Port Harcourt</p>
                  </div>
                </div>
              </div>

              {/* Center Stream Property */}
              <div className="relative w-[280px] h-[300px] mx-auto rounded-t-3xl overflow-hidden z-20 border-[12px] border-black bg-black mb-4">
                <Image
                  src="/hero-section/stream-hero-img.webp"
                  alt="Stream Property"
                  width={280}
                  height={280}
                  className="object-cover rounded-3xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-3">
                  <h3 className="text-base font-bold uppercase">STREAM</h3>
                  <p className="text-xs opacity-90">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between">
                {/* Everclear - Bottom Left */}
                <div className="w-[120px] h-[160px] rounded-2xl overflow-hidden border-4 border-white bg-white">
                  <Image
                    src="/hero-section/everclear-hero-img.webp"
                    alt="Everclear Property"
                    width={120}
                    height={120}
                    className="object-cover h-[110px]"
                  />
                  <div className="bg-white text-black p-2">
                    <h3 className="font-bold uppercase text-xs">EVERCLEAR</h3>
                    <p className="text-[10px] opacity-90 text-[#A0A0A1]">Delta, Nigeria</p>
                  </div>
                </div>

                {/* Money Land - Bottom Right */}
                <div className="w-[120px] h-[160px] rounded-2xl overflow-hidden border-4 border-white bg-white">
                  <Image
                    src="/hero-section/moneyland-hero-img.webp"
                    alt="Money Land"
                    width={120}
                    height={120}
                    className="object-cover h-[110px]"
                  />
                  <div className="bg-white text-black p-2">
                    <h3 className="font-bold uppercase text-xs">MONEY LAND</h3>
                    <p className="text-[10px] opacity-90 text-[#A0A0A1]">Calabar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout Properties */}
            <div className="hidden md:block">
              {/* Hola Property - Top Left */}
              <div className="hidden sm:block absolute -top-16 sm:-top-20 md:-top-32 -left-16 sm:-left-20 md:-left-32 w-[150px] sm:w-[180px] md:w-[200px] h-[200px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden transform -rotate-12 z-10 border-8 sm:border-10 md:border-15 border-white bg-white">
                <Image
                  src="/hero-section/hola-hero-img.webp"
                  alt="Hola Property"
                  width={200}
                  height={200}
                  className="object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-3 md:p-4">
                  <h3 className="font-bold uppercase text-sm md:text-base">HOLA</h3>
                  <p className="text-xs md:text-sm opacity-90 text-[#A0A0A1]">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Jos Estate - Top Right */}
              <div className="hidden sm:block absolute -top-16 sm:-top-20 md:-top-32 -right-16 sm:-right-20 md:-right-32 w-[150px] sm:w-[180px] md:w-[200px] h-[200px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden transform rotate-12 z-10 border-8 sm:border-10 md:border-15 border-white bg-white">
                <Image
                  src="/hero-section/jos-estate-hero-img.webp"
                  alt="Jos Estate"
                  width={200}
                  height={200}
                  className="object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-3 md:p-4">
                  <h3 className="font-bold uppercase text-sm md:text-base">JOS ESTATE</h3>
                  <p className="text-xs md:text-sm opacity-90 text-[#A0A0A1]">Port Harcourt, Nigeria</p>
                </div>
              </div>

              {/* Center Stream Property */}
              <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mx-auto rounded-t-3xl overflow-hidden z-20 border-[12px] sm:border-[15px] md:border-[20px] lg:border-25 border-black bg-black">
                <Image
                  src="/hero-section/stream-hero-img.webp"
                  alt="Stream Property"
                  width={500}
                  height={400}
                  className="object-cover rounded-3xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-3 sm:p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase">STREAM</h3>
                  <p className="text-xs sm:text-sm opacity-90">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Everclear - Bottom Left */}
              <div className="hidden sm:block absolute -bottom-8 sm:-bottom-12 md:bottom-0 -left-12 sm:-left-16 md:-left-24 w-[150px] sm:w-[180px] md:w-[200px] h-[200px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden transform rotate-12 z-10 border-8 sm:border-10 md:border-15 border-white bg-white">
                <Image
                  src="/hero-section/everclear-hero-img.webp"
                  alt="Everclear Property"
                  width={200}
                  height={200}
                  className="object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-3 md:p-4">
                  <h3 className="font-bold uppercase text-sm md:text-base">EVERCLEAR</h3>
                  <p className="text-xs md:text-sm opacity-90 text-[#A0A0A1]">Delta, Nigeria</p>
                </div>
              </div>

              {/* Money Land - Bottom Right */}
              <div className="hidden sm:block absolute -bottom-8 sm:-bottom-12 md:bottom-0 -right-12 sm:-right-16 md:-right-24 w-[150px] sm:w-[180px] md:w-[200px] h-[200px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden transform -rotate-12 z-10 border-8 sm:border-10 md:border-15 border-white bg-white">
                <Image
                  src="/hero-section/moneyland-hero-img.webp"
                  alt="Money Land Property"
                  width={200}
                  height={200}
                  className="object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-3 md:p-4">
                  <h3 className="font-bold uppercase text-sm md:text-base">MONEY LAND</h3>
                  <p className="text-xs md:text-sm opacity-90 text-[#A0A0A1]">Calabar, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}