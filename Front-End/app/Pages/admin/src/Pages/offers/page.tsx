"use client";

import {
  FiTag,
  FiPercent,
  FiCalendar,
  FiGift,
  FiEye,
  FiPlus,
} from "react-icons/fi";

const offers = [
  {
    id: 1,
    title: "20% Off Coffee Drinks",
    description: "All hot and iced coffee drinks are discounted.",
    discount: "20%",
    status: "Active",
    expires: "30 May 2026",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "On selected desserts and pastries.",
    discount: "BOGO",
    status: "Active",
    expires: "28 May 2026",
  },
  {
    id: 3,
    title: "10% Weekend Discount",
    description: "Valid on all menu items every weekend.",
    discount: "10%",
    status: "Scheduled",
    expires: "01 Jun 2026",
  },
  {
    id: 4,
    title: "Free Delivery Offer",
    description: "Free delivery for orders above $30.",
    discount: "FREE",
    status: "Expired",
    expires: "15 May 2026",
  },
];

export default function AdminOffersPage() {
  return (
    <div className="space-y-6 m-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-[#123A2B] font-bold">
            Offers & Promotions
          </h1>

          <p className="text-[#6B6B63] mt-1">
            Create and manage discounts and special deals.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#123A2B] text-white hover:bg-[#0F2F23] transition shadow-md">
          <FiPlus />
          New Offer
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Active Offers</p>
              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">12</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E8F7EE] flex items-center justify-center">
              <FiTag className="text-[#15803D] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Total Discounts Given</p>
              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">$8,420</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#FFF4E5] flex items-center justify-center">
              <FiPercent className="text-[#D97706] text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6B6B63] text-sm">Upcoming Offers</p>
              <h2 className="text-3xl font-bold text-[#123A2B] mt-1">4</h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <FiCalendar className="text-[#2563EB] text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* OFFERS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-[#E8E2D5] rounded-2xl p-5 shadow-sm hover:bg-[#FCFAF6] transition"
          >
            {/* HEADER */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-[#121212]">{offer.title}</h3>

                <p className="text-sm text-[#6B6B63] mt-1">
                  {offer.description}
                </p>
              </div>

              <div className="text-2xl font-bold text-[#123A2B]">
                {offer.discount}
              </div>
            </div>

            {/* STATUS */}
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                ${
                  offer.status === "Active"
                    ? "bg-[#E8F7EE] text-[#15803D]"
                    : offer.status === "Scheduled"
                      ? "bg-[#EEF4FF] text-[#2563EB]"
                      : "bg-[#F3F4F6] text-[#6B7280]"
                }`}
              >
                {offer.status}
              </span>

              <div className="flex items-center gap-2 text-sm text-[#6B6B63]">
                <FiGift />
                Expires: {offer.expires}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3 mt-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E8E2D5] hover:bg-[#F8F5EF] transition">
                <FiEye />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
