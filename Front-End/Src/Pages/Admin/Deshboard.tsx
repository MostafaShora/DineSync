"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FiClipboard,
  FiClock,
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiZap,
  FiTrendingUp,
  FiHome,
  FiCreditCard,
} from "react-icons/fi";

import StatCard from "@/Src/Components/ui/StatCard";

const Dashboard = () => {
  const router = useRouter();

  const sales = 12500;

  const quickActions = [
    {
      title: "Orders",
      desc: "Manage active orders",
      icon: <FiClipboard size={22} />,
      path: "/admin/registry",
    },
    {
      title: "History",
      desc: "All previous sales",
      icon: <FiClock size={22} />,
      path: "/admin/history",
    },
    {
      title: "Menu",
      desc: "Edit products",
      icon: <FiGrid size={22} />,
      path: "/admin/menu",
    },
    {
      title: "Users",
      desc: "Staff control",
      icon: <FiUsers size={22} />,
      path: "/admin/users",
    },
    {
      title: "Reports",
      desc: "Analytics",
      icon: <FiBarChart2 size={22} />,
      path: "/admin/reports",
    },
    {
      title: "Settings",
      desc: "System config",
      icon: <FiSettings size={22} />,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef6f1] flex justify-center" dir="ltr">
      <div className="w-full max-w-7xl px-6 py-10 space-y-12">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-[#0A3622]">Dashboard</h1>
            <p className="text-[#0A3622]/60 text-sm mt-1">
              Smart Control Center
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#0A3622] text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0A3622] animate-pulse" />
            Online
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Sales"
            value={`${sales} EGP`}
            percentage="12.5"
            isPositive={true}
            icon={<FiCreditCard size={24} />}
          />
        </div>

        {/* CONTROL CENTER */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#0A3622]/10" />
            <h2 className="text-xs font-black text-[#0A3622]/50 tracking-[0.3em]">
              CONTROL CENTER
            </h2>
            <div className="h-px flex-1 bg-[#0A3622]/10" />
          </div>

          {/* KDS CARD BIG */}
          <div
            onClick={() => router.push("/kitchen")}
            className="
              relative cursor-pointer rounded-3xl p-10 overflow-hidden

              bg-[#dff0e6]
              border border-[#0A3622]/15

              shadow-[0_15px_50px_rgba(10,54,34,0.12)]
              hover:shadow-[0_30px_90px_rgba(10,54,34,0.22)]

              transition-all duration-300 hover:-translate-y-2
            "
          >
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#0A3622]/10 blur-3xl rounded-full" />

            <div className="relative z-10 text-[#0A3622]">
              <div className="w-14 h-14 bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center mb-5">
                <FiZap size={26} />
              </div>

              <h3 className="text-3xl font-black mb-2">
                Kitchen Display System
              </h3>

              <p className="text-[#0A3622]/70 mb-6 text-sm">
                Real-time order tracking and live updates
              </p>

              <div className="inline-flex items-center gap-2 bg-[#0A3622] text-white px-6 py-3 rounded-xl text-xs font-bold">
                Open Dashboard <FiTrendingUp size={14} />
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {quickActions.map((item, i) => (
              <div
                key={i}
                onClick={() => router.push(item.path)}
                className="
                  cursor-pointer rounded-3xl p-8

                  bg-[#e6f2ea]
                  border border-[#0A3622]/10

                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="text-[#0A3622]">
                  <div className="mb-4">{item.icon}</div>

                  <h4 className="text-xl font-black mb-1">{item.title}</h4>

                  <p className="text-sm text-[#0A3622]/60 mb-6">{item.desc}</p>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A3622]">
                    Enter <FiTrendingUp size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div
          onClick={() => router.push("/")}
          className="
            cursor-pointer text-center p-10 rounded-3xl

            bg-[#dff0e6]
            border border-[#0A3622]/10

            shadow-sm hover:shadow-lg
            transition-all
          "
        >
          <FiHome className="mx-auto text-[#0A3622] text-2xl mb-4" />

          <h3 className="text-2xl font-black text-[#0A3622]">Main Portal</h3>

          <p className="text-[#0A3622]/60 text-sm mt-2">
            Return to main system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
