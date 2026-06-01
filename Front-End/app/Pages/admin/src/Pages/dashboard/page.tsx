"use client";

import {
  FiTrendingUp,
  FiShoppingBag,
  FiUsers,
  FiClipboard,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    icon: FiClipboard,
    growth: "+12%",
  },
  {
    title: "Revenue",
    value: "$8,420",
    icon: FiTrendingUp,
    growth: "+18%",
  },
  {
    title: "Products",
    value: "86",
    icon: FiShoppingBag,
    growth: "+4%",
  },
  {
    title: "Customers",
    value: "642",
    icon: FiUsers,
    growth: "+9%",
  },
];

const recentOrders = [
  {
    id: "#1024",
    customer: "Ahmed Salah",
    total: "$42",
    status: "Completed",
  },
  {
    id: "#1025",
    customer: "Mariam Ali",
    total: "$28",
    status: "Pending",
  },
  {
    id: "#1026",
    customer: "Omar Hassan",
    total: "$65",
    status: "Preparing",
  },
  {
    id: "#1027",
    customer: "Sarah Mohamed",
    total: "$31",
    status: "Completed",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] p-6">
      <div className="flex gap-6">
        {/* MAIN CONTENT */}
        <main className="flex-1">
          {/* HEADER */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            {/* glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#123A2B]/10 via-transparent to-[#123A2B]/10 blur-3xl rounded-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between w-full p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              {/* LEFT SIDE */}
              <div className="space-y-2">
                {/* badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123A2B]/10 text-[#123A2B] text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#123A2B] animate-pulse" />
                  Restaurant Panel
                </div>

                {/* title */}
                <h1 className="font-serif text-[38px] md:text-[44px] text-[#1C1C1A] font-bold tracking-tight">
                  Dashboard
                </h1>

                {/* subtitle */}
                <p className="text-[#6B6B63] mt-1 text-sm md:text-base">
                  Welcome back, manage your restaurant efficiently.
                </p>
              </div>

              {/* RIGHT ACTION */}
              <button
                className="
        group
        relative
        overflow-hidden
        bg-[#123A2B]
        text-white
        px-6 py-3
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        transition
        flex items-center gap-2
      "
              >
                {/* glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />

                <FiArrowUpRight className="relative z-10 group-hover:rotate-45 transition" />

                <span className="relative z-10">View Reports</span>
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-[#E8E2D5]
                shadow-[0_10px_30px_rgba(20,20,20,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#123A2B]/10 grid place-items-center">
                    <item.icon className="text-[#123A2B] text-[22px]" />
                  </div>

                  <div className="text-[12px] px-2 py-1 rounded-full bg-[#DDF3E7] text-[#227A4E] font-medium">
                    {item.growth}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-[#6B6B63] text-sm">{item.title}</h3>

                  <div className="font-serif text-[32px] text-[#1C1C1A] font-bold mt-1">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* RECENT ORDERS */}
            <div className="xl:col-span-2 bg-white/80 rounded-3xl border border-[#E8E2D5] p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-serif text-[26px] text-[#1C1C1A]">
                    Recent Orders
                  </h2>

                  <p className="text-sm text-[#6B6B63]">
                    Latest customer activity
                  </p>
                </div>

                <button className="text-[#123A2B] text-sm font-medium hover:underline">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F5EE]"
                  >
                    <div>
                      <div className="font-semibold text-[#1C1C1A]">
                        {order.id}
                      </div>

                      <div className="text-sm text-[#6B6B63] mt-1">
                        {order.customer}
                      </div>
                    </div>

                    <div className="text-[#1C1C1A] font-medium">
                      {order.total}
                    </div>

                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      
                      ${
                        order.status === "Completed"
                          ? "bg-[#DDF3E7] text-[#227A4E]"
                          : order.status === "Pending"
                            ? "bg-[#FFF1D6] text-[#C98A00]"
                            : "bg-[#E3EDFF] text-[#2458B3]"
                      }
                    `}
                    >
                      {order.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK OVERVIEW */}
            <div className="space-y-6">
              {/* SALES CARD */}
              <div className="bg-[#123A2B] text-white rounded-3xl p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="text-white/70 text-[12px] uppercase tracking-widest">
                    Monthly Revenue
                  </div>

                  <div className="font-serif text-[42px] mt-3 font-bold">
                    $24K
                  </div>

                  <div className="mt-2 text-[#D9EBDD] text-sm">
                    Increased by 18% this month
                  </div>

                  <button className="mt-6 px-4 py-2 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition text-sm">
                    Analytics
                  </button>
                </div>
              </div>

              {/* ACTIVITY */}
              <div className="bg-white/80 rounded-3xl border border-[#E8E2D5] p-6">
                <div className="flex items-center gap-2 mb-5">
                  <FiClock className="text-[#123A2B]" />

                  <h3 className="font-serif text-[24px] text-[#1C1C1A]">
                    Activity
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#227A4E] mt-2" />

                    <div>
                      <div className="text-sm text-[#1C1C1A] font-medium">
                        New order received
                      </div>

                      <div className="text-xs text-[#8A8A80]">2 min ago</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C98A00] mt-2" />

                    <div>
                      <div className="text-sm text-[#1C1C1A] font-medium">
                        Product stock updated
                      </div>

                      <div className="text-xs text-[#8A8A80]">15 min ago</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2458B3] mt-2" />

                    <div>
                      <div className="text-sm text-[#1C1C1A] font-medium">
                        New customer registered
                      </div>

                      <div className="text-xs text-[#8A8A80]">1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
