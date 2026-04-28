"use client";

import { useState } from "react";

type ProfileModalProps = {
  open: boolean;
  onClose: () => void;
  name: string;
  email: string;
  phone: string;
  onSave: (name: string, email: string, phone: string) => void;
  loading?: boolean;
};

export default function ProfileModal({
  open,
  onClose,
  name,
  email,
  phone,
  onSave,
}: ProfileModalProps) {
  const [n, setN] = useState(name);
  const [e, setE] = useState(email);
  const [p, setP] = useState(phone);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-md mx-4 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-2xl shadow-2xl p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-[Cormorant_Garamond] font-bold text-[#062b12]">
            Edit Profile
          </h3>

          <button
            onClick={onClose}
            className="text-[#062b12] hover:scale-110 transition text-xl"
          >
            ✕
          </button>
        </div>

        {/* INPUTS */}
        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-xl bg-white/70 border border-white/50 outline-none focus:ring-2 focus:ring-[#062b12] transition"
            value={n}
            onChange={(e) => setN(e.target.value)}
            placeholder="Full Name"
          />

          <input
            className="w-full p-3 rounded-xl bg-white/70 border border-white/50 outline-none focus:ring-2 focus:ring-[#062b12] transition"
            value={e}
            onChange={(e) => setE(e.target.value)}
            placeholder="Email"
          />

          <input
            className="w-full p-3 rounded-xl bg-white/70 border border-white/50 outline-none focus:ring-2 focus:ring-[#062b12] transition"
            value={p}
            onChange={(e) => setP(e.target.value)}
            placeholder="Phone"
          />
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-white/60 border hover:bg-white/80 transition"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(n, e, p);
              onClose();
            }}
            className="flex-1 py-3 rounded-xl bg-[#062b12] text-white shadow-lg hover:opacity-90 transition"
          >
            Save Changes
          </button>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-xs text-center text-black/50 mt-4">
          Your profile updates are saved instantly
        </p>
      </div>
    </div>
  );
}
