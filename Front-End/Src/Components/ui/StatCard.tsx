"use client";

import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

// ================= TYPES =================
type StatCardProps = {
  title: string;
  value: string | number;
  percentage?: string | number;
  isPositive?: boolean;
  icon: React.ReactNode;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentage,
  isPositive = true,
  icon,
}) => {
  return (
    <div
      className="
    relative p-7 flex flex-col justify-between
    rounded-3xl overflow-hidden

    bg-[#e6f3ea]/80
    backdrop-blur-2xl

    border border-[#0A3622]/10

    shadow-[0_10px_40px_rgba(10,54,34,0.08)]
    hover:shadow-[0_25px_80px_rgba(10,54,34,0.18)]

    transition-all duration-500
    group
  "
    >
      {/* Glow background */}
      <div className="absolute -right-6 -top-6 w-28 h-28 bg-[#0A3622]/10 rounded-full blur-3xl group-hover:scale-125 transition-all duration-500" />

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div
          className="
        w-14 h-14 flex items-center justify-center
        rounded-2xl
        bg-white/40 backdrop-blur
        border border-[#0A3622]/10
        text-[#0A3622]

        group-hover:rotate-3 group-hover:scale-110
        transition-all duration-500
      "
        >
          {icon}
        </div>

        {percentage !== undefined && (
          <div
            className={`
          flex items-center gap-1 px-3 py-1.5 rounded-xl
          text-[10px] font-black tracking-tighter
          ${
            isPositive
              ? "bg-emerald-500/15 text-emerald-700"
              : "bg-rose-500/15 text-rose-700"
          }
        `}
          >
            {isPositive ? (
              <FiArrowUpRight size={14} />
            ) : (
              <FiArrowDownRight size={14} />
            )}
            {percentage}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-right">
        <p className="text-[#0A3622]/50 text-[11px] font-black uppercase tracking-[0.15em] mb-2">
          {title}
        </p>

        <h3 className="text-3xl font-black text-[#0A3622] tracking-tighter">
          {value}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
