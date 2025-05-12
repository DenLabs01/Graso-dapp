import React from "react";
import "./footer-gradient.css";
import "./footer-headings.css";
import "./footer-listitems.css";
import "./footer-desc.css";

export default function Footer() {
  return (
    <footer className="footer-gradient w-full px-4 pt-14 pb-6 flex flex-col items-center font-montserrat">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 mb-10">
        {/* GRASO and description */}
        <div className="col-span-1 flex flex-col gap-4 md:mr-20" style={{ minWidth: '220px' }}>
          <h4 className="font-extrabold text-2xl mb-1 tracking-widest" style={{ color: '#040119' }}>GRASO</h4>
          <p className="footer-desc-3lines text-sm leading-relaxed" style={{ color: '#040119' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitaed.
</p>
        </div>
        {/* COMMUNITY, LEARN, ABOUT group */}
        <div className="md:col-span-3 md:ml-auto flex flex-row gap-12">
          <div>
            <h4 className="footer-head mb-4">COMMUNITY</h4>
            <ul className="footer-list space-y-2 text-black">
              <li><a href="#" className="hover:text-white">Discord</a></li>
              <li><a href="#" className="hover:text-white">Telegram</a></li>
              <li><a href="#" className="hover:text-white">WhatsApp</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-head mb-4">LEARN</h4>
            <ul className="footer-list space-y-2 text-black">
              <li><a href="#" className="hover:text-white">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white">Medium</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Articles</a></li>
              <li><a href="#" className="hover:text-white">Tokenomics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-head mb-4">ABOUT</h4>
            <ul className="footer-list space-y-2 text-black">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Trademark policy</a></li>
              <li><a href="#" className="hover:text-white">Media Kit</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom copyright and nav */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800 pt-6 mt-4">
        <div className="text-gray-300 text-xs md:text-sm text-center md:text-left font-inter">
          Copyright 2024 GRASO. All rights reserved.
        </div>
        <nav className="flex flex-wrap gap-3 justify-center text-xs font-inter mt-1">
          <a href="#" className="hover:text-white font-bold font-inter" style={{ color: '#040119' }}>Home</a>
          <a href="#" className="hover:text-white font-bold font-inter" style={{ color: '#040119' }}>About Us</a>
          <a href="#" className="hover:text-white font-bold font-inter" style={{ color: '#040119' }}>Our Team</a>
          <a href="#" className="hover:text-white font-bold font-inter" style={{ color: '#040119' }}>Shop</a>
          <a href="#" className="hover:text-white font-bold font-inter" style={{ color: '#040119' }}>Blog</a>
          <a href="#" className="hover:text-white font-bold font-inter" style={{ color: '#040119' }}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}
