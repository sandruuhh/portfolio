import React, { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-rose-50 text-gray-800">
      
     

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-violet-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
  
      {/* HERO SECTION (Larger text, more impact) */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-2 lg:max-w-3xl text-center lg:text-left">
          <p className="text-base tracking-widest text-violet-600 font-bold uppercase mb-3">
            Aspiring Software Engineer & UI/UX enthusiast
          </p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none text-gray-900">
            Hi, I’m <span className="bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text">Sandra S S</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
            I craft clean, semantic, and highly performant user interfaces. Bridging the gap between robust engineering and intuitive user experiences with cutting-edge web technologies.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href="#contact" className="px-10 py-4 text-lg rounded-full bg-violet-600 text-white font-semibold shadow-xl shadow-violet-200 hover:bg-violet-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 inline-block text-center">
              Let's Connect
            </a>
            <a href="#projects" className="px-10 py-4 text-lg rounded-full border-2 border-violet-200 text-violet-700 font-semibold hover:bg-violet-50/50 transition-all transform hover:-translate-y-0.5 inline-block text-center">
              Explore My Work
            </a>
          </div>
        </div>

        {/* Profile Image Wrap */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-rose-400 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <img
              src="data:image/jpeg;base64,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"
              alt="Sandra S S Profile"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>

    

      {/* ADDITIONAL CONTENT: SKILLS & CORE COMPETENCIES */}
      <div id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Block: Academic & Professional Focus */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Driven by Innovation, Grounded in Fundamentals
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              As an ambitious student developer, I focus heavily on writing optimized, declarative web elements. I spent my academic journey transforming textbook algorithms into interactive, accessible applications. I am continuously learning structural frameworks, modern APIs, and clean state patterns.
            </p>
          </div>

          {/* Right Block: Core Tech Stack Array */}
          <div className="bg-white/60 p-8 rounded-3xl border border-violet-100 shadow-sm">
            <h4 className="text-lg font-bold uppercase tracking-wider text-gray-700 mb-6">
              Primary Technical Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Git & GitHub", "Responsive Architecture", "Component State Systems", "REST APIs"].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-50 to-rose-50 text-violet-800 border border-violet-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;