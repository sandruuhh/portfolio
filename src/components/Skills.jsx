import React from "react";

function Skills() {
  return (
    <>
      <div id="skills" className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        
        <h4 className="text-3xl font-bold text-green-600 mb-6 border-b-2 border-green-200 pb-2">
          Skills
        </h4>

        <ul className="flex flex-wrap gap-4">
          <li className="bg-green-100 text-green-800 px-5 py-2 rounded-full font-medium shadow hover:bg-green-200 transition duration-300">
            C
          </li>

          <li className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full font-medium shadow hover:bg-blue-200 transition duration-300">
            Web Development
          </li>

          <li className="bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full font-medium shadow hover:bg-yellow-200 transition duration-300">
            Python
          </li>
        </ul>

      </div>
    </>
  );
}

export default Skills;