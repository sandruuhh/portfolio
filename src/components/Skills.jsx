import React from "react";

function Skills() {
  return (
    <div id="skills" className="max-w-7xl mx-auto mt-20 bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-10 md:p-16 hover:shadow-2xl transition duration-300 border border-violet-100">
      
      {/* SECTION HEADER - VIOLET TO ROSE GRADIENT THEME */}
      <div className="mb-14 text-center lg:text-left">
        <h4 className="text-4xl md:text-5xl font-black tracking-tight border-b-4 border-violet-200 pb-3 inline-block">
          <span className="bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text">
            Technical Expertise
          </span>
        </h4>
        <p className="mt-5 text-xl text-gray-600 max-w-3xl leading-relaxed font-normal">
          A comprehensive overview of programming languages, frameworks, and core computer science disciplines acquired through rigorous academic study and practical project implementation.
        </p>
      </div>

      {/* GRID LAYOUT - CLEAN & BALANCED */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        
        {/* CATEGORY 1: PROGRAMMING LANGUAGES */}
        <div className="space-y-6">
          <h5 className="text-lg font-extrabold tracking-widest text-gray-700 uppercase border-l-4 border-violet-500 pl-3">
            Programming Languages
          </h5>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-violet-100 text-violet-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-200 transition duration-200 cursor-default">
              C
            </li>
            <li className="bg-rose-100 text-rose-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-rose-200 transition duration-200 cursor-default">
              Python
            </li>
            <li className="bg-violet-50 text-violet-700 border border-violet-200 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-100 transition duration-200 cursor-default">
              C++
            </li>
            <li className="bg-violet-100 text-violet-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-200 transition duration-200 cursor-default">
              Java
            </li>
            <li className="bg-rose-100 text-rose-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-rose-200 transition duration-200 cursor-default">
              JavaScript (ES6+)
            </li>
            <li className="bg-violet-50 text-violet-700 border border-violet-200 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-100 transition duration-200 cursor-default">
              SQL
            </li>
          </ul>
        </div>

        {/* CATEGORY 2: WEB DEVELOPMENT */}
        <div className="space-y-6">
          <h5 className="text-lg font-extrabold tracking-widest text-gray-700 uppercase border-l-4 border-rose-400 pl-3">
            Web Development
          </h5>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-rose-100 text-rose-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-rose-200 transition duration-200 cursor-default">
              React.js
            </li>
            <li className="bg-violet-100 text-violet-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-200 transition duration-200 cursor-default">
              Tailwind CSS
            </li>
            <li className="bg-violet-50 text-violet-700 border border-violet-200 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-100 transition duration-200 cursor-default">
              HTML5 & CSS3
            </li>
            <li className="bg-rose-100 text-rose-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-rose-200 transition duration-200 cursor-default">
              Node.js / Express
            </li>
            <li className="bg-violet-100 text-violet-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-200 transition duration-200 cursor-default">
              RESTful APIs
            </li>
          </ul>
        </div>

        {/* CATEGORY 3: CORE COMPUTER SCIENCE */}
        <div className="space-y-6">
          <h5 className="text-lg font-extrabold tracking-widest text-gray-700 uppercase border-l-4 border-violet-400 pl-3">
            CS Fundamentals & Tools
          </h5>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-violet-50 text-violet-700 border border-violet-200 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-100 transition duration-200 cursor-default">
              Data Structures
            </li>
            <li className="bg-violet-100 text-violet-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-200 transition duration-200 cursor-default">
              Algorithms
            </li>
            <li className="bg-rose-100 text-rose-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-rose-200 transition duration-200 cursor-default">
              Git & GitHub
            </li>
            <li className="bg-violet-50 text-violet-700 border border-violet-200 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-100 transition duration-200 cursor-default">
              Database Management
            </li>
            <li className="bg-violet-100 text-violet-800 text-base md:text-lg px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-violet-200 transition duration-200 cursor-default">
              Object-Oriented Programming
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;