import React from "react";

function Education() {
  return (
    <div id="education" className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-rose-50 text-gray-800 flex items-center antialiased">

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        {/* SECTION HEADER - STRONGER TYPOGRAPHY & ALIGNMENT */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text">
              Education
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-xl md:text-2xl font-normal max-w-2xl mx-auto">
            My academic journey so far
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="bg-white/70 backdrop-blur-md border border-violet-100 shadow-xl rounded-3xl p-8 md:p-16 max-w-5xl mx-auto">

          {/* Timeline Line */}
          <div className="relative border-l-4 border-violet-200 pl-8 md:pl-12 space-y-12">

            {/* CARD ITEM */}
            <div className="relative">
              {/* Custom Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-4 w-6 h-6 bg-violet-600 rounded-full shadow-lg border-4 border-white"></div>

              {/* Enhanced Content Card */}
              <div className="bg-white border border-violet-50 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-violet-100 transition-all duration-300">
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div>
                    {/* Main Degree Title */}
                    <h4 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
                      Diploma in Computer Engineering
                    </h4>
                    {/* College Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 font-medium mt-2">
                      Government Women’s Polytechnic College, Thiruvananthapuram (GWPTC TVM)
                    </p>
                  </div>

                  {/* Batch Year Badge */}
                  <span className="lg:text-right text-base md:text-lg text-violet-700 font-bold bg-violet-50 px-5 py-2 rounded-xl inline-block self-start lg:self-auto shadow-sm">
                    2024 - 2027
                  </span>
                </div>

                <hr className="my-6 border-gray-100" />

                {/* Badges - Larger & Bold */}
                <div className="flex gap-3 flex-wrap">
                  <span className="px-5 py-2 bg-violet-100 text-violet-800 text-sm md:text-base font-bold rounded-full tracking-wide">
                    Computer Engineering
                  </span>
                  <span className="px-5 py-2 bg-rose-100 text-rose-800 text-sm md:text-base font-bold rounded-full tracking-wide animate-pulse">
                    Ongoing
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Education;