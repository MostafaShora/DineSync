"use client";

import { BsFillLeafFill } from "react-icons/bs";
import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiClipboard,
  FiStar,
  FiTrendingUp,
  FiSettings,
  FiTag,
  FiLogOut,
} from "react-icons/fi";

import { useRouter } from "next/navigation";

type AdminSidebarProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  page: string;
};

export default function AdminSidebar({ setPage, page }: AdminSidebarProps) {
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", key: "dashboard", icon: FiGrid },
    { name: "Products", key: "products", icon: FiShoppingBag },
    { name: "Orders", key: "orders", icon: FiClipboard },
    { name: "Customers", key: "customers", icon: FiUsers },
    { name: "Analytics", key: "analytics", icon: FiTrendingUp },
    { name: "Reviews", key: "reviews", icon: FiStar },
    { name: "Offers", key: "offers", icon: FiTag },
    { name: "Settings", key: "settings", icon: FiSettings },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <aside className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)] md:relative md:bg-transparent md:border-none md:shadow-none md:pb-0 md:w-[280px] md:h-screen md:shrink-0 md:p-4">
      <div className="flex flex-row items-center h-[75px] md:flex-col md:items-stretch md:justify-start md:h-full md:p-5 md:bg-[#EFE6D6]/70 md:rounded-2xl md:shadow-sm">
        
        {/* LOGO - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#123A2B]/10 grid place-items-center">
            <BsFillLeafFill className="w-6 h-6 text-[#123A2B]" />
          </div>

          <div className="leading-tight">
            <div className="font-serif text-[22px] font-bold text-[#121212]">
              Dine
            </div>
            <div className="font-serif text-[18px] -mt-1 text-[#121212]/80">
              Sync Admin
            </div>
          </div>
        </div>

        {/* SECTION TITLE - Hidden on Mobile */}
        <p className="hidden md:block text-[11px] tracking-[0.25em] text-[#6B6B63] mb-3">
          MAIN MENU
        </p>

        {/* NAVIGATION */}
        <nav className="flex-1 flex flex-row md:flex-col items-center md:items-stretch gap-2 md:gap-0 md:space-y-2 overflow-x-auto md:overflow-visible px-2 md:p-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
          {navItems.map((item) => {
            const isActive = page === item.key;

            return (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl transition min-w-[70px] md:min-w-0
                  ${
                    isActive
                      ? "bg-transparent md:bg-[#123A2B] text-[#123A2B] md:text-white md:shadow-md"
                      : "hover:bg-gray-50 md:hover:bg-[#FBF7F0] text-[#6B6B63] md:text-[#121212]"
                  }
                `}
              >
                <item.icon
                  className={`w-6 h-6 md:w-5 md:h-5 transition-colors ${
                    isActive ? "text-[#123A2B] md:text-white" : "text-[#6B6B63] md:text-[#121212]"
                  }`}
                />

                <span
                  className={`text-[10px] md:text-sm whitespace-nowrap transition-colors ${
                    isActive ? "font-bold md:font-medium text-[#123A2B] md:text-white" : "font-medium text-[#6B6B63] md:text-[#121212]"
                  }`}
                >
                  {item.name}
                </span>
                
                {/* Mobile Active Indicator Dot */}
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#123A2B] rounded-full mt-1 md:hidden"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* STATUS CARD - Hidden on Mobile */}
        <div className="hidden md:block mt-auto pt-4 border-t border-[#123A2B]/10">
            <div className="rounded-xl bg-[#123A2B] text-white p-4">
              <p className="text-[10px] text-white/70 tracking-widest">
                ADMIN STATUS
              </p>
              <p className="mt-1 text-sm font-serif">All systems operational</p>
              <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-white/60 rounded-full" />
              </div>
            </div>
        </div>

        {/* SIGN OUT - Hidden on Mobile Bottom Bar */}
        <button
          onClick={handleLogout}
          className="hidden md:flex mt-4 w-full items-center gap-3 px-4 py-3 rounded-xl 
          bg-white/60 hover:bg-red-50 text-[#121212] hover:text-red-600
          transition"
        >
          <FiLogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}