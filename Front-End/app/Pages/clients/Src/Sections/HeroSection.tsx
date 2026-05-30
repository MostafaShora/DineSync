import { FiSearch, FiCoffee, FiGrid } from "react-icons/fi";
import { MdOutlineLocalDrink } from "react-icons/md";
import { FaIceCream } from "react-icons/fa";
import { GiCroissant } from "react-icons/gi";
import Link from "next/link";

const categories = [
  { name: "Coffee", icon: <FiCoffee />, href: "/" },
  { name: "Cold Drinks", icon: <MdOutlineLocalDrink />, href: "/" },
  { name: "Desserts", icon: <FaIceCream />, href: "/" },
  { name: "Bakery", icon: <GiCroissant />, href: "/" },
  {
    name: "All Menu",
    icon: <FiGrid />,
    href: "/Pages/clients/Src/Pages/static-menu",
  },
];

export default function HeroSection() {
  return (
    <div className="mt-1 space-y-6 bg-[#F6F1E8] px-4 rounded-2xl">
      {/* ================= SEARCH ================= */}
      <div className="max-w-4xl mx-auto">
        <div
          className="
          bg-white
          border border-black/10
          rounded-2xl
          px-4 py-3
          flex items-center gap-3
          shadow-sm
        "
        >
          <FiSearch className="w-5 h-5 text-black/60" />

          <input
            className="w-full bg-transparent outline-none text-sm text-black placeholder:text-black/40"
            placeholder="Search coffee, desserts, or seasonal drinks..."
          />

          <span className="text-[10px] text-black/50 bg-black/5 px-2 py-1 rounded-full">
            ⌘K
          </span>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div
        className="
        relative rounded-2xl overflow-hidden
        shadow-xl
        border border-black/10
        bg-black
        max-w-6xl mx-auto
      "
      >
        {/* background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105d"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* stronger readable overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />

        {/* tags */}
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="text-[10px] px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur">
            Seasonal
          </span>
          <span className="text-[10px] px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur">
            Premium Brew
          </span>
        </div>

        {/* content */}
        <div className="relative p-10 md:p-14 min-h-105 flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight">
              Crafted with passion,
              <br />
              served with purpose.
            </h1>

            <p className="mt-5 text-white/90 max-w-lg leading-relaxed">
              Discover our seasonal coffee experience made from the finest
              beans, roasted with precision and served with love.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Dine-in */}
              <a
                className="
                flex items-center justify-center gap-2
                bg-[#E9D7BD]
                text-black
                px-6 py-3 rounded-xl
                font-medium
                hover:scale-[1.02]
                transition
              "
                href="/Pages/scanner"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
                </svg>
                Dine-in with QR
              </a>

              {/* Grab */}
              <button
                className="
                flex items-center justify-center gap-2
                bg-white
                border border-black/10
                text-black
                px-6 py-3 rounded-xl
                font-medium
                hover:bg-black/5
                transition
              "
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 7h12l1 14H5L6 7z" />
                  <path d="M9 7a3 3 0 0 1 6 0" />
                </svg>
                Grab & Go
              </button>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-white/80"></span>
          <span className="w-2 h-2 rounded-full bg-white/40"></span>
          <span className="w-2 h-2 rounded-full bg-white/40"></span>
        </div>
      </div>

      {/* ================= CATEGORY ================= */}
      <div className="max-w-5xl mx-auto bg-white border border-black/10 rounded-2xl p-4 shadow-sm">
        <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {categories.map((c) => (
            <Link
              href={c.href}
              key={c.name}
              className="
    min-w-37.5
    flex flex-col items-center justify-center gap-2
    px-5 py-5
    rounded-2xl

    bg-white
    border border-black/10

    hover:-translate-y-1
    hover:shadow-md

    transition-all duration-300
    group
  "
            >
              {/* icon */}
              <div
                className="
      w-11 h-11
      rounded-xl
      bg-[#123A2B]/10
      grid place-items-center
      text-[#123A2B]
      group-hover:scale-110
      transition
    "
              >
                <span className="text-xl">{c.icon}</span>
              </div>

              <span className="text-sm font-medium text-black/80">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
