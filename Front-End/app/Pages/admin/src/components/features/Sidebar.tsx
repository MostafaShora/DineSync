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
    router.push("/");
  };

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
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-gradient-to-br
              from-[#123A2B]
              to-[#1D5B43]
              shadow-lg
              grid
              place-items-center
            "
          >
            <BsFillLeafFill className="w-6 h-6 text-white" />
          </div>

          <div className="leading-tight">
            <h2 className="font-serif text-2xl font-bold text-[#121212]">
              Dine
            </h2>

            <p className="font-serif text-lg text-[#121212]/70">Sync Admin</p>
          </div>
        </div>

        {/* SECTION */}
        <p className="mb-4 text-[11px] tracking-[0.25em] uppercase text-[#77736B]">
          Main Menu
        </p>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = page === item.key;

            return (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`
                  relative
                  group
                  w-full
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3.5
                  rounded-2xl
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#123A2B] to-[#1D5B43] text-white shadow-lg scale-[1.02]"
                      : "text-[#121212] hover:bg-white/70 hover:translate-x-1"
                  }
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
                )}

                <item.icon
                  className={`
                    w-5 h-5 transition-all duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#123A2B] group-hover:scale-110"
                    }
                  `}
                />

                <span
                  className={`text-sm ${
                    isActive
                      ? "font-medium text-white"
                      : "font-medium text-[#121212]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* STATUS CARD */}
        <div
          className="
            mt-4
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#123A2B]
            to-[#1D5B43]
            text-white
            shadow-xl
          "
        >
          <p className="text-[10px] tracking-[0.3em] text-white/70 uppercase">
            ADMIN STATUS
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
            </span>

            <span className="text-sm font-medium">All systems operational</span>
          </div>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-green-300 to-green-400" />
          </div>

          <div className="mt-2 flex justify-between text-xs text-white/70">
            <span>System Health</span>
            <span>90%</span>
          </div>
        </div>

        {/* SIGN OUT */}
        <button
          onClick={handleLogout}
          className="
            mt-4
            w-full
            flex
            items-center
            justify-center
            gap-3
            px-4
            py-3.5
            rounded-2xl
            border border-red-100
            bg-red-50
            text-red-600
            transition-all
            duration-300
            hover:bg-red-500
            hover:text-white
            hover:shadow-lg
          "
        >
          <FiLogOut className="w-5 h-5" />

          <span className="text-sm font-semibold">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
