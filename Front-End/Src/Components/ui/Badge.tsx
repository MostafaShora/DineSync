'use client';

import React from 'react';

/* =========================
   Types
========================= */

export type BadgeStatus =
  | 'Pending'
  | 'Preparing'
  | 'Ready'
  | 'Delivered'
  | 'Available'
  | 'Occupied'
  | 'Reserved'
  | 'Active'
  | 'Inactive';

interface BadgeProps {
  status: BadgeStatus | string;
}

/* =========================
   Component
========================= */

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const styles: Record<string, string> = {
    Pending:
      'bg-amber-500/15 text-amber-700 border-amber-500/20 shadow-[0_2px_10px_rgba(245,158,11,0.1)]',
    Preparing:
      'bg-indigo-500/15 text-indigo-700 border-indigo-500/20 shadow-[0_2px_10px_rgba(99,102,241,0.1)]',
    Ready:
      'bg-emerald-500/15 text-emerald-700 border-emerald-500/20 shadow-[0_2px_10px_rgba(16,185,129,0.1)]',
    Delivered:
      'bg-slate-500/15 text-slate-700 border-slate-500/20 shadow-[0_2px_10px_rgba(100,116,139,0.1)]',
    Available:
      'bg-teal-500/15 text-teal-700 border-teal-500/20 shadow-[0_2px_10px_rgba(20,184,166,0.1)]',
    Occupied:
      'bg-rose-500/15 text-rose-700 border-rose-500/20 shadow-[0_2px_10px_rgba(244,63,94,0.1)]',
    Reserved:
      'bg-purple-500/15 text-purple-700 border-purple-500/20 shadow-[0_2px_10px_rgba(168,85,247,0.1)]',
    Active:
      'bg-emerald-500/15 text-emerald-700 border-emerald-500/20 shadow-[0_2px_10px_rgba(16,185,129,0.1)]',
    Inactive:
      'bg-slate-400/15 text-slate-600 border-slate-400/20 shadow-[0_2px_10px_rgba(148,163,184,0.1)]',
  };

  const labels: Record<string, string> = {
    Pending: 'Pending',
    Preparing: 'Preparing',
    Ready: 'Ready',
    Delivered: 'Delivered',
    Available: 'Available',
    Occupied: 'Occupied',
    Reserved: 'Reserved',
    Active: 'Active',
    Inactive: 'Inactive',
  };

  const currentStyle = styles[status] || styles.Inactive;
  const currentLabel = labels[status] || status;

  return (
    <span
      className={`
        inline-flex items-center justify-center px-3.5 py-1.5 
        rounded-full text-[11px] font-bold tracking-wide
        border backdrop-blur-md
        transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer
        ${currentStyle}
      `}
    >
      {currentLabel}
    </span>
  );
};

export default Badge;