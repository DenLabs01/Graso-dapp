'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Explore",
    href: "/explore"
  },
  {
    label: "Portfolio",
    href: "/portfolio"
  },
  {
    label: "Whitepaper",
    href: "/whitepaper"
  },
  {
    label: "About Us",
    href: "/about-us"
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:py-5 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 text-2xl font-bold">
            <Image src="/GRASO.svg" alt="Logo" width={300} height={150} className="w-20 h-10" />
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-10 hover:text-[#24C2A5]">
            {
              navLinks.map((link) => <Link key={link.href} href={link.href} className="text-black hover:text-primary">{link.label}</Link>)
            }
          </div>

          <div className="hidden md:block">
            <Button className="font-dm-sans font-semibold">Connect</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center cursor-pointer">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 focus:outline-none"
            >
              <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform transition duration-300 ease-in-out"
                style={{
                  translate: isOpen ? '-50% -50%' : '-50% -8px',
                  rotate: isOpen ? "45deg" : "0deg",
                }}
              />
              <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform transition duration-300 ease-in-out"
                style={{
                  translate: '-50% -50%',
                  opacity: isOpen ? "0" : "1",
                }}
              />
              <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform transition duration-300 ease-in-out"
                style={{
                  translate: isOpen ? '-50% -50%' : '-50% 7px',
                  rotate: isOpen ? "-45deg" : "0deg",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
        <div className="flex flex-col items-center bg-white space-y-4 py-4 hover:text-primary">
          {
            navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)
          }
          <Button className="font-dm-sans font-semibold">Connect</Button>
        </div>
      </div>
    </nav>
  );
}

