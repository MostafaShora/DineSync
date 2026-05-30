import Image from "next/image";

const featuredItems = [
  {
    name: "Signature Latte",
    description: "Rich espresso with silky steamed milk.",
    price: "$6.50",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Classic Cappuccino",
    description: "Perfect balance of coffee and foam.",
    price: "$5.90",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Chocolate Cake",
    description: "Moist chocolate cake with rich ganache.",
    price: "$7.50",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Butter Croissant",
    description: "Freshly baked every morning.",
    price: "$4.50",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Iced Mocha",
    description: "Chocolate, espresso & cold milk.",
    price: "$6.20",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Berry Cheesecake",
    description: "Creamy cheesecake topped with berries.",
    price: "$8.00",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 rounded-3xl font-sans">
        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[#123A2B] uppercase tracking-[0.25em] text-xs sm:text-sm font-medium">
            Featured Menu
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
            Crafted For Every Moment
          </h2>

          <p className="mt-4 text-black/50 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our most loved coffee creations, handcrafted beverages, and
            freshly baked desserts.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="
            group
            relative
            h-95 sm:h-105 md:h-115
            rounded-3xl
            overflow-hidden
            cursor-pointer
          "
            >
              {/* IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="
                object-cover
                group-hover:scale-110
                transition duration-700
              "
                />
              </div>

              {/* OVERLAY FIX */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 sm:p-6 text-white w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-serif">{item.name}</h3>

                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs sm:text-sm">
                    {item.price}
                  </span>
                </div>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* BUTTON (always visible on mobile) */}
                <button
                  className="
                mt-4
                sm:opacity-0 sm:translate-y-3
                sm:group-hover:opacity-100 sm:group-hover:translate-y-0

                px-5 py-2
                rounded-xl
                bg-[#123A2B]
                text-white
                text-sm
                transition-all duration-500
              "
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-[#123A2B] text-white font-medium hover:brightness-110 transition">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
