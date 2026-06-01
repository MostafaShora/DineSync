"use client";

import {
  FiSearch,
  FiFilter,
  FiEye,
  FiCheckCircle,
  FiClock,
  FiTruck,
} from "react-icons/fi";

const orders = [
  {
    id: "#ORD-1024",
    customer: "Ahmed Ali",
    items: 3,
    total: "$42.00",
    status: "Preparing",
    date: "23 May 2026",
  },
  {
    id: "#ORD-1025",
    customer: "Sara Mohamed",
    items: 1,
    total: "$18.00",
    status: "Delivered",
    date: "23 May 2026",
  },
  {
    id: "#ORD-1026",
    customer: "Omar Hassan",
    items: 5,
    total: "$76.00",
    status: "On Delivery",
    date: "23 May 2026",
  },
  {
    id: "#ORD-1027",
    customer: "Mariam Adel",
    items: 2,
    total: "$25.00",
    status: "Pending",
    date: "23 May 2026",
  },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6 m-10">
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
              Live Orders
            </div>

            {/* title */}
            <h1 className="text-3xl md:text-4xl font-serif text-[#123A2B] font-bold tracking-tight">
              Orders Management
            </h1>

            {/* subtitle */}
            <p className="text-[#6B6B63] mt-1 text-sm md:text-base">
              Track and manage customer orders.
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

            <span className="relative z-10">Export Orders</span>
          </button>
        </div>
      </div>
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Pending Orders</p>
              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">12</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#FFF4E5] flex items-center justify-center">
              <FiClock className="text-[#D97706] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Delivered</p>
              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">148</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E8F7EE] flex items-center justify-center">
              <FiCheckCircle className="text-[#15803D] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">On Delivery</p>
              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">24</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <FiTruck className="text-[#2563EB] text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white rounded-2xl p-4 border border-[#E8E2D5] shadow-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63]" />

          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
          />
        </div>

        <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E8E2D5] hover:bg-[#F8F5EF] transition">
          <FiFilter />
          Filter
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F5EF]">
              <tr className="text-left">
                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Order ID
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Customer
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Items
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Total
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Status
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Date
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-[#F1ECE3] hover:bg-[#FCFAF6] transition"
                >
                  <td className="px-6 py-5 font-medium text-[#121212]">
                    {order.id}
                  </td>

                  <td className="px-6 py-5 text-[#4A4A45]">{order.customer}</td>

                  <td className="px-6 py-5 text-[#4A4A45]">{order.items}</td>

                  <td className="px-6 py-5 text-[#123A2B] font-semibold">
                    {order.total}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        order.status === "Delivered"
                          ? "bg-[#E8F7EE] text-[#15803D]"
                          : order.status === "Preparing"
                            ? "bg-[#FFF4E5] text-[#D97706]"
                            : order.status === "On Delivery"
                              ? "bg-[#EEF4FF] text-[#2563EB]"
                              : "bg-[#F3F4F6] text-[#6B7280]"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-[#6B6B63]">{order.date}</td>

                  <td className="px-6 py-5">
                    <button className="w-10 h-10 rounded-xl border border-[#E8E2D5] flex items-center justify-center hover:bg-[#F8F5EF] transition">
                      <FiEye className="text-[#123A2B]" />
                    </button>
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
