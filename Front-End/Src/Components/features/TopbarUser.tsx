import Link from "next/link";
import { FiBell, FiHeart } from "react-icons/fi";

export default function TopbarUser() {
  return (
    <div className="flex items-center gap-3">
      {/* Notifications */}
      <button className="relative w-12 h-12 rounded-2xl bg-card border border-line grid place-items-center hover:-translate-y-0.5 transition">
        <FiBell className="w-5 h-5 text-black/70" />

        {/* badge */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Wishlist */}
      <Link
        href="/Pages/clients/favorites"
        className="relative w-12 h-12 rounded-2xl bg-card border border-line grid place-items-center hover:-translate-y-0.5 transition"
      >
        <FiHeart className="w-5 h-5 text-black/70" />

        {/* badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B23A2A] text-white text-[10px] rounded-full grid place-items-center">
          3
        </span>
      </Link>

      {/* Profile */}
      <button className="w-12 h-12 rounded-full bg-[#123A2B] text-white grid place-items-center hover:scale-[1.05] transition shadow-soft">
        {/* avatar initial */}A
      </button>
    </div>
  );
}
