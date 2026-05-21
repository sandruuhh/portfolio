import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-violet-100 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-600 text-center md:text-left">
        
        {/* Left Side: Copyright Name */}
        <div className="text-sm font-semibold tracking-wider text-slate-800 order-3 md:order-1">
          © {new Date().getFullYear()} SANDRA S S.
          <span className="block md:inline md:ml-1 text-gray-400 font-normal">All rights reserved.</span>
        </div>

        {/* Center: Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium order-1 md:order-2">
          <a href="#home" className="hover:text-violet-600 transition duration-200">Home</a>
          <a href="#about" className="hover:text-violet-600 transition duration-200">About</a>
          <a href="#education" className="hover:text-violet-600 transition duration-200">Education</a>
          <a href="#skills" className="hover:text-violet-600 transition duration-200">Skills</a>
          <a href="#contact" className="hover:text-violet-600 transition duration-200">Contact</a>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-6 md:gap-2 text-xs md:text-sm text-center md:text-right order-2 md:order-3">
          <p>
            <span className="font-semibold text-violet-600">Email:</span>{" "}
            <a href="mailto:sandra@gmail.com" className="hover:text-violet-600 transition">
              sandra@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-violet-600">Phone:</span> 9544156042
          </p>
          <p>
            <span className="font-semibold text-violet-600">Location:</span> Trivandrum, Kerala
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;