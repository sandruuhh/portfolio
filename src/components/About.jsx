import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-rose-50 text-gray-800 flex items-center overflow-hidden selection:bg-violet-200">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">

        {/* Section Title - Fade In Animation */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
          <p className="text-xs md:text-sm tracking-[0.2em] text-violet-600 font-bold uppercase mb-2">
            Get to know me
          </p>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-md mx-auto">
            A quick introduction about who I am and what drives my passion
          </p>
        </div>

        {/* Main Card - Smooth scale up on load */}
        <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-2xl rounded-3xl p-8 md:p-14 transition-all duration-500 hover:shadow-violet-600/5 animate-[scaleUp_0.7s_ease-out]">

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-[38px] text-center font-medium">
              I am a motivated and hardworking individual with a strong interest in
              learning modern web technologies and improving my development skills.
              I am passionate about building clean, responsive, and user-friendly
              web applications using React and Tailwind CSS. I enjoy problem-solving,
              working in teams, and continuously upgrading my knowledge to stay
              aligned with industry standards.
            </p>
          </div>

          {/* Feature Cards - Grid Layout with Smooth Hover Animations */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-white/80 border border-violet-100/50 hover:border-violet-300 shadow-sm hover:shadow-xl hover:shadow-violet-600/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <h4 className="text-slate-800 font-bold text-xl group-hover:text-violet-600 transition-colors">
                Frontend Development
              </h4>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                React, Tailwind CSS, Responsive UI, and modern Web Design principles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-white/80 border border-violet-100/50 hover:border-violet-300 shadow-sm hover:shadow-xl hover:shadow-violet-600/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <h4 className="text-slate-800 font-bold text-xl group-hover:text-rose-500 transition-colors">
                Continuous Learning
              </h4>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                JavaScript, REST APIs, Version Control (Git), and upcoming tools.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-white/80 border border-violet-100/50 hover:border-violet-300 shadow-sm hover:shadow-xl hover:shadow-violet-600/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h4 className="text-slate-800 font-bold text-xl group-hover:text-indigo-600 transition-colors">
                Career Goal
              </h4>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Evolve into a highly skilled, professional Full Stack Developer.
              </p>
            </div>

          </div>

          {/* Highlight Badge Row with Pop Animation */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs md:text-sm font-semibold hover:bg-violet-100 transition-colors cursor-default">
               React Developer
            </span>
            <span className="px-5 py-2.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs md:text-sm font-semibold hover:bg-rose-100 transition-colors cursor-default">
               UI/UX Enthusiast
            </span>
            <span className="px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs md:text-sm font-semibold hover:bg-indigo-100 transition-colors cursor-default">
               Problem Solver
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;