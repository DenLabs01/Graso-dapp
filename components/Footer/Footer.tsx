"use client";
import Link from "next/link";

const communityLinks = [
  { label: "Discord", url: "/" },
  { label: "Telegram", url: "/" },
  { label: "WhatsApp", url: "/" },
  { label: "Twitter", url: "/" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url('/footerbg.png')] bg-cover bg-center py-16 border-t border-[color:var(--custom-gray-200)] font-inter">
      <div className="w-full px-4 flex flex-col gap-12">
        {/* Top Half */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
          {/* Project Description */}
          <div className="flex flex-col justify-start max-w-[466.7px]">
            <h3 className="text-3xl font-bold mb-4 text-[color:var(--custom-gray-900)]">GRASO</h3>
            <p className="text-[15px] font-normal text-[#1a1a1a] leading-snug mb-1 w-[402.6px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitaed.
            </p>
          </div>
          {/* Links Section */}
          <div className="flex flex-row gap-16 w-full md:w-auto justify-between">
            {/* Community Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-2 text-black">COMMUNITY</h3>
              <ul className="space-y-1">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Learn Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-2 text-black">LEARN</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/whitepaper"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link
                    href="/medium"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Medium
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tokenomics"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Tokenomics
                  </Link>
                </li>
              </ul>
            </div>
            {/* About Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-2 text-black">ABOUT</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/contact"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trademark"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Trademark policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="text-base text-[color:var(--custom-gray-700)] hover:text-[color:var(--custom-green2-400)]"
                  >
                    Media Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Half */}
        <div className="pt-6 border-t border-[color:var(--custom-gray-200)] w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-[13px] text-[color:var(--custom-gray-400)]">
              Copyright ©2024 GRASO. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 md:justify-end w-full md:w-auto">
              <Link href="/" className="text-base text-[color:var(--custom-gray-500)] hover:text-[color:var(--custom-green2-400)]">Home</Link>
              <Link href="/about" className="text-base text-[color:var(--custom-gray-500)] hover:text-[color:var(--custom-green2-400)]">About Us</Link>
              <Link href="/team" className="text-base text-[color:var(--custom-gray-500)] hover:text-[color:var(--custom-green2-400)]">Our Team</Link>
              <Link href="/shop" className="text-base text-[color:var(--custom-gray-500)] hover:text-[color:var(--custom-green2-400)]">Shop</Link>
              <Link href="/blog" className="text-base text-[color:var(--custom-gray-500)] hover:text-[color:var(--custom-green2-400)]">Blog</Link>
              <Link href="/contact" className="text-base text-[color:var(--custom-gray-500)] hover:text-[color:var(--custom-green2-400)]">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
