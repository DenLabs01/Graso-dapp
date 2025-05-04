import Image from "next/image";
import Link from "next/link";

const AboutPlatform = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-white font-dm-sans">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row space-y-12 lg:space-y-0 items-center justify-between gap-12 relative">
        {/* Left Side - Image Cards */}
        <div className="relative w-full md:w-1/2 min-h-[70vh] top-20 flex items-center justify-center">
          {/* Back Card */}
          <div className="absolute top-36 left-28 z-10 w-84 h-104 p-8 bg-black rounded-3xl shadow-lg overflow-hidden rotate-[-10deg]">
            <Image
              src="/about-the-platform-section/about-stream-img.webp"
              alt="Stream Property"
              width={356}
              height={388}
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="pt-3">
              <h3 className="text-xl text-white font-bold">STREAM</h3>
              <p className="text-sm text-[#A0A0A1]">Delta, Nigeria</p>
            </div>
          </div>

          {/* Front Card */}
          <div className="absolute top-10 right-20 z-20 w-84 h-104 bg-white rounded-3xl shadow-lg overflow-hidden rotate-[10deg] p-8">
            <Image
              src="/about-the-platform-section/about-hola-img.webp"
              alt="Hola Property"
              width={356}
              height={388}
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="pt-3 ">
              <h3 className="text-xl text-[#111111] font-bold">HOLA</h3>
              <p className="text-sm text-[#A0A0A1]">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Sparkle Icon */}
          <div className="absolute top-2 right-2 z-30">
            <Image
              src="/icons/sparkle.svg"
              alt="Sparkle"
              width={30}
              height={30}
              className="h-8 w-8 "
            />
          </div>
          <div className="absolute -top-36 z-0 flex items-center justify-center h-[300px] w-[300px] md:h-[500px] md:w-[600px]">
            <Image
              src={"/about-the-platform-section/image.png"}
              alt="curly image"
              height={100}
              width={100}
              className="w-full h-full "
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 h-[60vh]">
          <div className="w-[80%] space-y-8 leading-6 mt-20">
            <div className="inline-block text-[#24C2A5] font-bold mb-4">
              ABOUT THE PLATFORM
            </div>
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#040119] mb-6">
              Graso is the Leading Decentralized Platform Empowering Real Estate
            </h2>
            <p className="text-black text-lg">
              Empowering real estate projects to access funds from investors
              using our decentralized protocol network. Unlocking freedom to
              build a safe, trustless ownership model across the globe in a
              secure and compliant marketplace.
            </p>
            <Link
              href="/learn-more"
              className="mt-8 font-raleway inline-flex items-center  py-1 border-b-3 font-bold border-[#1A1A1A57]"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
