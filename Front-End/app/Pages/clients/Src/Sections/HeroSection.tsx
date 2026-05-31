import {
  FiSearch,
  FiCoffee,
  FiGrid,
  FiArrowRight,
  FiShoppingBag,
  FiTruck,
  FiSmartphone,
  FiMaximize,
} from "react-icons/fi";
import { MdOutlineLocalDrink } from "react-icons/md";
import { FaIceCream } from "react-icons/fa";
import { GiCroissant } from "react-icons/gi";
import Link from "next/link";

const categories = [
  { name: "Coffee", icon: FiCoffee, href: "/" },
  { name: "Cold Drinks", icon: MdOutlineLocalDrink, href: "/" },
  { name: "Desserts", icon: FaIceCream, href: "/" },
  { name: "Bakery", icon: GiCroissant, href: "/" },
  {
    name: "All Menu",
    icon: FiGrid,
    href: "/Pages/clients/Src/Pages/static-menu",
  },
];

export default function HeroSection() {
  return (
    <div className="space-y-6 bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-4 rounded-3xl font-sans">
      {/* ================= SEARCH ================= */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-black/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
          <FiSearch className="w-5 h-5 text-black/60" />

          <input
            className="w-full bg-transparent outline-none text-sm text-black placeholder:text-black/40"
            placeholder="Search coffee, desserts, or seasonal drinks..."
          />

          <span className="hidden sm:block text-[10px] text-black/50 bg-black/5 px-2 py-1 rounded-full">
            ⌘K
          </span>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-black/10 max-w-6xl mx-auto">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* OVERLAY FIX */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />

        {/* TAGS */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex gap-2 flex-wrap">
          <span className="text-[10px] px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur">
            Seasonal
          </span>
          <span className="text-[10px] px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur">
            Premium Brew
          </span>
        </div>

        {/* CONTENT */}
        <div className="relative p-6 sm:p-10 md:p-14 min-h-95 sm:min-h-105 flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-6xl leading-tight">
              Crafted with passion,
              <br />
              served with purpose.
            </h1>

            <p className="mt-4 sm:mt-5 text-white/90 max-w-lg text-sm sm:text-base">
              Discover our seasonal coffee experience made from the finest
              beans, roasted with precision and served with love.
            </p>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/Pages/scanner"
                className="flex items-center justify-center gap-2 bg-[#E9D7BD] text-black px-5 sm:px-6 py-3 rounded-xl font-medium hover:scale-[1.02] transition"
              >
                <FiMaximize size={18} />
                Dine-in with QR
              </Link>

              <Link
                href="/Pages/clients/Src/Pages/grab-go"
                className="flex items-center justify-center gap-2 bg-white border border-black/10 text-black px-5 sm:px-6 py-3 rounded-xl font-medium hover:bg-black/5 transition"
              >
                Grab & Go
                <FiCoffee size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-white/80"></span>
          <span className="w-2 h-2 rounded-full bg-white/40"></span>
          <span className="w-2 h-2 rounded-full bg-white/40"></span>
        </div>
      </div>

      {/* ================= CATEGORY ================= */}
      <div className="max-w-5xl mx-auto bg-white border border-black/10 rounded-3xl p-4 sm:p-6 shadow-sm">
        <div className="flex gap-5 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide px-1 sm:px-2">
          {categories.map((c) => {
            const Icon = c.icon;

            return (
              <Link
                key={c.name}
                href={c.href}
                className="
            min-w-27.5 sm:min-w-32.5
            flex flex-col items-center justify-center
            gap-3
            px-4 py-5
            rounded-2xl

            bg-white
            border border-black/10

            hover:-translate-y-1
            hover:shadow-md

            transition-all duration-300
          "
              >
                {/* ICON */}
                <div className="w-11 h-11 rounded-xl bg-[#123A2B]/10 grid place-items-center text-[#123A2B]">
                  <Icon className="text-xl" />
                </div>

                {/* LABEL */}
                <span className="text-xs sm:text-sm font-medium text-black/80 text-center">
                  {c.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
