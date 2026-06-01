"use client";

import { useAuth } from "@/app/Pages/clients/Src/context/AuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaCoffee, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLoader,
  FiLock,
  FiMail,
} from "react-icons/fi";

import { HiSparkles } from "react-icons/hi";
import { MdRestaurant } from "react-icons/md";

export default function LoginPage() {
  const { login } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // =========================
  // VALIDATE EMAIL
  // =========================
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // =========================
  // LOGIN
  // =========================
  const handleLogin = async () => {
    setError("");

    // EMAIL VALIDATION
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    // PASSWORD VALIDATION
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      // API REQUEST
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      const data = res.data;

      const user = data.user || data;

      const token = data.token;

      // SAVE USER
      login(user);

      // SAVE TOKEN
      localStorage.setItem("token", token);

      // OPTIONAL
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login success:", data);

      // =========================
      // ROLE BASED REDIRECT
      // =========================
      if (user.role === "admin") {
        router.push("/Pages/admin/src/libs");
      } else if (user.role === "staff") {
        router.push("/Pages/staff/src/libs");
      } else {
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Login failed");
      } else {
        setError("Unexpected error");
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8] px-6 py-12 relative overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(74,124,89,0.10)_0%,transparent_65%)] -top-62.5 -right-62.5 blur-2xl" />

      <div className="flex flex-col items-center w-full max-w-115">
        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-[28px] p-10 w-full shadow-[0_20px_60px_rgba(26,46,30,0.14)] border border-[#E8E2D5]">
          {/* Header */}
          <div className="mb-10 text-center">
            {/* Brand */}
            <div className="mb-4">
              <h1 className="font-serif text-[42px] font-bold text-[#1C1C1A] tracking-tight flex items-center justify-center gap-2">
                <FaCoffee className="text-[#4A7C59]" />
                DineSync
              </h1>

              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="h-px w-6 bg-[#E8E2D5]" />

                <span className="text-[10px] tracking-[0.3em] text-[#9A9A90] flex items-center gap-2">
                  <MdRestaurant className="text-[#9A9A90]" size={12} />
                  CAFÉ EXPERIENCE
                  <HiSparkles className="text-[#9A9A90]" size={12} />
                </span>

                <div className="h-px w-6 bg-[#E8E2D5]" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[14px] text-[#4A4A45] leading-[1.8] max-w-[320px] mx-auto">
              Welcome back. Sign in to sync your dining experience, preferences,
              and orders seamlessly.
            </p>
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="block text-[10px] tracking-[0.2em] mb-2 text-[#1C1C1A]/80">
              EMAIL ADDRESS
            </label>

            <div className="relative group">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] text-[#4A4A45]" />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="manager@roastrelish.com"
                className="w-full bg-[#E8E2D5] rounded-2xl py-3.5 px-4 pl-11 text-sm outline-none border border-transparent
                focus:border-[#4A7C59] focus:bg-white focus:shadow-[0_0_0_4px_rgba(74,124,89,0.10)]
                transition-all duration-200"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-5">
            <label className="block text-[10px] tracking-[0.2em] mb-2 text-[#1C1C1A]/80">
              PASSWORD
            </label>

            <div className="relative group">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] text-[#4A4A45]" />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                className="w-full bg-[#E8E2D5] rounded-2xl py-3.5 px-4 pl-11 pr-11 text-sm outline-none border border-transparent
                focus:border-[#4A7C59] focus:bg-white focus:shadow-[0_0_0_4px_rgba(74,124,89,0.10)]
                transition-all duration-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9A90] hover:text-[#4A7C59] transition transform hover:scale-105"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center gap-2 text-sm text-[#4A4A45]">
              <input type="checkbox" className="accent-[#4A7C59]" />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => router.push("/forgot-password")}
              className="text-[12px] text-[#4A7C59] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="text-[#C25A3A] text-sm mb-4 bg-[#F8E9E3] px-3 py-2 rounded-[10px]">
              {error}
            </div>
          )}

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#4A7C59] text-white rounded-2xl py-3.5 text-[16px] font-serif font-bold
            flex items-center justify-center gap-2
            hover:bg-[#3A6348] active:scale-[0.99]
            transition-all duration-200 mb-5 shadow-[0_10px_25px_rgba(74,124,89,0.25)]
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <FiLoader className="animate-spin" />
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Log In <FiArrowRight />
              </span>
            )}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-linear-to-r from-transparent to-[#E8E2D5]" />

            <span className="text-[10px] text-[#9A9A90] bg-white px-3 rounded-full border border-[#E8E2D5]">
              OR
            </span>

            <div className="flex-1 h-px bg-linear-to-l from-transparent to-[#E8E2D5]" />
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex gap-3">
            <button
              className="flex-1 border border-[#E8E2D5] bg-white rounded-2xl py-3 text-sm 
              hover:bg-[#F5F0E8] transition flex items-center justify-center gap-2
              active:scale-[0.98]"
            >
              <FcGoogle size={18} />
              Google
            </button>

            <button
              className="flex-1 border border-[#E8E2D5] bg-white rounded-2xl py-3 text-sm 
              hover:bg-[#F5F0E8] transition flex items-center justify-center gap-2
              active:scale-[0.98]"
            >
              <FaFacebook size={18} className="text-[#1877F2]" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
