import Link from "next/link";

interface HeroContentProps {
  currentProperty: string;
}

export default function HeroContent({ currentProperty }: HeroContentProps) {
  return (
    <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <h1 className="font-syne text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl">
          Invest in Real Estate <br />
          <span className="text-[#FFD700]">Without Boundaries</span>
        </h1>

        <p className="mt-6 font-raleway text-lg text-white/90 md:text-xl lg:pr-12">
          Graso is a decentralized platform providing developers and individual
          investors access to the real estate market through tokenization and
          fractional ownership.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/explore"
            className="rounded-full bg-[#FFD700] px-8 py-3 font-dm-sans font-medium text-black transition-transform hover:scale-105"
          >
            Explore Properties
          </Link>
          <Link
            href="/learn"
            className="rounded-full border border-white/30 bg-black/20 px-8 py-3 font-dm-sans font-medium text-white backdrop-blur-sm transition-transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-12 flex items-center">
          <div className="h-[1px] w-12 bg-white/30"></div>
          <p className="ml-4 font-league-spartan text-sm uppercase tracking-wider text-white/70">
            Currently Viewing:{" "}
            <span className="text-[#FFD700]">{currentProperty}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
