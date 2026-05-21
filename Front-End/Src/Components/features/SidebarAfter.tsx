"use client";
import Link from "next/link";
import { BsFillLeafFill } from "react-icons/bs";
import {
  FiHeart,
  FiHelpCircle,
  FiHome,
  FiMapPin,
  FiMenu,
  FiPackage,
  FiStar,
  FiUser,
} from "react-icons/fi";

export default function SidebarAfter() {
  return (
    <aside>
      <div className="bg-[#EFE6D6]/70 rounded-2xl p-6 flex flex-col min-h-[calc(100vh-48px)]">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#123A2B]/10 grid place-items-center">
            <BsFillLeafFill className="w-6 h-6 text-[#123A2B]" />
          </div>

          <div className="leading-tight">
            <div className="font-serif text-[22px] font-bold">Dine</div>
            <div className="font-serif text-[20px] -mt-1">Sync</div>
          </div>
        </div>

        {/* NAV */}
        <nav className="mt-8 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#123A2B] text-white shadow-soft">
            <FiHome className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </button>

          <Link
            href="/Pages/clients/StaticMenuPage"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0]"
          >
            <FiMenu className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Menu</span>
          </Link>
          <Link
            href="/Pages/clients/favorites"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0]"
          >
            <FiHeart className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Wish</span>
          </Link>

          <Link
            href="/OrderStatusPage"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0] transition"
          >
            <FiPackage className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Orders</span>
          </Link>
          <Link
            href="/profile"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0]"
          >
            <FiUser className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Profile</span>
          </Link>

          <div className="my-5 h-px bg-line"></div>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0]">
            <FiMapPin className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Our Locations</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0]">
            <FiStar className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Rewards</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FBF7F0]">
            <FiHelpCircle className="w-5 h-5 text-[#121212]" />
            <span className="text-[#121212]">Support</span>
          </button>
        </nav>

        {/* PROMO */}
        <div className="mt-auto pt-6">
          <div className="rounded-2xl bg-[#123A2B] text-white overflow-hidden shadow-soft">
            <div className="p-5">
              <div className="uppercase tracking-widest text-[11px] text-white/70">
                Sommelier is choice
              </div>
              <div className="mt-2 font-serif text-[20px] leading-snug">
                Roasted Pecan Latté
              </div>
              <button className="mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 text-sm">
                Try Now
              </button>
            </div>

            <div
              className="h-35 bg-cover bg-center"
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
