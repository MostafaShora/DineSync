"use client";

import { useEffect, useMemo, useState } from "react";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import api from "@/app/Pages/admin/src/libs/api";

type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
  };
};

type Category = {
  _id: string;
  name: string;
};

export default function StaticMenuPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [productsRes, categoriesRes] = await Promise.all([
          api.get("/products"),
          api.get("/categories"),
        ]);

        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.log("FETCH ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =========================
  // FAVORITES
  // =========================
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // =========================
  // GROUP PRODUCTS BY CATEGORY (OPTIMIZED)
  // =========================
  const groupedProducts = useMemo(() => {
    const map: Record<string, Product[]> = {};

    categories.forEach((c) => {
      map[c._id] = [];
    });

    products.forEach((p) => {
      const catId = p.categoryId?._id;
      if (catId && map[catId]) {
        map[catId].push(p);
      }
    });

    return map;
  }, [products, categories]);

  // =========================
  // LOADING UI
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbf9f5]">
        <p className="text-gray-500 text-lg">Loading menu...</p>
      </div>
    );
  }

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
        {categories.map((cat) => {
          const items = groupedProducts[cat._id] || [];

          return (
            <div key={cat._id}>
              {/* CATEGORY HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[#061b0e]">
                  {cat.name}
                </h2>
                <div className="h-px flex-1 mx-4 bg-black/10" />
              </div>

              {/* ITEMS */}
              <div className="space-y-5">
                {items.length === 0 ? (
                  <p className="text-sm text-gray-400">
                    No items in this category
                  </p>
                ) : (
                  items.map((item) => {
                    const isFav = favorites.includes(item._id);

                    return (
                      <div
                        key={item._id}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-black/5 hover:bg-white/70 transition group"
                      >
                        {/* IMAGE */}
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                          <Image
                            src={item.image || "/placeholder.jpg"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>

                        {/* INFO */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#061b0e]">
                            {item.name}
                          </h3>

                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* PRICE + FAVORITE */}
                        <div className="flex items-center gap-4">
                          <div className="text-[#061b0e] font-bold whitespace-nowrap">
                            {item.price} EGP
                          </div>

                          <button
                            onClick={() => toggleFavorite(item._id)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
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
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
