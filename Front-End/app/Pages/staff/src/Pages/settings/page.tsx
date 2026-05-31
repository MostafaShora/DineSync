"use client";

import {
  FiUser,
  FiLock,
  FiBell,
  FiGlobe,
  FiMoon,
  FiSave,
  FiSettings,
} from "react-icons/fi";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 m-10">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-serif text-[#123A2B] font-bold">
          Settings
        </h1>

        <p className="text-[#6B6B63] mt-1">
          Manage your admin account and system preferences.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT MENU */}
        <div className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm p-4 space-y-2">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F8F5EF] text-[#123A2B] font-medium">
            <FiUser />
            Profile
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#F8F5EF] text-[#4A4A45] cursor-pointer">
            <FiLock />
            Security
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#F8F5EF] text-[#4A4A45] cursor-pointer">
            <FiBell />
            Notifications
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#F8F5EF] text-[#4A4A45] cursor-pointer">
            <FiGlobe />
            Language
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#F8F5EF] text-[#4A4A45] cursor-pointer">
            <FiMoon />
            Appearance
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E8E2D5] shadow-sm p-6 space-y-6">
          {/* PROFILE FORM */}
          <div>
            <h2 className="text-xl font-serif text-[#123A2B] font-bold mb-4">
              Admin Profile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F5EF] border border-transparent focus:border-[#123A2B] outline-none"
              />
            </div>

            <button className="mt-4 flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#123A2B] text-white hover:bg-[#0F2F23] transition shadow-md">
              <FiSave />
              Save Changes
            </button>
          </div>

          {/* SYSTEM SETTINGS */}
          <div className="border-t border-[#F1ECE3] pt-6">
            <h2 className="text-xl font-serif text-[#123A2B] font-bold mb-4 flex items-center gap-2">
              <FiSettings />
              System Preferences
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#F8F5EF] rounded-xl">
                <div>
                  <p className="font-medium text-[#121212]">
                    Email Notifications
                  </p>

                  <p className="text-sm text-[#6B6B63]">
                    Receive updates about orders and customers
                  </p>
                </div>

                <input type="checkbox" className="accent-[#123A2B] w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F8F5EF] rounded-xl">
                <div>
                  <p className="font-medium text-[#121212]">Dark Mode</p>

                  <p className="text-sm text-[#6B6B63]">
                    Switch between light and dark theme
                  </p>
                </div>

                <input type="checkbox" className="accent-[#123A2B] w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F8F5EF] rounded-xl">
                <div>
                  <p className="font-medium text-[#121212]">Auto Updates</p>

                  <p className="text-sm text-[#6B6B63]">
                    Enable automatic system updates
                  </p>
                </div>

                <input type="checkbox" className="accent-[#123A2B] w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
