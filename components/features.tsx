import Image from 'next/image'

export function Features (){
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 px-4 md:py-24">
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

      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium uppercase tracking-wider font-inter text-[#24C2A5]">Features</span>
              <h2 className="text-3xl text-[#040119] font-bold font-syne tracking-tight md:text-4xl lg:text-5xl">
                Secure funds for your project with Graso
              </h2>
              <p className="text-[#040119] font-dm-sans">
                Leverage our extensive experience, gain investments and build a community in the process
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-2xl font-bold font-dm-sans text-[#24C2A5] md:text-3xl lg:text-4xl">$400k</p>
                <p className="text-xs font-medium font-inter uppercase tracking-wider text-[#040119]">Average Raise</p>
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-bold font-dm-sans text-[#24C2A5] md:text-3xl lg:text-4xl">1M+</p>
                <p className="text-xs font-medium font-inter uppercase tracking-wider text-[#040119]">Project Launch</p>
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-bold font-dm-sans text-[#24C2A5] md:text-3xl lg:text-4xl">$4.6M</p>
                <p className="text-xs font-medium font-inter uppercase tracking-wider text-[#040119]">Raised Capital</p>
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-bold font-dm-sans text-[#24C2A5] md:text-3xl lg:text-4xl">1M+</p>
                <p className="text-xs font-medium font-inter uppercase tracking-wider text-[#040119]">Unique Investors</p>
              </div>
            </div>
          </div>

          {/* Right content - Image with decorative lines */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              {/* Circular image */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/features-section/features-building-img.webp?height=320&width=320"
                  alt="City skyline investment concept"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative curved lines */}
              <svg
                className="absolute -right-16 top-1/4 h-32 w-32 text-gray-200"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,50 Q50,0 100,50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>

              <svg
                className="absolute -right-24 top-2/3 h-40 w-40 text-gray-200"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,30 Q50,80 100,30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}