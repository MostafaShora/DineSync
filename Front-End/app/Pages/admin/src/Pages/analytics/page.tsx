"use client";

import {
  FiTrendingUp,
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiActivity,
  FiBarChart2,
} from "react-icons/fi";

const topProducts = [
  {
    name: "Caramel Latte",
    sales: 320,
    revenue: "$4,200",
  },
  {
    name: "Classic Cappuccino",
    sales: 280,
    revenue: "$3,650",
  },
  {
    name: "Mocha Ice Coffee",
    sales: 240,
    revenue: "$2,980",
  },
  {
    name: "Chocolate Croissant",
    sales: 190,
    revenue: "$1,740",
  },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6 m-10  ">
      {/* HEADER */}
      <div className="relative mb-10">
        {/* glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A2B]/10 via-transparent to-[#123A2B]/10 blur-3xl rounded-3xl" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* LEFT SIDE */}
          <div className="space-y-2">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123A2B]/10 text-[#123A2B] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#123A2B] animate-pulse" />
              Live Analytics
            </div>

            {/* title */}
            <h1 className="text-3xl md:text-4xl font-serif text-[#123A2B] font-bold tracking-tight">
              Analytics Overview
            </h1>

            {/* subtitle */}
            <p className="text-[#6B6B63] mt-1 text-sm md:text-base">
              Monitor sales, customers, and café performance.
            </p>
          </div>

          {/* RIGHT ACTION */}
          <button
            className="
        group
        relative
        overflow-hidden
        px-6 py-3
        rounded-2xl
        bg-[#123A2B]
        text-white
        shadow-lg
        hover:shadow-2xl
        transition
        flex items-center gap-2
      "
          >
            {/* animated shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />

            <span className="relative z-10">Download Report</span>
          </button>
        </div>
      </div>
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Total Revenue</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">$24.8K</h2>

              <span className="text-[#15803D] text-sm mt-2 inline-block">
                +12.4% this month
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E8F7EE] flex items-center justify-center">
              <FiDollarSign className="text-[#15803D] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Orders</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">1,482</h2>

              <span className="text-[#2563EB] text-sm mt-2 inline-block">
                +8.1% growth
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <FiShoppingBag className="text-[#2563EB] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Customers</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">892</h2>

              <span className="text-[#D97706] text-sm mt-2 inline-block">
                +15% new users
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#FFF4E5] flex items-center justify-center">
              <FiUsers className="text-[#D97706] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Conversion Rate</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">68%</h2>

              <span className="text-[#15803D] text-sm mt-2 inline-block">
                Excellent
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#F4F0FF] flex items-center justify-center">
              <FiTrendingUp className="text-[#7C3AED] text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-serif text-[#123A2B] font-bold">
              Sales Performance
            </h2>

            <p className="text-[#6B6B63] text-sm mt-1">
              Monthly café revenue overview.
            </p>
          </div>

          <div className="w-12 h-12 rounded-xl bg-[#123A2B]/10 flex items-center justify-center">
            <FiBarChart2 className="text-[#123A2B] text-xl" />
          </div>
        </div>

        {/* Fake chart */}
        <div className="h-80 rounded-2xl bg-[#F8F5EF] flex items-end gap-4 p-6">
          {[40, 65, 55, 80, 45, 90, 70].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-2xl bg-[#123A2B]"
              style={{
                height: `${height}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* TOP PRODUCTS */}
      <div className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#F1ECE3]">
          <h2 className="text-xl font-serif text-[#123A2B] font-bold">
            Top Selling Products
          </h2>

          <p className="text-[#6B6B63] text-sm mt-1">
            Best performing items this month.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F5EF]">
              <tr className="text-left">
                <th className="px-6 py-4 text-sm font-medium text-[#6B6B63]">
                  Product
                </th>

                <th className="px-6 py-4 text-sm font-medium text-[#6B6B63]">
                  Sales
                </th>

                <th className="px-6 py-4 text-sm font-medium text-[#6B6B63]">
                  Revenue
                </th>

                <th className="px-6 py-4 text-sm font-medium text-[#6B6B63]">
                  Performance
                </th>
              </tr>
            </thead>

            <tbody>
              {topProducts.map((product, index) => (
                <tr
                  key={index}
                  className="border-t border-[#F1ECE3] hover:bg-[#FCFAF6] transition"
                >
                  <td className="px-6 py-5 font-medium text-[#121212]">
                    {product.name}
                  </td>

                  <td className="px-6 py-5 text-[#4A4A45]">
                    {product.sales} orders
                  </td>

                  <td className="px-6 py-5 font-semibold text-[#123A2B]">
                    {product.revenue}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-[#15803D]">
                      <FiActivity />
                      Strong
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
