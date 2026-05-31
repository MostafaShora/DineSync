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
    <aside className="w-70 shrink-0">
      <div className="bg-[#EFE6D6]/70 rounded-2xl p-5 flex flex-col h-[calc(100vh-48px)] shadow-sm">
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-6">
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

        {/* SECTION */}
        <p className="text-[11px] tracking-[0.25em] text-[#6B6B63] mb-3">
          MAIN MENU
        </p>

        {/* NAVIGATION */}
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = page === item.key;

            return (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-[#123A2B] text-white shadow-md"
                      : "hover:bg-[#FBF7F0] text-[#121212]"
                  }
                `}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive ? "text-white" : "text-[#121212]"
                  }`}
                />

                <span
                  className={`text-sm ${
                    isActive ? "font-medium text-white" : "text-[#121212]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* STATUS CARD */}
        <div className="mt-4 rounded-xl bg-[#123A2B] text-white p-4">
          <p className="text-[10px] text-white/70 tracking-widest">
            ADMIN STATUS
          </p>

          <p className="mt-1 text-sm font-serif">All systems operational</p>

          <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-white/60 rounded-full" />
          </div>
        </div>

        {/* SIGN OUT */}
        <button
          onClick={handleLogout}
          className="mt-4 w-full flex items-center gap-3 px-4 py-3 rounded-xl 
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
