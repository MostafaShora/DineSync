"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { FiArrowRight, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      console.log("User created:", data);
    } catch (error: unknown) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8] px-5 py-10 relative overflow-hidden">
      {/* glow */}
      <div className="absolute w-150 h-150 rounded-full bg-[radial-gradient(circle,rgba(74,124,89,0.08)_0%,transparent_70%)] -top-50 -right-50" />

      <div className="w-full max-w-110 z-10">
        {/* Card */}
        <div className="bg-white rounded-3xl p-10 shadow-[0_8px_40px_rgba(26,46,30,0.12)]">
          {/* Brand */}
          <div className="text-center mb-2">
            <h1 className="font-serif text-[28px] font-bold text-[#1A2E1E] flex items-center justify-center gap-2">
              <FaCoffee className="text-[#4A7C59]" />
              DineSync
            </h1>

            <p className="text-[10px] tracking-[0.3em] text-[#9A9A90] mt-1">
              CAFÉ EXPERIENCE
            </p>
          </div>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-[36px] font-bold text-[#1C1C1A] tracking-tight">
              Create your account
            </h2>

            <p className="text-[14px] text-[#4A4A45] leading-[1.7] mt-2 max-w-[320px] mx-auto">
              Join DineSync to sync your dining experience, preferences, and
              orders seamlessly
            </p>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="text-[10px] tracking-[0.18em]">FULL NAME</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 bg-[#E8E2D5] rounded-[14px] p-3 outline-none"
              placeholder="john wick"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-[10px] tracking-[0.18em]">EMAIL</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 bg-[#E8E2D5] rounded-[14px] p-3 outline-none"
              placeholder="john-wick@dinesync.com"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="text-[10px] tracking-[0.18em]">PHONE</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 bg-[#E8E2D5] rounded-[14px] p-3 outline-none"
              placeholder="+20 555 000 0000"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="text-[10px] tracking-[0.2em] text-[#1C1C1A]/80 uppercase">
              PASSWORD
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#E8E2D5] rounded-[14px] p-3 pr-10 outline-none"
                placeholder="********"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-[#9A9A90] hover:text-[#4A7C59] transition transform hover:scale-105"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <div className="text-[#C25A3A] text-sm mb-4">{error}</div>}

          {/* Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-[#4A7C59] text-white rounded-[14px] py-4 font-serif font-bold
  flex items-center justify-center gap-2
  hover:bg-[#3A6348] transition
  disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <FiLoader className="animate-spin" />
                Creating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Create Account <FiArrowRight />
              </span>
            )}
          </button>

          {/* Footer */}
          <p className="text-sm mt-5 text-center text-[#4A4A45]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="font-bold text-[#1C1C1A] hover:text-[#4A7C59] transition underline-offset-4 hover:underline"
            >
              Log in
            </button>
          </p>

          <p className="text-[10px] mt-4 text-[#9A9A90] leading-5 text-center max-w-[320px] mx-auto">
            By creating an account, you agree to our{" "}
            <a className="text-[#4A7C59] hover:underline cursor-pointer">
              Terms
            </a>{" "}
            &{" "}
            <a className="text-[#4A7C59] hover:underline cursor-pointer">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
