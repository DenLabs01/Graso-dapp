"use client"
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url(/footerbg.png')] bg-cover bg-center py-16 border-t border-gray-100">
      <div className="container mx-auto Spx-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">GRASO</h3>
            <p className="text-sm text-gray-600 mb-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitaed.
            </p>
            
          </div>

          {/* Community Links */}
          <div className="col-span-1">
            <h3 className="text-base font-bold mb-4 font-['Aoboshi_One']">COMMUNITY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/discord" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/telegram" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="/whatsapp" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div className="col-span-1">
            <h3 className="text-base font-bold mb-4 font-['Aoboshi_One']">LEARN</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/whitepaper" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/medium" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Medium
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tokenomics" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div className="col-span-1">
            <h3 className="text-base font-bold mb-4 font-['Aoboshi_One']">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/trademark" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Trademark policy
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-xs text-gray-700 hover:text-[#24c1a5]">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap justify-end gap-6">
            <Link href="/" className="text-xs text-gray-700 hover:text-[#24c1a5]">
              Home
            </Link>
            <Link href="/about" className="text-xs text-gray-700 hover:text-[#24c1a5]">
              About Us
            </Link>
            <Link href="/team" className="text-xs text-gray-700 hover:text-[#24c1a5]">
              Our Team
            </Link>
            <Link href="/shop" className="text-xs text-gray-700 hover:text-[#24c1a5]">
              Shop
            </Link>
            <Link href="/blog" className="text-xs text-gray-700 hover:text-[#24c1a5]">
              Blog
            </Link>
            <Link href="/contact" className="text-xs text-gray-700 hover:text-[#24c1a5]">
              Contact Us
            </Link>
          </div>
          <p className="text-xs text-gray-400">
              Copyright ©2024 GRASO. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;