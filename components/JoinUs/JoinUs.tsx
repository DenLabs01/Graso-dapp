"use client";

import { Button } from "../button";
import Image from "next/image";

const CtaSection: React.FC = () => {
  const handleGetStarted = () => {
    console.log("Get started clicked");
  };

  return (
    <section className="py-32 bg-[#ffffff] relative overflow-hidden   ">
      <Image
        src="/icons/sparkle.svg"
        alt="Sparkle"
        width={40}
        height={40}
        className="absolute top-[15%] right-[18%] w-6 h-6 md:top-20  md:right-1/4 md:w-10 md:h-10"
        priority
      />

      <Image
        src="/icons/sparkle.svg"
        alt="Sparkle"
        width={40}
        height={40}
        className="absolute bottom-[15%] left-[18%] w-6 h-6 md:bottom-1/4 md:left-1/4 md:w-10 md:h-10"
        priority
      />

      <div className="container mx-auto px-4 text-center  text-[color:var(--custom-gray-900)]">
        <h2 className=" text-5xl  md:text-[82px] font-semibold  mb-6 font-syne text-[color:var(--custom-gray-900)]">Join us now</h2>

        <p className="text-xl mb-8 font-dm-sans font-normal text-[color:var(--custom-gray-900)]">Invest and Develop</p>

        <Button
          variant="outline"
          onClick={handleGetStarted}
          className="text-[color:var(--custom-gray-900)] border-[color:var(--custom-gray-900)] px-8 py-3 text-lg"
        >
          Get started
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
