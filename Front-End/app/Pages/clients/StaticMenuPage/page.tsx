"use client";

import { useState } from "react";
import menu from "@/Src/jsonData/menu.json";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";

export default function StaticMenuPage() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] px-6 py-20">
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold tracking-widest text-[#061b0e]">
          DINE SYNC
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Fresh • Crafted • Served with care
        </p>
      </div>

      {/* MENU */}
      <div className="max-w-4xl mx-auto space-y-16">
        {menu.categories.map((cat) => {
          const items = menu.products.filter((p) => p.category === cat.id);

          return (
            <div key={cat.id}>
              {/* CATEGORY */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[#061b0e]">
                  {cat.name}
                </h2>
                <div className="h-px flex-1 mx-4 bg-black/10" />
              </div>

              {/* ITEMS */}
              <div className="space-y-5">
                {items.map((item) => {
                  const isFav = favorites.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-black/5 hover:bg-white/70 transition group"
                    >
                      {/* IMAGE */}
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="
      object-cover
      transition
      duration-500
      group-hover:scale-110
    "
                        />

                        {/* cinematic overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                      </div>

                      {/* INFO */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#061b0e] group-hover:translate-x-1 transition">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </p>
                      </div>

                      {/* RIGHT ACTIONS */}
                      <div className="flex items-center gap-4">
                        {/* PRICE */}
                        <div className="text-[#061b0e] font-bold text-lg whitespace-nowrap">
                          {item.price} EGP
                        </div>

                        {/* FAVORITE BUTTON */}
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition
                            ${
                              isFav
                                ? "bg-red-500 text-white"
                                : "bg-white/60 text-gray-700"
                            }`}
                        >
                          <FiHeart className={isFav ? "fill-white" : ""} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
