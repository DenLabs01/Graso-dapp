"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full bg-white py-4">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-syne text-lg font-bold uppercase text-[#00C2B5]"
        >
          Graso
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {["Home", "Explore", "Portfolio", "Whitepaper", "About us"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="font-dm-sans text-sm font-medium text-gray-800 transition-colors hover:text-[#00C2B5]"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/connect"
            className="rounded-md bg-[#00C2B5] px-8 py-3 font-dm-sans text-sm font-medium text-white transition-all hover:bg-[#00B0A5]"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          <nav className="flex h-full flex-col p-6">
            <ul className="flex flex-col gap-6">
              {["Home", "Explore", "Portfolio", "Whitepaper", "About us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                      className="block font-dm-sans text-lg font-medium text-gray-800 transition-colors hover:text-[#00C2B5]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-auto pb-10">
              <Link
                href="/connect"
                className="block w-full rounded-md bg-[#00C2B5] py-2 text-center font-dm-sans font-medium text-white transition-all hover:bg-[#00B0A5]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
