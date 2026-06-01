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
    // شيلنا <aside> من هنا لأننا حاطينه في الـ HomePage خلاص عشان ميبقاش تكرار
    <div className="flex flex-row items-center w-full h-[70px] px-2 lg:bg-[#EFE6D6]/70 lg:rounded-2xl lg:p-5 lg:flex-col lg:h-[calc(100vh-48px)] lg:shadow-sm">
      
      {/* LOGO - يختفي في الموبايل */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#123A2B]/10 grid place-items-center">
          <BsFillLeafFill className="w-6 h-6 text-[#123A2B]" />
        </div>

        <div className="leading-tight">
          <div className="font-serif text-[22px] font-bold">Dine</div>
          <div className="font-serif text-[20px] -mt-1">Sync</div>
        </div>
      </div>

      {/* NAV - بالعرض في الموبايل وممكن تسحبه، وبالطول في الكمبيوتر */}
      <nav className="flex flex-row items-center gap-1 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:mt-8 lg:space-y-2 lg:overflow-visible">
        
        <button className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl bg-[#123A2B] text-white shadow-soft min-w-[70px] lg:w-full lg:min-w-0 transition">
          <FiHome className="w-6 h-6 lg:w-5 lg:h-5" />
          <span className="text-[10px] lg:text-base font-medium">Home</span>
        </button>

        <Link
          href="/Pages/clients/Src/Pages/static-menu"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition"
        >
          <FiMenu className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212]">Menu</span>
        </Link>
        
        <Link
          href="/Pages/clients/favorites"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition"
        >
          <FiHeart className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212]">Wish</span>
        </Link>

        <Link
          href="/Pages/clients/Src/Pages/OrderStatusPage"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition"
        >
          <FiPackage className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212]">Orders</span>
        </Link>
        
        <Link
          href="/Pages/clients/Src/Pages/profile"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition"
        >
          <FiUser className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212]">Profile</span>
        </Link>

        {/* الخط الفاصل - يختفي في الموبايل */}
        <div className="hidden lg:block my-5 h-px w-full bg-line"></div>

        <button className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition">
          <FiMapPin className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212] whitespace-nowrap">Locations</span>
        </button>

        <button className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition">
          <FiStar className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212]">Rewards</span>
        </button>

        <Link
          href="/Pages/clients/Src/Pages/supportpage"
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-gray-50 lg:hover:bg-[#FBF7F0] min-w-[70px] lg:w-full lg:min-w-0 transition"
        >
          <FiHelpCircle className="w-6 h-6 lg:w-5 lg:h-5 text-[#121212]" />
          <span className="text-[10px] lg:text-base text-[#121212]">Support</span>
        </Link>
      </nav>

      {/* PROMO - يختفي في الموبايل عشان مياخدش مساحة الشريط */}
      <div className="hidden lg:block mt-auto pt-6 w-full">
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
  );
}