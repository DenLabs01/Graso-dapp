import Image from "next/image";
import Link from "next/link";

const AboutPlatform = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-background font-dm-sans">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row space-y-12 lg:space-y-0 items-center justify-between gap-12 relative">
        {/* Left Side - Image Cards */}
        <div className="relative w-full md:w-1/2 min-h-[70vh] top-20 flex items-center justify-center">
          {/* Back Card */}
          <div className="absolute top-36 left-28 z-10 w-[217.73px] h-[260.75px] lg:w-84 lg:h-104 p-8 bg-foreground rounded-3xl shadow-lg overflow-hidden rotate-[-10deg]">
            <Image
              src="/about-the-platform-section/about-stream-img.webp"
              alt="Stream Property"
              width={356}
              height={388}
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="pt-3">
              <h3 className="text-xl text-background font-bold">STREAM</h3>
              <p className="text-sm  text-[var(--custom-gray2-400)] font-normal">Delta, Nigeria</p>
            </div>
          </div>

          {/* Front Card */}
          <div className="absolute top-10 right-20 z-20 w-[217.73px] h-[260.75px] lg:w-84 lg:h-104 bg-background rounded-3xl shadow-lg overflow-hidden rotate-[10deg] p-8">
            <Image
              src="/about-the-platform-section/about-hola-img.webp"
              alt="Hola Property"
              width={356}
              height={388}
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="pt-3 ">
              <h3 className="text-xl text-[var(--custom-neutral-950)] font-bold">HOLA</h3>
              <p className="text-sm text-[var(--custom-zinc-400)]">Lagos, Nigeria</p>
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
            <div className="inline-block text-[var(--custom-green2-400)] font-extrabold text-base mb-4">
              ABOUT THE PLATFORM
            </div>
            <h2 className="font-syne text-3xl text-[43px] font-semibold text-[var(--custom-slate3-950)] mb-6">
              Graso is the Leading Decentralized Platform Empowering Real Estate
            </h2>
            <p className="text-foreground font-medium text-lg">
              Empowering real estate projects to access funds from investors
              using our decentralized protocol network. Unlocking freedom to
              build a safe, trustless ownership model across the globe in a
              secure and compliant marketplace.
            </p>
            <Link
              href="/learn-more"
              className="mt-8 text-lg font-raleway inline-flex items-center py-1 border-b-3 font-bold border-[var(--custom-gray-800)] hover:scale-105"
            >
              Learn more <svg height="15px" width="15px" className="fill:#010002 ml-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.096 227.096" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon className="fill:#010002 ml-1" points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon> </g> </g> </g></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
