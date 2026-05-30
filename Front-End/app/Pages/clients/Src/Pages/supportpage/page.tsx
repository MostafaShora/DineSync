"use client";

import { BsFillLeafFill } from "react-icons/bs";
import { useState } from "react";
import { FiClock, FiMail, FiPhone, FiZap } from "react-icons/fi";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    try {
      setLoading(true);

      // هنا تبعت للـ API بتاعك
      console.log({ email, message });

      alert("Message sent successfully 🍃");
      setMessage("");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8f1de] via-[#f5ecd6] to-[#efe3c2] text-[#062b12]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto h-18 px-4 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-2xl bg-[#0A3622]/10 flex items-center justify-center">
              <BsFillLeafFill className="w-6 h-6 text-[#0A3622]" />
            </div>

            <div className="flex flex-col leading-none">
              <h1 className="font-black tracking-[0.25em] text-sm">
                DINE SYNC
              </h1>
              <span className="text-[10px] tracking-[0.35em] text-gray-500">
                SUPPORT CENTER
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-8">
        {/* HERO */}
        <section className="bg-white/20 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 shadow-xl">
          <h2 className="text-4xl font-[Cormorant_Garamond] font-bold">
            How can we help you?
          </h2>

          <p className="text-sm text-black/60 mt-2">
            Our support team is here to assist you with orders, account issues,
            or any questions.
          </p>
        </section>

        {/* CONTACT BOX */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* FORM */}
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg space-y-4">
            <h3 className="text-2xl font-bold font-[Cormorant_Garamond]">
              Send Message
            </h3>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border bg-white/60 outline-none focus:ring-2 focus:ring-[#062b12]"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue..."
              rows={5}
              className="w-full p-3 rounded-xl border bg-white/60 outline-none focus:ring-2 focus:ring-[#062b12]"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#062b12] text-white hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* INFO */}
          <div className="space-y-4">
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <FiPhone className="w-5 h-5 text-[#062b12]" />
                <h4 className="font-bold">Phone Support</h4>
              </div>
              <p className="text-sm text-gray-600 mt-2">+20 100 000 0000</p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <FiMail className="w-5 h-5 text-[#062b12]" />
                <h4 className="font-bold">Email</h4>
              </div>
              <p className="text-sm text-gray-600 mt-2">support@dinesync.com</p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-[#062b12]" />
                <h4 className="font-bold">Working Hours</h4>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Daily 9:00 AM – 11:00 PM
              </p>
            </div>

            <div className="bg-[#062b12] text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <FiZap className="w-5 h-5 text-white" />
                <h4 className="font-bold">Fast Response</h4>
              </div>
              <p className="text-sm text-white/70 mt-2">
                We usually reply within 30 minutes during working hours.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
