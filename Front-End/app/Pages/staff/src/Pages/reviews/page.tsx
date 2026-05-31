"use client";

import {
  FiStar,
  FiSearch,
  FiMessageCircle,
  FiThumbsUp,
  FiEye,
} from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Ahmed Ali",
    rating: 5,
    comment: "Amazing coffee quality and fast service. Loved it!",
    product: "Caramel Latte",
    date: "23 May 2026",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    rating: 4,
    comment: "Great taste but delivery was a bit slow.",
    product: "Mocha Ice Coffee",
    date: "22 May 2026",
  },
  {
    id: 3,
    name: "Omar Hassan",
    rating: 5,
    comment: "Best café experience I’ve had so far!",
    product: "Cappuccino",
    date: "21 May 2026",
  },
  {
    id: 4,
    name: "Mariam Adel",
    rating: 3,
    comment: "Good but needs more variety in desserts.",
    product: "Chocolate Croissant",
    date: "20 May 2026",
  },
];

export default function AdminReviewsPage() {
  return (
    <div className="space-y-6 m-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-[#123A2B] font-bold">
            Customer Reviews
          </h1>

          <p className="text-[#6B6B63] mt-1">
            Monitor feedback and customer satisfaction.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[#123A2B] text-white hover:bg-[#0F2F23] transition shadow-md">
          Export Reviews
        </button>
      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl p-4 border border-[#E8E2D5] shadow-sm">
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63]" />

          <input
            type="text"
            placeholder="Search reviews..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
          />
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <p className="text-[#6B6B63] text-sm">Average Rating</p>

          <div className="flex items-center gap-2 mt-2">
            <FiStar className="text-[#D97706]" />
            <h2 className="text-3xl font-bold text-[#123A2B]">4.6</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <p className="text-[#6B6B63] text-sm">Total Reviews</p>

          <div className="flex items-center gap-2 mt-2">
            <FiMessageCircle className="text-[#2563EB]" />
            <h2 className="text-3xl font-bold text-[#123A2B]">1,248</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-sm">
          <p className="text-[#6B6B63] text-sm">Positive Feedback</p>

          <div className="flex items-center gap-2 mt-2">
            <FiThumbsUp className="text-[#15803D]" />
            <h2 className="text-3xl font-bold text-[#123A2B]">92%</h2>
          </div>
        </div>
      </div>

      {/* REVIEWS LIST */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-[#E8E2D5] rounded-2xl p-5 shadow-sm hover:bg-[#FCFAF6] transition"
          >
            {/* HEADER */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-[#121212]">{review.name}</h3>

                <p className="text-sm text-[#6B6B63]">
                  {review.product} • {review.date}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[#D97706]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FiStar key={i} />
                ))}
              </div>
            </div>

            {/* COMMENT */}
            <p className="text-[#4A4A45] mt-3">{review.comment}</p>

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
