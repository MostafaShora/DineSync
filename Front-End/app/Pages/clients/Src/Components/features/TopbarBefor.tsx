import { FiUser, FiUserPlus } from "react-icons/fi";

export default function TopbarBefor() {
  return (
    <div className=" mt-1 space-y-6 flex items-center justify-between gap-4">
      {/* RIGHT: ACTIONS */}
      <div className="flex items-center gap-3">
        {/* LOGIN */}
        <a
          href="/login"
          className="h-12 px-5 rounded-2xl bg-card border border-line flex items-center gap-2 text-sm font-medium hover:-translate-y-0.5 hover:bg-white/70 transition"
        >
          <FiUser className="w-4 h-4" />
          Login
        </a>

        {/* REGISTER (PRIMARY CTA) */}
        <a
          href="/register"
          className="h-12 px-5 rounded-2xl bg-linear-to-r from-[#123A2B] to-[#1B5A3E] text-white flex items-center gap-2 text-sm font-medium hover:scale-[1.03] hover:shadow-xl transition"
        >
          <FiUserPlus className="w-4 h-4" />
          Get Started
        </a>
      </div>
    </div>
  );
}
