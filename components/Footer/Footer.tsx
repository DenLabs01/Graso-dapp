"use client";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url('/footerbg.png')] bg-cover bg-center py-16 border-t border-gray-100 font-inter">
      <div className="w-full px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr_1fr_1fr] gap-x-32 gap-y-12 items-start">
          {/* ...rest of your content... */} {/* Company Info */}
          <div className="col-span-1 flex flex-col justify-start">
            <h3 className="text-3xl font-extrabold mb-4 text-black">GRASO</h3>
            <div className="max-w-[350px]">
              <p className="text-[1rem] text-black leading-snug mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitaed.
              </p>
            </div>
          </div>
          {/* Community Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-2 text-black">COMMUNITY</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/discord"
                  className="text-base text-black hover:underline"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="/telegram"
                  className="text-base text-black hover:underline"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="/whatsapp"
                  className="text-base text-black hover:underline"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter"
                  className="text-base text-black hover:underline"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          {/* Learn Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-2 text-black">LEARN</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/whitepaper"
                  className="text-base text-black hover:underline"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/medium"
                  className="text-base text-black hover:underline"
                >
                  Medium
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-black hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-base text-black hover:underline"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/tokenomics"
                  className="text-base text-black hover:underline"
                >
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>
          {/* About Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-2 text-black">ABOUT</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/contact"
                  className="text-base text-black hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-base text-black hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/trademark"
                  className="text-base text-black hover:underline"
                >
                  Trademark policy
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-base text-black hover:underline"
                >
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-6 border-t border-gray-200 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm text-gray-400">
              Copyright ©2024 GRASO. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 md:justify-end w-full md:w-auto">
              <Link
                href="/"
                className="text-base text-gray-500 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-base text-gray-500 hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/team"
                className="text-base text-gray-500 hover:underline"
              >
                Our Team
              </Link>
              <Link
                href="/shop"
                className="text-base text-gray-500 hover:underline"
              >
                Shop
              </Link>
              <Link
                href="/blog"
                className="text-base text-gray-500 hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-base text-gray-500 hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
