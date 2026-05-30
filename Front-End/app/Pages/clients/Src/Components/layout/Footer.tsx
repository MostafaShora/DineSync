import React from "react";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#123A2B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-2xl tracking-tight">Dine Sync</h2>

              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                CAFÉ
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-65">
              Crafted coffee experience made with passion, served with purpose.
            </p>

            {/* mini info */}
            <div className="space-y-2 text-white/60 text-sm mt-4">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-white/80" />
                Cairo, Egypt
              </div>

              <div className="flex items-center gap-2">
                <FiPhone className="text-white/80" />
                +20 100 000 0000
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              Quick Links <FiArrowRight className="text-white/60" />
            </h3>

            <ul className="space-y-2 text-white/70 text-sm">
              {["Menu", "Order Online", "Rewards", "Locations"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              Support <FiArrowRight className="text-white/60" />
            </h3>

            <ul className="space-y-2 text-white/70 text-sm">
              {["Contact Us", "FAQ", "Privacy Policy", "Terms"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>

            <div className="flex items-center gap-2 text-white/70 text-sm">
              <FiMail className="text-white/80" />
              support@dinesync.com
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center hover:bg-white/20 cursor-pointer transition">
                <FiInstagram />
              </div>

              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center hover:bg-white/20 cursor-pointer transition">
                <FiFacebook />
              </div>

              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center hover:bg-white/20 cursor-pointer transition">
                <FiTwitter />
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Dine Sync. All rights reserved.
          </p>

          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <span>☕</span> for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
