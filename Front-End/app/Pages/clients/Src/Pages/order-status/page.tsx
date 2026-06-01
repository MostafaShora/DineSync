"use client";

import { useEffect, useState } from "react";
import api from "@/app/Pages/admin/src/libs/api";
import { motion } from "framer-motion";
import { BsFillLeafFill } from "react-icons/bs";
import { FiClock, FiCheckCircle, FiCoffee } from "react-icons/fi";
import { useParams } from "next/navigation";
import { socket } from "../../lib/socket";

type OrderItem = {
  name: string;
  qty: number;
  price: number;
};

type OrderStatus = "pending" | "preparing" | "ready";

type Order = {
  _id: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
};

export default function OrderStatusPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const orderId = params?.id as string;

  // Fetch order
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await api.get(`/orders/${orderId}`);
        setOrder(res.data);
      } catch (err) {
        console.log(err);
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  // Realtime updates
  useEffect(() => {
    const handler = (updated: Order) => {
      if (updated._id === orderId) {
        setOrder(updated);
      }
    };

    socket.on("orderUpdated", handler);

    return () => {
      socket.off("orderUpdated", handler);
    };
  }, [orderId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbf9f5] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#061b0e]">Loading Order...</h1>
      </div>
    );
  }

  // No order found state
  if (!order) {
    return (
      <div className="min-h-screen bg-[#fbf9f5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#061b0e]">No Order Found</h1>

          <p className="text-gray-500 mt-3">
            The requested order could not be found.
          </p>
        </div>
      </div>
    );
  }

  const status = order.status;

  const getProgress = () => {
    switch (status) {
      case "pending":
        return "20%";
      case "preparing":
        return "65%";
      case "ready":
        return "100%";
      default:
        return "0%";
    }
  };

  const total = order.total;

  return (
    <div className="min-h-screen bg-[#fbf9f5] py-10">
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
                Your Order
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* TITLE */}
      <div className="text-center mb-10 mt-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 mx-auto rounded-full bg-[#0A3622]/10 flex items-center justify-center mb-5"
        >
          <FiCoffee className="text-[#0A3622] w-10 h-10" />
        </motion.div>

        <h1 className="text-4xl font-bold text-[#061b0e]">Your Order</h1>
        <p className="text-gray-500 mt-2">Live tracking system</p>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white/60 backdrop-blur-2xl border rounded-3xl p-6 shadow-xl"
      >
        {/* STATUS */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-500">Current Status</p>
            <h2 className="text-3xl font-bold text-[#061b0e] capitalize">
              {status}
            </h2>
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
              animate={{ width: getProgress() }}
              transition={{ duration: 0.6 }}
              className="h-full bg-[#0A3622]"
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Received</span>
            <span>Preparing</span>
            <span>Delivered</span>
          </div>
        </div>

        {/* ITEMS */}
        <div className="space-y-4">
          {order?.items?.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between p-4 rounded-2xl bg-white/70 border"
            >
              <div>
                <h3 className="font-semibold text-[#061b0e]">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              </div>

              <div className="font-bold text-[#061b0e]">
                {item.price * item.qty} EGP
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-8 flex justify-between border-t pt-5">
          <div>
            <p className="text-sm text-gray-500">Estimated Time</p>
            <h3 className="font-semibold">15 - 20 mins</h3>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Total</p>
            <h3 className="text-2xl font-bold">{total} EGP</h3>
          </div>
        </div>
      </motion.div>

      {/* LIVE STATUS */}
      <div className="max-w-2xl mx-auto mt-6">
        <div className="bg-[#0A3622] text-white rounded-2xl p-5 flex items-center gap-4">
          <FiCheckCircle />
          <div>
            <h3 className="font-semibold">Order is being processed</h3>
            <p className="text-sm text-white/70">
              We will update you in real time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
