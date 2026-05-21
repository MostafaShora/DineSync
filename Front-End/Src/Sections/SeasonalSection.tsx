import React from "react";

export default function SeasonalSection() {
  return (
    <section className="max-w-6xl mx-auto mt-8">
      <div
        className="
        rounded-3xl
        overflow-hidden
        border border-black/10
        shadow-sm
        bg-[#EAD8C2]
        flex flex-col lg:flex-row
      "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <span className="uppercase text-xs tracking-widest text-black/60">
            Seasonal Special
          </span>

          <h2 className="mt-2 font-serif text-4xl leading-tight">
            Pumpkin Spice Latte
          </h2>

          <p className="mt-3 text-black/70 max-w-md">
            Warm, cozy, and crafted with rich pumpkin flavors blended with our
            signature espresso.
          </p>

          <div className="mt-4 text-2xl font-semibold text-[#123A2B]">
            $5.90
          </div>

          <button
            className="
            mt-6 w-fit
            px-6 py-3
            rounded-xl
            bg-[#123A2B]
            text-white
            font-medium
            hover:brightness-110
            transition
          "
          >
            Order Now
          </button>
        </div>

        {/* IMAGE */}
        <div
          className="h-62.5 lg:h-auto lg:w-[40%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
      </div>
    </section>
  );
}
