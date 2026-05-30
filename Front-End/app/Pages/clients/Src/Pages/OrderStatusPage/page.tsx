"use client";

import { motion } from "framer-motion";
import { BsFillLeafFill } from "react-icons/bs";
import { FiClock, FiCheckCircle, FiCoffee } from "react-icons/fi";

const orderItems = [
  {
    id: 1,
    name: "Iced Latte",
    qty: 2,
    price: 120,
  },
  {
    id: 2,
    name: "Cheesecake",
    qty: 1,
    price: 90,
  },
];

export default function OrderStatusPage() {
  const status = "Preparing";

  return (
    <div className="min-h-screen bg-[#fbf9f5] py-10">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/60 border-b border-black/5">
        <div className="flex justify-between items-center px-5 h-16">
          {/* LOGO */}
          <div className="w-10 h-10 relative rounded-xl bg-[#0A3622]/10 grid place-items-center overflow-hidden">
            <div className="absolute inset-0 bg-[#0A3622]/10 blur-md opacity-60" />
            <BsFillLeafFill className="relative w-6 h-6 text-[#0A3622]" />
          </div>

          {/* BRAND */}
          <div className="flex flex-col items-center leading-none">
            <h1 className="font-bold tracking-widest text-[#061b0e] text-lg">
              DINE SYNC
            </h1>
            <span className="text-[10px] text-gray-500 tracking-widest">
              SMART ORDER SYSTEM
            </span>
          </div>

          {/* TABLE */}
          <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full border border-gray-200 backdrop-blur-xl">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-700 font-medium">Table 12</span>
          </div>
        </div>
      </header>

      <div className="text-center mb-10 mt-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 mx-auto rounded-full bg-[#0A3622]/10 flex items-center justify-center mb-5"
        >
          <FiCoffee className="text-[#0A3622] w-10 h-10" />
        </motion.div>

        <h1 className="text-4xl font-bold text-[#061b0e]">Your Order</h1>

        <p className="text-gray-500 mt-2">Table 12 • Tracking Live</p>
      </div>

      {/* STATUS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white/60 backdrop-blur-2xl border border-black/5 rounded-4xl p-6 shadow-xl"
      >
        {/* STATUS */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Current Status</p>

            <h2 className="text-3xl font-bold text-[#061b0e] mt-1">{status}</h2>
          </div>

          <div className="w-14 h-14 rounded-full bg-[#0A3622] text-white flex items-center justify-center">
            <FiClock />
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1 }}
              className="h-full bg-[#0A3622]"
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Received</span>
            <span>Preparing</span>
            <span>Delivered</span>
          </div>
        </div>

        {/* ORDER ITEMS */}
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/70 border border-black/5"
            >
              <div>
                <h3 className="font-semibold text-[#061b0e]">{item.name}</h3>

                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              </div>

              <div className="font-bold text-[#061b0e]">{item.price} EGP</div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-8 flex justify-between items-center border-t pt-5">
          <div>
            <p className="text-sm text-gray-500">Estimated Time</p>

            <h3 className="font-semibold text-[#061b0e]">15 - 20 mins</h3>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Total</p>

            <h3 className="text-2xl font-bold text-[#061b0e]">330 EGP</h3>
          </div>
        </div>
      </motion.div>

      {/* LIVE STATUS */}
      <div className="max-w-2xl mx-auto mt-8">
        <div className="bg-[#0A3622] text-white rounded-2xl p-5 flex items-center gap-4 shadow-xl">
          <FiCheckCircle className="w-6 h-6" />

          <div>
            <h3 className="font-semibold">Kitchen accepted your order</h3>

            <p className="text-sm text-white/70">
              Your food is currently being prepared
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
