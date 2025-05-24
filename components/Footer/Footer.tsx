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
    <footer className="bg-[url('/footerbg.png')] bg-cover bg-center bg-no-repeat py-16 px-[3%] border-t border-[color:var(--custom-gray-200)] font-inter ">
      <div className="w-full px-4 flex flex-col gap-8 md:gap-12 ">
        {/* Top Half */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
          {/* Project Description */}
          <div className="flex flex-col justify-start w-full max-w-[466.7px] ">
            <h3 className="text-3xl font-extrabold mb-4 text-[var(--custom-neutral-900)]">GRASO</h3>
            <p className="text-[15px] font-normal text-[var(--custom-neutral-900)] leading-snug mb-1 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitaed.
            </p>
          </div>
          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16  w-full max-w-[468.2px] justify-between">
            {/* Community Links */}
            <div>
              <h3 className="text-[16px] font-normal mb-2 text-[var(--footer-text)]">COMMUNITY</h3>
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
              <h3 className="text-[16px] font-normal mb-2 text-[var(--footer-text)]">LEARN</h3>
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
              <h3 className="text-[16px] font-normal mb-2 text-[var(--footer-text)]">ABOUT</h3>
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
            <p className="text-[13px] text-[var(--custom-slate2-400)]">
              Copyright ©2024 GRASO. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 flex-col md:flex-row md:gap-6 md:justify-end w-full md:w-auto text-[var(--custom-neutral-900)] text-[13px] font-normal ">
              <Link href="/" className="  hover:text-[color:var(--custom-green2-400)]">Home</Link>
              <Link href="/about" className="  hover:text-[color:var(--custom-green2-400)]">About Us</Link>
              <Link href="/team" className="  hover:text-[color:var(--custom-green2-400)]">Our Team</Link>
              <Link href="/shop" className=" hover:text-[color:var(--custom-green2-400)]">Shop</Link>
              <Link href="/blog" className="  hover:text-[color:var(--custom-green2-400)]">Blog</Link>
              <Link href="/contact" className="  hover:text-[color:var(--custom-green2-400)]">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
