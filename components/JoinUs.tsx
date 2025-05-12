import React from "react";

export default function JoinUs() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-white join-us-section relative overflow-visible">

      <div className="flex items-center justify-center mb-6">
  <h2 className="font-syne text-center align-middle mx-auto" style={{ fontWeight: 600, fontSize: '82px', lineHeight: '98.4px', letterSpacing: 0, color: '#111111' }}>Join us now</h2>
  <img src="/icons/image.png" alt="Decoration" className="hidden md:inline-block ml-20 w-[42px] h-[42px] -translate-y-4" />
</div>
      <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 font-dm-sans font-weight-400 font-size-21px -ml-16">Invest and Develop</p>
      <div className="relative flex flex-col items-center justify-center mt-2 -ml-16">
  <img src="/icons/image.png" alt="Decoration" className="hidden md:inline-block absolute -left-80 -top-4 w-[42px] h-[42px]" />
  <button className="border border-black text-black px-12 py-4 rounded-xl text-xl font-bold transition hover:bg-black hover:text-white focus:outline-none font-syne mx-auto">Get started</button>
</div>
    </section>
  );
}
