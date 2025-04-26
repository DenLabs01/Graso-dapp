import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden px-4 py-8 md:py-12 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, rgb(157, 214, 210) 0%, #f8fafc 50%, #c09aff 70%, #f8fafc 90%, #f8fafc 100%)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8 lg:mb-12 text-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne max-w-3xl mb-3 md:mb-4">
            Making Real Estate More Accessible to All
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-dm-sans px-4">
            Bringing a better and faster means for developers to raise funds,
            while giving individual investors fractional ownership of real world
            assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 md:gap-6 mt-6 md:mt-8">
            <Link
              href="#invest"
              className="px-6 sm:px-8 md:px-10 py-3 border border-black bg-white text-black font-medium rounded-lg font-dm-sans text-lg"
            >
              <strong>Invest</strong>
            </Link>
            <Link
              href="#develop"
              className="px-6 sm:px-8 md:px-10 py-3 bg-[#24C2A5] text-white font-medium rounded-lg font-dm-sans text-lg"
            >
              <strong>Develop</strong>
            </Link>
          </div>
        </div>

        {/* Properties Showcase - All properties visible on all screen sizes */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[700px]">
          {/* Main Property - STREAM */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px] rounded-t-3xl overflow-hidden shadow-lg bg-black">
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden border-25 border-black">
              <Image
                src="/hero-section/stream-hero-img.webp"
                alt="STREAM Property"
                fill
                className="object-cover rounded-3xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 sm:p-3 md:p-4">
                <h3 className="font-bold font-syne text-sm md:text-base">
                  STREAM
                </h3>
                <p className="text-xs md:text-sm font-dm-sans text-[#A0A0A1]">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* HOLA Property - Top Left - Visible on all screens */}
          <div className="absolute left-0 sm:left-[-5%] md:left-[-10%] lg:left-[-240px] top-[5%] sm:top-[0%] md:top-[-5%] lg:top-[-120px] transform -rotate-6 sm:-rotate-8 md:-rotate-10 z-0">
            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-2xl shadow-md">
              <div className="relative w-[100px] sm:w-[150px] md:w-[200px] lg:w-[280px] h-[80px] sm:h-[120px] md:h-[160px] lg:h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/hero-section/hola-hero-img.webp"
                  alt="HOLA Property"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-black p-1 sm:p-2 rounded-3xl">
                <h3 className="text-xs sm:text-sm font-bold font-syne">HOLA</h3>
                <p className="text-[10px] sm:text-xs font-dm-sans text-[#A0A0A1]">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* JOS ESTATE Property - Top Right - Visible on all screens */}
          <div className="absolute right-0 sm:right-[-5%] md:right-[-10%] lg:right-[-240px] top-[5%] sm:top-[0%] md:top-[-5%] lg:top-[-120px] transform rotate-6 sm:rotate-8 md:rotate-10 z-0">
            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-2xl shadow-md">
              <div className="relative w-[100px] sm:w-[150px] md:w-[200px] lg:w-[280px] h-[80px] sm:h-[120px] md:h-[160px] lg:h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/hero-section/jos-estate-hero-img.webp"
                  alt="JOS ESTATE Property"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-black p-1 sm:p-2 rounded-3xl">
                <h3 className="text-xs sm:text-sm font-bold font-syne">
                  JOS ESTATE
                </h3>
                <p className="text-[10px] sm:text-xs font-dm-sans text-[#A0A0A1]">
                  Jos, Plateau
                </p>
              </div>
            </div>
          </div>

          {/* EVERCLEAR Property - Bottom Left - Visible on all screens */}
          <div className="absolute left-0 sm:left-[1%] md:left-[2%] lg:left-[3%] bottom-[5%] sm:bottom-[3%] transform rotate-6 sm:rotate-8 md:rotate-10 z-0">
            <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-md">
              <div className="relative w-[80px] sm:w-[100px] md:w-[130px] lg:w-[180px] h-[80px] sm:h-[100px] md:h-[130px] lg:h-[180px] overflow-hidden rounded-lg">
                <Image
                  src="/hero-section/everclear-hero-img.webp"
                  alt="EVERCLEAR Property"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-black p-1 sm:p-2 rounded-3xl">
                <h3 className="text-xs sm:text-sm font-bold font-syne">
                  EVERCLEAR
                </h3>
                <p className="text-[10px] sm:text-xs font-dm-sans text-[#A0A0A1]">
                  Delta, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* MONEY LAND Property - Bottom Right - Visible on all screens */}
          <div className="absolute right-0 sm:right-[1%] md:right-[2%] lg:right-[3%] bottom-[5%] sm:bottom-[3%] transform -rotate-6 sm:-rotate-8 md:-rotate-10 z-0">
            <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-md">
              <div className="relative w-[80px] sm:w-[100px] md:w-[130px] lg:w-[180px] h-[80px] sm:h-[100px] md:h-[130px] lg:h-[180px] overflow-hidden rounded-lg">
                <Image
                  src="/hero-section/moneyland-hero-img.webp"
                  alt="MONEY LAND Property"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-black p-1 sm:p-2 rounded-3xl">
                <h3 className="text-xs sm:text-sm font-bold font-syne">
                  MONEY LAND
                </h3>
                <p className="text-[10px] sm:text-xs font-dm-sans text-[#A0A0A1]">
                  Calabar, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
