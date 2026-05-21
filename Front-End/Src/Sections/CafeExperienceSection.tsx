import React from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80",
    title: "Moments that matter",
  },
  {
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80",
    title: "Work. Chill. Repeat.",
  },
  {
    url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=80",
    title: "Coffee & Conversations",
  },
];

export default function CinematicCafeSection() {
  return (
    <section className="mt-12">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-6 px-2">
        <h2 className="text-2xl font-semibold">Experience Our Space</h2>
        <p className="text-black/50 text-sm">
          More than coffee — it’s a lifestyle
        </p>
      </div>

      {/* CINEMATIC GRID */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-3
        gap-4
        max-w-6xl mx-auto
      "
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="
              relative
              h-[300px] md:h-[420px]
              rounded-3xl
              overflow-hidden
              group
              cursor-pointer
            "
          >
            {/* IMAGE */}
            <div
              className="
                absolute inset-0
                bg-cover bg-center
                scale-100
                group-hover:scale-110
                transition duration-700 ease-out
              "
              style={{ backgroundImage: `url(${img.url})` }}
            />

            {/* OVERLAY */}
            <div
              className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
            "
            />

            {/* TEXT */}
            <div
              className="
              absolute bottom-6 left-6
              text-white
              transform translate-y-4
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition duration-500
            "
            >
              <h3 className="text-xl font-serif">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <button
          className="
          px-6 py-3
          rounded-xl
          bg-[#123A2B]
          text-white
          font-medium
          hover:brightness-110
          transition
        "
        >
          Visit Our Café
        </button>
      </div>
    </section>
  );
}
