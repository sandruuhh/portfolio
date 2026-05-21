import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-violet-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text tracking-wider">
          SANDRA S S
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#home" className="hover:text-violet-600 transition duration-200">Home</a>
          <a href="#about" className="hover:text-violet-600 transition duration-200">About</a>
          <a href="#education" className="hover:text-violet-600 transition duration-200">Education</a>
          <a href="#skills" className="hover:text-violet-600 transition duration-200">Skills</a>
          <a href="#contact" className="px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-medium shadow-sm hover:bg-violet-700 transition duration-200">
            Contact
          </a>
        </div>

        {/* MOBILE MENU BUTTON (HAMBURGER) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-violet-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAV LINKS */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-violet-100 px-6 py-4 flex flex-col gap-4 font-medium text-gray-600">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-violet-600 transition">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-violet-600 transition">About</a>
          <a href="#education" onClick={() => setIsOpen(false)} className="hover:text-violet-600 transition">Education</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-violet-600 transition">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;