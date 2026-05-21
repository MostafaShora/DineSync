"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiPlus, FiShoppingBag } from "react-icons/fi";
import { BsFillLeafFill } from "react-icons/bs";
import menu from "@/Src/jsonData/menu.json";

type CartItem = {
  id: number;
  qty: number;
};

export default function MenuPage() {
  const [activeCat, setActiveCat] = useState("coffee");
  const [liked, setLiked] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  // LIKE
  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // ADD TO CART
  const addToCart = (id: number) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === id);

      if (exists) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }

      return [...prev, { id, qty: 1 }];
    });
  };

  // TOTALS
  const totalItems = useMemo(
    () => cart.reduce((sum, i) => sum + i.qty, 0),
    [cart],
  );

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, i) => {
      const product = menu.products.find((p) => p.id === i.id);
      return sum + (product?.price || 0) * i.qty;
    }, 0);
  }, [cart]);

  // SEND ORDER
  const handleSendOrder = async () => {
    setLoading(true);

    const order = {
      tableId: 12,
      items: cart,
      totalItems,
      totalPrice,
      createdAt: new Date().toISOString(),
    };

    try {
      console.log("ORDER SENT:", order);

      await new Promise((res) => setTimeout(res, 1000));

      alert("Order sent to kitchen!");

      setCart([]);
    } catch (err) {
      console.error(err);
      alert("Failed to send order");
    } finally {
      setLoading(false);
    }
  };

  // FILTER PRODUCTS
  const filteredProducts = menu.products.filter(
    (item) => item.category === activeCat,
  );

  return (
    <div className="min-h-screen bg-[#fbf9f5] pb-32">
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

      {/* CONTENT */}
      <main className="pt-24 px-5">
        {/* CATEGORIES */}
        <div className="flex gap-3 overflow-x-auto pb-4 px-1 scrollbar-hide">
          {menu.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-all border backdrop-blur-xl
                ${
                  activeCat === cat.id
                    ? "bg-[#061b0e] text-white scale-105 border-transparent"
                    : "bg-white/60 text-gray-700 border-gray-200 hover:scale-105"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((item, i) => {
            const isLiked = liked.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ y: -8 }}
                className="relative h-105 rounded-4xl overflow-hidden shadow-2xl group"
              >
                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-125 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                {/* LIKE */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className={`absolute top-4 right-4 w-11 h-11 rounded-full backdrop-blur-xl flex items-center justify-center transition-all
                    ${
                      isLiked
                        ? "bg-red-500 text-white scale-110"
                        : "bg-white/30 text-white"
                    }`}
                >
                  <FiHeart />
                </button>

                {/* INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 flex justify-between items-end">
                    <div>
                      <h3 className="font-bold text-xl text-white">
                        {item.name}
                      </h3>

                      <p className="text-xs text-white/80 mt-1">
                        {item.description} • ${item.price}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-12 h-12 rounded-full bg-[#0A3622] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* CART */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg">
          <div className="bg-[#061b0e] text-white rounded-full px-5 py-3 flex justify-between items-center shadow-2xl">
            <div className="flex items-center gap-3">
              <FiShoppingBag />
              <span className="text-sm font-semibold">
                {totalItems} ITEMS • ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleSendOrder}
              disabled={loading}
              className="bg-white text-[#0A3622] font-bold px-4 py-2 rounded-full disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send to Kitchen"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
