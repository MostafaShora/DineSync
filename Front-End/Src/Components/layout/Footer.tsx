import React from "react";
import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#123A2B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <h2 className="font-serif text-2xl">Q BITE</h2>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Crafted coffee experience made with passion, served with purpose.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="hover:text-white cursor-pointer">Menu</li>
              <li className="hover:text-white cursor-pointer">Order Online</li>
              <li className="hover:text-white cursor-pointer">Rewards</li>
              <li className="hover:text-white cursor-pointer">Locations</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-3">Stay Connected</h3>

            <div className="flex items-center gap-3 text-white/70 text-sm">
              <FiMail />
              support@qbite.com
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center hover:bg-white/20 cursor-pointer">
                <FiInstagram />
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center hover:bg-white/20 cursor-pointer">
                <FiFacebook />
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center hover:bg-white/20 cursor-pointer">
                <FiTwitter />
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Q BITE. All rights reserved.
          </p>

          <p className="text-white/50 text-xs">
            Made with ☕ for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
