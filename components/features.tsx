import Image from "next/image";

export function Features() {
  return (
    <section className="relative w-full flex items-center justify-center py-16 px-4 md:py-24 bg-white ">
      <div className=" w-full  max-w-[1140px] mx-auto ">
        {/* Decorative star in top right */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          <Image
            src="/icons/sparkle.svg"
            alt="City skyline investment concept"
            width={20}
            height={20}
            className="h-5 w-5 object-cover"
          />
        </div>

        <div className="container mx-auto w-full">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 ">
            {/* Left content */}
            <div className="flex flex-col justify-center gap-8 ">
              <div className="flex flex-col items-start gap-3 lg:gap-5 ">
                <span className="text-base font-extrabold uppercase tracking-wider  text-[var(--custom-green2-400)] font-inter ">
                  Features
                </span>
                <h2 className="text-3xl text-[var(--custom-slate3-950)] font-semibold font-syne tracking-tight md:text-4xl lg:text-5xl">
                  Secure funds for your project with Graso
                </h2>
                <p className="text-[var(--custom-slate3-950)] font-normal text-lg font-dm-sans lg:mt-1 ">
                  Leverage our extensive experience, gain investments and build
                  a community in the process
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-2xl font-bold font-dm-sans text-[var(--custom-green2-400)] md:text-3xl lg:text-4xl">
                    $400k
                  </p>
                  <p className="text-xs font-medium font-inter uppercase tracking-wider text-[var(--custom-slate3-950)]">
                    Average Raise
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-2xl font-bold font-dm-sans text-[var(--custom-green2-400)] md:text-3xl lg:text-4xl">
                    1M+
                  </p>
                  <p className="text-xs font-medium font-inter uppercase tracking-wider text-[var(--custom-slate3-950)]">
                    Project Launch
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-2xl font-bold font-dm-sans text-[var(--custom-green2-400)] md:text-3xl lg:text-4xl">
                    $4.6M
                  </p>
                  <p className="text-xs font-medium font-inter uppercase tracking-wider text-[var(--custom-slate3-950)]">
                    Raised Capital
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-2xl font-bold font-dm-sans text-[var(--custom-green2-400)] md:text-3xl lg:text-4xl">
                    1M+
                  </p>
                  <p className="text-xs font-medium font-inter uppercase tracking-wider text-[var(--custom-slate3-950)]">
                    Unique Investors
                  </p>
                </div>
              </div>
            </div>

            {/* Right content - Image with decorative lines */}
            <div className=" flex items-center justify-center relative">
              <div className="relative h-64 w-64 md:h-80 md:w-80 ">
                {/* Circular image */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg z-10">
                  <Image
                    src="/features-section/features-building-img.webp?height=320&width=320"
                    alt="City skyline investment concept"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Decorative curved lines */}
                <div className="  absolute top-0 left-0 z-0 flex items-center justify-center h-[300px] w-[300px] md:h-[500px] md:w-[600px]  ">
                  <Image
                    src={"/features-section/curly-line.png"}
                    alt="curly image"
                    height={100}
                    width={100}
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
