import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiBell, FiHeart } from "react-icons/fi";

export default function TopbarUser() {
  return (
    <div className="flex items-center gap-3">
      {/* Notifications */}
      <Link
        href="/notifications"
        className="relative w-12 h-12 rounded-full ring-1 ring-[#123A2B]/30 grid place-items-center hover:bg-[#123A2B]/10 transition"
      >
        <FiBell className="w-5 h-5 text-[#123A2B]" />

        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </Link>

      {/* Wishlist */}
      <Link
        href="/Pages/clients/favorites"
        className="relative w-12 h-12 rounded-full ring-1 ring-[#123A2B]/30 grid place-items-center hover:bg-[#123A2B]/10 transition"
      >
        <FiHeart className="w-5 h-5 text-[#123A2B]" />

        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B23A2A] text-white text-[10px] rounded-full grid place-items-center">
          3
        </span>
      </Link>

      {/* Profile */}
      <Link
        href="/Pages/clients/Src/Pages/profile"
        className="w-12 h-12 rounded-full ring-1 ring-[#123A2B]/30 grid place-items-center hover:bg-[#123A2B]/10 transition"
      >
        <FaUser className="text-[#123A2B] text-base" />
      </Link>
    </div>
  );
}
