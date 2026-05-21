import React from "react";

function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 via-violet-50 to-rose-50">

      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl shadow-lg p-10 md:p-16">

        {/* Heading */}
        <h4 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-violet-600 to-rose-500 text-transparent bg-clip-text">
            Contact
          </span>
        </h4>

        {/* Contact Cards */}
        <div className="space-y-6 text-gray-700">

          {/* Email */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
            <p className="text-lg md:text-xl">
              <span className="font-semibold text-violet-600">Email:</span>{" "}
              <a
                href="mailto:sandra@gmail.com"
                className="text-gray-700 hover:text-violet-600 transition"
              >
                sandra@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
            <p className="text-lg md:text-xl">
              <span className="font-semibold text-violet-600">Phone:</span>{" "}
              <span>9544156042</span>
            </p>
          </div>

          {/* Location */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
            <p className="text-lg md:text-xl">
              <span className="font-semibold text-violet-600">Location:</span>{" "}
              <span>Trivandrum, Kerala</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;