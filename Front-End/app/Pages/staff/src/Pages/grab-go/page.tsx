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
    <div className="p-6 md:p-6 bg-[#F6F1E8] min-h-screen m-8">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-6">
        <FiCoffee className="text-[#123A2B] text-2xl" />
        <h1 className="text-2xl md:text-3xl font-bold text-[#123A2B]">
          Grab & Go Orders
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white/80 backdrop-blur-md border border-[#eee] rounded-2xl p-4 shadow-sm hover:shadow-xl transition"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[#123A2B] flex items-center gap-2">
                <FiPackage />
                {order._id}
              </h2>

              <div
                className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium
                ${
                  order.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "preparing"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                }`}
              >
                {order.status === "pending" && <FiClock />}
                {order.status === "preparing" && <FiPackage />}
                {order.status === "ready" && <FiCheckCircle />}
                {order.status}
              </div>
            </div>

            {/* ITEMS */}
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>• {item.name}</span>
                  <span className="font-medium">x{item.qty}</span>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex gap-2">
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
