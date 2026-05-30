import React from "react";
import { FiMapPin, FiClock, FiNavigation } from "react-icons/fi";

export default function LocationSection() {
  return (
    <section className="max-w-6xl mx-auto mt-12">
      <div
        className="
        grid md:grid-cols-2
        gap-6
        items-center
      "
      >
        {/* LEFT: MAP */}
        <div
          className="
          h-[300px] md:h-[380px]
          rounded-3xl
          overflow-hidden
          border border-black/10
          shadow-sm
        "
        >
          <iframe
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?q=cairo%20cafe&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>

        {/* RIGHT: INFO */}
        <div
          className="
          bg-white
          border border-black/10
          rounded-3xl
          p-6
          shadow-sm
        "
        >
          <h2 className="text-xl font-semibold">Visit Our Café</h2>

          {/* LOCATION */}
          <div className="mt-4 flex items-start gap-3 text-black/70">
            <FiMapPin className="mt-1" />
            <span>12 Downtown Street, Cairo, Egypt</span>
          </div>

          {/* HOURS */}
          <div className="mt-3 flex items-start gap-3 text-black/70">
            <FiClock className="mt-1" />
            <span>Daily: 8:00 AM – 12:00 AM</span>
          </div>

          {/* BUTTON */}
          <button
            className="
            mt-6
            w-full
            flex items-center justify-center gap-2
            bg-[#123A2B]
            text-white
            py-3
            rounded-xl
            font-medium
            hover:brightness-110
            transition
          "
          >
            <FiNavigation />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}
