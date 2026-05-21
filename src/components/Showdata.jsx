import React from "react";

function Showdata({ photos }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-8">

      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-xl"
          >

            <img
  src={`https://picsum.photos/300/200?random=${photo.id}`}
  alt={photo.title}
  className="w-full h-52 object-cover rounded-xl mb-4"
/>

            <h2 className="text-white text-lg font-semibold">
              {photo.title}
            </h2>

            <p className="text-white/70 mt-2">
              ID: {photo.id}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Showdata;