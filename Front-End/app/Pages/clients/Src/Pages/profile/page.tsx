"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ProfileModal from "@/app/Pages/clients/Src/Components/features/ProfileModal";
import { BsFillLeafFill } from "react-icons/bs";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [error, setError] = useState("");
  const [loadingSave, setLoadingSave] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setLoadingProfile(true);

        const token = localStorage.getItem("token");

        if (!token) {
          setError("Not authenticated");
          return;
        }

        const res = await axios.get("http://localhost:8000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data.user || res.data;

        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoadingProfile(false);
      }
    }

    fetchProfile();
  }, []);
  async function saveProfile() {
    try {
      setLoadingSave(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        setError("Not authenticated");
        return;
      }

      const res = await axios.put(
        "http://localhost:8000/api/user/me",
        {
          name,
          email,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = res.data.user || res.data;

      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);

      alert("Profile updated ✅");
    } catch (err) {
      console.error(err);
      setError("Failed to save profile");
    } finally {
      setLoadingSave(false);
    }
  }

  if (loadingProfile) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8f1de] via-[#f5ecd6] to-[#efe3c2] text-[#062b12]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto h-18 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          {/* BRAND */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* LOGO */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0A3622]/10 flex items-center justify-center overflow-hidden shadow-sm">
              {/* glow */}
              <div className="absolute inset-0 bg-[#0A3622]/10 blur-xl opacity-70" />

              <BsFillLeafFill className="relative w-6 h-6 sm:w-7 sm:h-7 text-[#0A3622]" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col leading-none">
              <h1 className="text-[#061b0e] font-black tracking-[0.25em] text-sm sm:text-lg md:text-xl">
                DINE SYNC
              </h1>

              <span className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mt-1">
                SMART ORDER SYSTEM
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8 mt-16">
        {/* HERO GLASS CARD */}
        <section className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/20 backdrop-blur-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* AVATAR */}
            <div className="w-44 h-44 rounded-3xl bg-[#062b12] flex items-center justify-center shadow-2xl">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                width={110}
                height={110}
                alt="profile"
              />
            </div>

            {/* INFO */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <p className="text-xs tracking-[0.3em] text-[#8c6e4f] uppercase">
                Curator Identity
              </p>

              <h2 className="text-5xl font-[Cormorant_Garamond] font-bold">
                {name}
              </h2>

              <p className="text-sm text-black/60">{email}</p>

              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <button
                  onClick={() => setOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#062b12] text-white shadow hover:opacity-90 transition"
                >
                  Edit Profile
                </button>

                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                  className="px-6 py-3 rounded-xl bg-white/60 border hover:bg-white/80 transition"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* MINI STATS */}
            <div className="grid gap-3">
              <div className="bg-white/40 backdrop-blur p-4 rounded-2xl border border-white/50 text-center">
                <p className="text-xs text-gray-600">Artifacts</p>
                <p className="text-2xl font-bold">128</p>
              </div>

              <div className="bg-white/40 backdrop-blur p-4 rounded-2xl border border-white/50 text-center">
                <p className="text-xs text-gray-600">Collections</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHT CARDS */}
        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
            <p className="text-xs uppercase text-gray-500">Profile Strength</p>
            <p className="text-3xl font-bold mt-2">92%</p>
            <div className="h-2 bg-white/50 rounded-full mt-4 overflow-hidden">
              <div className="w-[92%] h-full bg-[#062b12] rounded-full"></div>
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
            <p className="text-xs uppercase text-gray-500">Activity Level</p>
            <p className="text-3xl font-bold mt-2">High</p>
            <p className="text-sm text-gray-600 mt-2">
              Consistent curator engagement
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
            <p className="text-xs uppercase text-gray-500">Member Since</p>
            <p className="text-3xl font-bold mt-2">2024</p>
            <p className="text-sm text-gray-600 mt-2">Trusted contributor</p>
          </div>
        </section>

        {/* INFO + BIO */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* PERSONAL INFO */}
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-7 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-[Cormorant_Garamond] font-bold mb-5">
              Personal Information
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase">Legal Name</p>
                <p className="font-medium text-lg">{name}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase">Email</p>
                <p>{email}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase">Phone</p>
                <p>{phone}</p>
              </div>
            </div>
          </div>

          {/* BIO */}
          <div className="bg-[#062b12] text-white p-7 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-[Cormorant_Garamond] font-bold mb-4">
              Curator Note
            </h3>

            <p className="text-sm leading-relaxed text-white/80">
              Dedicated to preserving cultural artifacts and documenting
              artistic heritage through structured curation and refined archival
              systems.
            </p>

            <div className="mt-6 text-xs text-white/50">
              “Every object has a story worth preserving.”
            </div>
          </div>
        </section>

        {/* ACTIVITY FEED */}
        {/* MINI DASHBOARD */}
        <section className="space-y-6">
          {/* STATS ROW */}
          <div className="grid md:grid-cols-4 gap-5">
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
              <p className="text-xs uppercase text-gray-500">Total Orders</p>
              <p className="text-3xl font-bold mt-2">24</p>
              <p className="text-xs text-gray-500 mt-1">+3 this week</p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
              <p className="text-xs uppercase text-gray-500">Pending</p>
              <p className="text-3xl font-bold mt-2 text-yellow-700">5</p>
              <p className="text-xs text-gray-500 mt-1">Needs attention</p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
              <p className="text-xs uppercase text-gray-500">Completed</p>
              <p className="text-3xl font-bold mt-2 text-green-700">18</p>
              <p className="text-xs text-gray-500 mt-1">All good</p>
            </div>

            <div className="bg-[#062b12] text-white p-6 rounded-2xl shadow-lg">
              <p className="text-xs uppercase text-white/60">Status</p>
              <p className="text-2xl font-bold mt-2">Active</p>
              <p className="text-xs text-white/60 mt-1">Account healthy</p>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-7 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-[Cormorant_Garamond] font-bold mb-5">
              Quick Actions
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <button className="p-4 rounded-xl bg-white hover:bg-white/70 border transition text-left">
                <p className="font-medium">Create New Order</p>
                <p className="text-xs text-gray-500">
                  Add a new request instantly
                </p>
              </button>

              <button className="p-4 rounded-xl bg-white hover:bg-white/70 border transition text-left">
                <p className="font-medium">View Reports</p>
                <p className="text-xs text-gray-500">Analyze performance</p>
              </button>

              <button className="p-4 rounded-xl bg-white hover:bg-white/70 border transition text-left">
                <p className="font-medium">Manage Profile</p>
                <p className="text-xs text-gray-500">Edit your information</p>
              </button>
            </div>
          </div>
        </section>
      </main>
      <ProfileModal
        open={open}
        onClose={() => setOpen(false)}
        name={name}
        email={email}
        phone={phone}
        onSave={saveProfile}
      />
    </div>
  );
}
