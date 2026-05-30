"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";

type Item = {
  id: number;
  name: string;
  price: number;
};

const ITEMS: Item[] = [
  { id: 1, name: "شاورما", price: 55 },
  { id: 2, name: "برجر", price: 80 },
  { id: 3, name: "بيتزا", price: 120 },
  { id: 4, name: "كابتشينو", price: 45 },
];

export default function MenuPage() {
  const searchParams = useSearchParams();
  const tableId = searchParams.get("table");

  const [cart, setCart] = useState<Record<number, number>>({}); // id -> qty

  const add = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const remove = (id: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (!newCart[id]) return prev;

      newCart[id] -= 1;
      if (newCart[id] <= 0) delete newCart[id];

      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = ITEMS.find((i) => i.id === Number(id));
    return sum + (item?.price || 0) * qty;
  }, 0);
  const [loading, setLoading] = useState(false);

  const handleSendOrder = async () => {
    setLoading(true);

    const order = {
      tableId,
      items: cart,
      totalItems,
      totalPrice,
      createdAt: new Date().toISOString(),
    };

    try {
      // حاليا fake API (بعدها نربطه بباك اند)
      console.log("ORDER SENT:", order);

      await new Promise((res) => setTimeout(res, 1000));

      alert("Order sent to kitchen successfully!");
      setCart({});
    } catch (err) {
      console.error(err);
      alert("Failed to send order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#eef6f1] px-5 py-10 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#d0e9d4]/50 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#b4cdb8]/40 blur-3xl rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-4xl font-black text-[#061b0e]">Menu</h1>

        <p className="text-sm text-[#434843] mt-2">Table {tableId}</p>
      </div>

      {/* ITEMS */}
      <div className="relative z-10 max-w-lg mx-auto space-y-4">
        {ITEMS.map((item, index) => {
          const qty = cart[item.id] || 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-[28px] border backdrop-blur-xl px-5 py-4 flex justify-between items-center transition-all
                ${
                  qty > 0
                    ? "bg-white/60 border-emerald-300 shadow-lg"
                    : "bg-white/40 border-white/40"
                }`}
            >
              {/* INFO */}
              <div>
                <h2 className="text-lg font-semibold text-[#061b0e]">
                  {item.name}
                </h2>
                <p className="text-sm text-[#434843]">{item.price} EGP</p>

                {qty > 0 && (
                  <p className="text-xs text-emerald-600 mt-1 font-semibold">
                    Selected × {qty}
                  </p>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => remove(item.id)}
                  className="w-9 h-9 rounded-full bg-white/60 border flex items-center justify-center"
                >
                  <FiMinus />
                </button>

                <span className="font-bold text-[#061b0e] w-5 text-center">
                  {qty}
                </span>

                <button
                  onClick={() => add(item.id)}
                  className="w-9 h-9 rounded-full bg-[#0A3622] text-white flex items-center justify-center"
                >
                  <FiPlus />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* CART FLOAT */}
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg"
        >
          <div className="bg-[#0A3622] text-white rounded-full px-4 py-3 flex items-center justify-between shadow-2xl gap-3">
            {/* LEFT INFO */}
            <div className="flex items-center gap-3">
              <FiShoppingCart />
              <span className="font-semibold">{totalItems} Items</span>
            </div>

            {/* PRICE */}
            <div className="font-bold">{totalPrice} EGP</div>

            {/* BUTTON */}
            <button
              onClick={handleSendOrder}
              disabled={loading}
              className="bg-white text-[#0A3622] font-bold px-4 py-2 rounded-full hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send to Kitchen"}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
