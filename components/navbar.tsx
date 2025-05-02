"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WalletConnectButton } from "./wallet-connect-button";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    href: "/explore",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Whitepaper",
    href: "/whitepaper",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full font-montserrat text-black">
      <div className="lg:max-w-11/12 2xl:max-w-10/12 mx-auto px-4 sm:px-6 py-2 md:py-5 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 text-2xl font-bold">
            <Image
              src="/icons/graso.svg"
              alt="Logo"
              width={300}
              height={150}
              className="w-20 h-10"
            />
          </Link>

          <div className="hidden md:flex gap-12 font-medium text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <WalletConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center cursor-pointer">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 focus:outline-none"
            >
              <div
                className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform transition duration-300 ease-in-out"
                style={{
                  translate: isOpen ? "-50% -50%" : "-50% -8px",
                  rotate: isOpen ? "45deg" : "0deg",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform transition duration-300 ease-in-out"
                style={{
                  translate: "-50% -50%",
                  opacity: isOpen ? "0" : "1",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform transition duration-300 ease-in-out"
                style={{
                  translate: isOpen ? "-50% -50%" : "-50% 7px",
                  rotate: isOpen ? "-45deg" : "0deg",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center bg-white space-y-4 py-4 hover:text-primary font-medium text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <WalletConnectButton />

          {/* <Button>Connect</Button> */}
        </div>
      </div>
    </nav>
  );
}
