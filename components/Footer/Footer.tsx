"use client";
import Link from "next/link";

const communityLinks = [
  { label: "Discord", url: "/" },
  { label: "Telegram", url: "/" },
  { label: "WhatsApp", url: "/" },
  { label: "Twitter", url: "/" },
];

const learnLinks = [
  { label: "Whitepaper", url: "/whitepaper" },
  { label: "Medium", url: "/medium" },
  { label: "Blog", url: "/blog" },
  { label: "Articles", url: "/articles" },
  { label: "Tokenomics", url: "/tokenomics" },
];

const aboutLinks = [
  { label: "Contact", url: "/contact" },
  { label: "Careers", url: "/careers" },
  { label: "Trademark policy", url: "/trademark" },
  { label: "Media Kit", url: "/media" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url('/footerbg.png')] bg-cover bg-center py-16 border-t border-[color:var(--custom-gray-200)] font-inter">
      <div className="w-full px-4 flex flex-col gap-12">
        {/* Top Half */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
          {/* Project Description */}
          <div className="flex flex-col justify-start max-w-[466.7px]">
            <h3 className="text-3xl font-bold mb-4 text-[var(--footer-text)]">GRASO</h3>
            <p className="text-[15px] font-normal text-[var(--footer-text)] leading-snug mb-1 w-[402.6px]">
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
              <h3 className="text-[16px] font-semibold mb-2 text-[var(--footer-text)]">COMMUNITY</h3>
              <ul className="space-y-1">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Learn Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-2 text-[var(--footer-text)]">LEARN</h3>
              <ul className="space-y-1">
                {learnLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* About Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-2 text-[var(--footer-text)]">ABOUT</h3>
              <ul className="space-y-1">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Half */}
        <div className="pt-6 border-t border-[color:var(--custom-gray-200)] w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-[13px] text-[var(--footer-text)]">
              Copyright ©2024 GRASO. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 md:justify-end w-full md:w-auto">
              <Link href="/" className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]">Home</Link>
              <Link href="/about" className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]">About Us</Link>
              <Link href="/team" className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]">Our Team</Link>
              <Link href="/shop" className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]">Shop</Link>
              <Link href="/blog" className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]">Blog</Link>
              <Link href="/contact" className="text-[12px] font-normal text-[var(--footer-text)] hover:text-[color:var(--custom-green2-400)]">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
