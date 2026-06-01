import Link from "next/link";
import { BsFillLeafFill } from "react-icons/bs";
import {
  FiHeart,
  FiHome,
  FiMenu,
  FiMapPin,
  FiStar,
  FiTrendingUp,
  FiCoffee,
} from "react-icons/fi";

export default function SidebarBefor() {
  const itemClass =
    "group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 hover:bg-white/70 hover:translate-x-1";

  const iconClass =
    "w-5 h-5 text-[#123A2B] group-hover:scale-110 transition-transform";

  return (
    <aside className="w-72 shrink-0">
      <div
        className="
          h-[calc(100vh-48px)]
          rounded-[28px]
          bg-white/40
          backdrop-blur-xl
          border border-white/30
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          p-6
          flex flex-col
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#123A2B] to-[#1D5B43] grid place-items-center shadow-lg">
            <BsFillLeafFill className="w-6 h-6 text-white" />
          </div>

          <div className="leading-tight">
            <div className="font-serif text-2xl font-bold text-[#121212]">
              Dine
            </div>
            <div className="font-serif text-lg text-[#121212]/70 -mt-1">
              Sync
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="space-y-2 flex-1">
          {/* ACTIVE */}
          <button className="relative w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#123A2B] to-[#1D5B43] text-white shadow-lg">
            <div className="absolute left-0 top-2 bottom-2 w-1 bg-white rounded-r-full" />
            <FiHome className="w-5 h-5 text-white" />
            <span className="font-medium">Home</span>
          </button>

          <Link
            href="/Pages/clients/Src/Pages/static-menu"
            className={itemClass}
          >
            <FiMenu className={iconClass} />
            <span className="text-[#121212]">Menu</span>
          </Link>

          <button className={itemClass}>
            <FiCoffee className={iconClass} />
            <span className="text-[#121212]">Categories</span>
          </button>

          <button className={itemClass}>
            <FiTrendingUp className={iconClass} />
            <span className="text-[#121212]">Popular Items</span>
          </button>

          <button className={itemClass}>
            <FiStar className={iconClass} />
            <span className="text-[#121212]">Top Rated</span>
          </button>

          <Link href="/Pages/clients/favorites" className={itemClass}>
            <FiHeart className={iconClass} />
            <span className="text-[#121212]">Wish List</span>
          </Link>

          <Link
            href="/Pages/clients/Src/Pages/nearbyPage"
            className={itemClass}
          >
            <FiMapPin className={iconClass} />
            <span className="text-[#121212]">Find Nearby</span>
          </Link>
        </nav>

        {/* PROMO */}
        <div className="mt-6">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#123A2B] to-[#1D5B43] text-white shadow-xl">
            <div className="p-5">
              <div className="text-[11px] tracking-widest uppercase text-white/70">
                Today’s Deal
              </div>

              <div className="mt-2 font-serif text-xl leading-snug">
                20% Off Fresh Coffee
              </div>

              <button className="mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                Explore
              </button>
            </div>

            <div
              className="h-32 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
