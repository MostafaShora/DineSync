"use client";

import { BsFillLeafFill } from "react-icons/bs";
import { FiPackage, FiHome, FiLogOut } from "react-icons/fi";

import { useRouter } from "next/navigation";

type StaffSidebarProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  page: string;
};

export default function StaffSidebar({ setPage, page }: StaffSidebarProps) {
  const router = useRouter();

  const navItems = [
    {
      name: "Grab & Go",
      key: "grab&go",
      icon: FiPackage,
    },
    {
      name: "Dine-In",
      key: "dine-in",
      icon: FiHome,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
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
          flex
          flex-col
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-gradient-to-br
              from-[#123A2B]
              to-[#1D5B43]
              grid
              place-items-center
              shadow-lg
            "
          >
            <BsFillLeafFill className="w-6 h-6 text-white" />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#121212]">
              DineSync
            </h2>
            <p className="text-sm text-[#6B6B63]">Staff Dashboard</p>
          </div>
        </div>

        {/* Section Label */}
        <div className="mb-4">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#7B7B73]">
            Main Menu
          </p>
        </div>

        {/* Navigation */}
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
                    w-5 h-5
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#123A2B] group-hover:scale-110"
                    }
                  `}
                />

                <span
                  className={`text-sm ${
                    isActive ? "font-medium" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Status Card */}
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
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/70">
            Staff Status
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
            </span>

            <span className="text-sm font-medium">All Systems Operational</span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-green-300 to-green-400" />
          </div>

          <div className="mt-2 flex justify-between text-xs text-white/70">
            <span>Performance</span>
            <span>92%</span>
          </div>
        </div>

        {/* Logout */}
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
            border
            border-red-100
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
