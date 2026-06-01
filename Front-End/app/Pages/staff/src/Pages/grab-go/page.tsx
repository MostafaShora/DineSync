"use client";

import api from "@/app/Pages/admin/src/libs/api";
import { socket } from "@/app/Pages/clients/Src/lib/socket";
import { useEffect, useState } from "react";
import { FiCheckCircle, FiClock, FiCoffee, FiPackage } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";

type OrderItem = {
  name: string;
  qty: number;
};

type OrderStatus = "pending" | "preparing" | "ready";

type Order = {
  _id: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: string;
};

export default function GrabAndGoPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  // =========================
  // FETCH ORDERS
  // =========================
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  // =========================
  // SOCKET REALTIME
  // =========================
  useEffect(() => {
    socket.emit("joinKitchen");

    socket.on("newOrder", (order: Order) => {
      setOrders((prev) => [order, ...prev]);
    });

    socket.on("orderUpdated", (updated: Order) => {
      setOrders((prev) =>
        prev.map((o) => (o._id === updated._id ? updated : o)),
      );
    });

    return () => {
      socket.off("newOrder");
      socket.off("orderUpdated");
    };
  }, []);

  // =========================
  // UPDATE STATUS
  // =========================
  const updateStatus = async (id: string, status: OrderStatus) => {
    try {
      await api.patch(`/orders/${id}`, { status });

      // optional UI optimistic update (Socket will also handle it)
      setOrders((prev) =>
        prev.map((order) => (order._id === id ? { ...order, status } : order)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-[#F6F1E8] min-h-screen md:m-8 space-y-6">
      {/* HEADER */}
      <div className="relative">
        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A2B]/10 via-transparent to-[#123A2B]/10 blur-3xl rounded-3xl" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-5 md:p-8 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#123A2B]/10 grid place-items-center shrink-0">
              <FiCoffee className="text-[#123A2B] text-xl md:text-2xl" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123A2B]/10 text-[#123A2B] text-[10px] md:text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#123A2B] animate-pulse" />
                Fast Service Mode
              </div>

              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#123A2B]">
                Grab & Go Orders
              </h1>

              <p className="text-xs md:text-sm text-[#6B6B63] max-w-md">
                Track quick takeaway orders in real-time and optimize service
                speed.
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 sm:flex gap-3 w-full lg:w-auto">
            <div className="flex-1 sm:flex-none px-3 py-2 md:px-4 md:py-2 rounded-2xl bg-white/60 border border-white/40 backdrop-blur-xl">
              <p className="text-[10px] md:text-xs text-[#6B6B63]">Mode</p>
              <p className="text-xs md:text-sm font-semibold text-[#123A2B]">
                Express
              </p>
            </div>

            <div className="flex-1 sm:flex-none px-3 py-2 md:px-4 md:py-2 rounded-2xl bg-white/60 border border-white/40 backdrop-blur-xl">
              <p className="text-[10px] md:text-xs text-[#6B6B63]">Queue</p>
              <p className="text-xs md:text-sm font-semibold text-[#1C1C1A]">
                Live
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="
          bg-white/80
          backdrop-blur-md
          border border-[#eee]
          rounded-2xl
          p-4
          md:p-5
          shadow-sm
          hover:shadow-xl
          transition
          flex flex-col
        "
          >
            {/* HEADER */}
            <div className="flex justify-between items-start gap-2">
              <h2 className="font-semibold text-[#123A2B] flex items-center gap-2 text-sm md:text-base break-all">
                <FiPackage className="shrink-0" />
                {order._id}
              </h2>

              <div
                className={`flex items-center gap-1 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full font-medium whitespace-nowrap
            ${
              order.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : order.status === "preparing"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
            }`}
              >
                {order.status}
              </div>
            </div>

            {/* ITEMS */}
            <div className="mt-3 space-y-1 text-xs md:text-sm text-gray-600">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="truncate">• {item.name}</span>
                  <span className="font-medium">x{item.qty}</span>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              {order.status === "pending" && (
                <button
                  onClick={() => updateStatus(order._id, "preparing")}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm"
                >
                  <FiPackage />
                  Accept
                </button>
              )}

              {order.status === "preparing" && (
                <button
                  onClick={() => updateStatus(order._id, "ready")}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm"
                >
                  <MdDoneAll />
                  Ready
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
