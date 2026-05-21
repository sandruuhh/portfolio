import React from "react";

function Education() {
  return (
    <div id="education" className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-rose-50 text-gray-800 flex items-center">

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text">
              Education
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            My academic journey so far
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-md border border-white shadow-xl rounded-3xl p-10 md:p-16">

          {/* Timeline Item */}
          <div className="relative border-l-2 border-violet-200 pl-8 space-y-10">

            {/* Item 1 */}
            <div className="relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-violet-500 rounded-full shadow-md"></div>

              <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Diploma - GWPTC TVM
                  </h4>

                  <span className="text-sm md:text-base text-violet-600 font-medium">
                    2024 - 2027
                  </span>
                </div>

                <p className="text-gray-500 mt-3">
                  Government Women’s Polytechnic College, Thiruvananthapuram
                </p>

                <div className="mt-4 flex gap-3 flex-wrap">
                  <span className="px-4 py-1 bg-violet-100 text-violet-600 text-sm rounded-full">
                    Computer Engineering
                  </span>
                  <span className="px-4 py-1 bg-rose-100 text-rose-600 text-sm rounded-full">
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