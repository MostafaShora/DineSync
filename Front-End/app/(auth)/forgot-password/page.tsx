"use client";

import { useState } from "react";
import { FiMail, FiArrowLeft, FiLoader } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgot = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      setSuccess("Reset link sent! Check your inbox ☕");
    } catch {
      setError("Server error");
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
          {/* Back */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm text-[#4A7C59] mb-5 hover:text-[#3A6348] transition"
          >
            <FiArrowLeft />
            Back to Login
          </button>

          {/* Header */}
          <h2 className="font-serif text-[34px] font-bold text-[#1C1C1A]">
            Reset Password
          </h2>

          <p className="text-[14px] text-[#4A4A45] mb-6 leading-[1.6]">
            Enter your email and we’ll send you a reset link
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-[10px] tracking-[0.2em] text-[#1C1C1A]/80 uppercase">
              EMAIL ADDRESS
            </label>

            <div className="relative mt-2">
              <FiMail className="absolute left-3 top-3 text-[#4A4A45]" />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#E8E2D5] rounded-[14px] p-3 pl-10 outline-none
                focus:bg-white focus:shadow-[0_0_0_4px_rgba(74,124,89,0.12)]
                transition"
              />
            </div>
          </div>

          {/* Error */}
          {error && <div className="text-[#C25A3A] text-sm mb-3">{error}</div>}

          {/* Success */}
          {success && (
            <div className="text-[#4A7C59] text-sm mb-3">{success}</div>
          )}

          {/* Button */}
          <button
            onClick={handleForgot}
            disabled={loading}
            className="w-full bg-[#4A7C59] text-white rounded-[14px] py-4 font-serif font-bold
            flex items-center justify-center gap-2
            hover:bg-[#3A6348] transition
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Reset Link →"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
