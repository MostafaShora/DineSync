import { FiHeart } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Classic Cappuccino",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Honey Croissant",
    price: "$4.75",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Nitro Cold Brew",
    price: "$6.25",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: "$6.90",
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function RecommendedSection() {
  return (
    <section className="max-w-5xl mx-auto mt-6 space-y-4">
      {/* HEADER */}
      <div className="flex items-end justify-between">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-[#121212]">
            What you might love next 🍃
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-black/60 max-w-md">
            Based on your cravings, we think you’ll like these curated picks.
          </p>
        </div>

        <button className="text-sm text-black/60 hover:text-black transition">
          View all
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <article
            key={item.id}
            className="
              bg-white
              border border-black/10
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all duration-300
              group
            "
          >
            {/* IMAGE */}
            <div
              className="h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* CONTENT */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium text-black/90">{item.name}</div>

                  <div className="mt-1 font-semibold text-[#123A2B]">
                    {item.price}
                  </div>
                </div>

                {/* WISHLIST */}
                <button
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-black/10
                    bg-white
                    grid place-items-center
                    hover:bg-black/5
                    transition
                  "
                >
                  <FiHeart className="w-4 h-4 text-black/60" />
                </button>
              </div>

              {/* CTA */}
              <button
                className="
                  mt-4 w-full
                  bg-[#123A2B]
                  text-white
                  py-2.5
                  rounded-xl
                  font-medium
                  hover:brightness-110
                  transition
                "
              >
                Add to Order
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
