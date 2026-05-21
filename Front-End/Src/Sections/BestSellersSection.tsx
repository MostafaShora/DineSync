import React from "react";
import { FiStar, FiPlus } from "react-icons/fi";

const bestSellers = [
  {
    id: 1,
    name: "Caramel Latte",
    price: "$5.80",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Iced Vanilla Coffee",
    price: "$4.90",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1527169402691-a0a3c8d7b7b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Chocolate Donut",
    price: "$3.50",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Hazelnut Cappuccino",
    price: "$5.60",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BestSellersSection() {
  return (
    <section className="max-w-6xl mx-auto mt-8 space-y-4">
      {/* HEADER */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold">Best Sellers</h2>
          <p className="text-sm text-black/50">Most loved by our customers</p>
        </div>

        <button className="text-sm text-black/60 hover:text-black">
          View all
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              border border-black/10
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition
            "
          >
            {/* IMAGE */}
            <div
              className="h-36 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* CONTENT */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{item.name}</div>

                  <div className="mt-1 flex items-center gap-1 text-sm text-black/60">
                    <FiStar className="text-yellow-500" />
                    {item.rating}
                  </div>

                  <div className="mt-1 font-semibold text-[#123A2B]">
                    {item.price}
                  </div>
                </div>

                {/* ADD BUTTON */}
                <button
                  className="
                  w-9 h-9
                  rounded-xl
                  bg-[#123A2B]
                  text-white
                  grid place-items-center
                  hover:brightness-110
                "
                >
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
