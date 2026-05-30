"use client";

import {
  FiSearch,
  FiUser,
  FiMail,
  FiPhone,
  FiEye,
  FiUsers,
  FiUserCheck,
  FiTrendingUp,
} from "react-icons/fi";

const customers = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@email.com",
    phone: "+20 101 234 5678",
    orders: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara@email.com",
    phone: "+20 109 876 5432",
    orders: 5,
    status: "VIP",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar@email.com",
    phone: "+20 112 333 4444",
    orders: 2,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mariam Adel",
    email: "mariam@email.com",
    phone: "+20 100 222 9999",
    orders: 8,
    status: "Active",
  },
];

export default function AdminCustomersPage() {
  return (
    <div className="space-y-6 m-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-[#123A2B] font-bold">
            Customers Management
          </h1>

          <p className="text-[#6B6B63] mt-1">
            Manage and track all customer accounts.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[#123A2B] text-white hover:bg-[#0F2F23] transition shadow-md">
          Add Customer
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Total Customers</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">1,248</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <FiUsers className="text-[#2563EB] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Active Customers</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">982</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E8F7EE] flex items-center justify-center">
              <FiUserCheck className="text-[#15803D] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Growth This Month</p>

              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">+18%</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#FFF4E5] flex items-center justify-center">
              <FiTrendingUp className="text-[#D97706] text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl p-4 border border-[#E8E2D5] shadow-sm">
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63]" />

          <input
            type="text"
            placeholder="Search customers..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F5EF]">
              <tr className="text-left">
                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Customer
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Email
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Phone
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Orders
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Status
                </th>

                <th className="px-6 py-4 text-sm text-[#6B6B63] font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-t border-[#F1ECE3] hover:bg-[#FCFAF6] transition"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#123A2B]/10 flex items-center justify-center">
                        <FiUser className="text-[#123A2B]" />
                      </div>

                      <div>
                        <div className="font-medium text-[#121212]">
                          {customer.name}
                        </div>

                        <div className="text-sm text-[#6B6B63]">
                          Customer ID #{customer.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-[#4A4A45]">
                    <div className="flex items-center gap-2">
                      <FiMail className="text-[#6B6B63]" />
                      {customer.email}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-[#4A4A45]">
                    <div className="flex items-center gap-2">
                      <FiPhone className="text-[#6B6B63]" />
                      {customer.phone}
                    </div>
                  </td>

                  <td className="px-6 py-5 font-semibold text-[#123A2B]">
                    {customer.orders}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        customer.status === "VIP"
                          ? "bg-[#FFF4E5] text-[#D97706]"
                          : customer.status === "Active"
                            ? "bg-[#E8F7EE] text-[#15803D]"
                            : "bg-[#F3F4F6] text-[#6B7280]"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

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
