"use client";

import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

// ================= TYPES =================
type OrderStatus = "Pending" | "Preparing" | "Ready" | "Delivered";

export type Order = {
  id: string;
  customer: string;
  table: string;
  items: string[];
  total: number;
  status: OrderStatus;
  createdAt: number;
};

export type User = {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive";
};

export type TableType = {
  id: number;
  number: string;
  capacity: number;
  status: "Available" | "Occupied" | "Reserved";
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  stock: string;
};

export type Notification = {
  id: number;
  message: string;
  type: "info" | "success" | "error";
};

export type Settings = {
  taxRate: number;
  currency: string;
  storeName: string;
};

// ================= CONTEXT TYPE =================
export type OrderContextType = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;

  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;

  tables: TableType[];
  setTables: React.Dispatch<React.SetStateAction<TableType[]>>;
  addTable: (table: Omit<TableType, "id">) => void;
  deleteTable: (id: number) => void;
  updateTable: (id: number, data: Partial<TableType>) => void;

  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;

  notifications: Notification[];
  addNotification: (message: string, type?: Notification["type"]) => void;

  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

// ================= CONTEXT =================
const OrderContext = createContext<OrderContextType | null>(null);

// ================= PROVIDER =================
export const OrderProvider = ({ children }: { children: ReactNode }) => {
  // 1. Settings
  const [settings, setSettings] = useState<Settings>({
    taxRate: 15,
    currency: "ج.م",
    storeName: "Q-BITE COFFEE",
  });

  const [today] = useState<number>(() => Date.now());

  // 2. Orders
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "#A729",
      customer: "أحمد علي",
      table: "طاولة 5",
      items: ["2x لاتيه حليب شوفان"],
      total: 125,
      status: "Pending",
      createdAt: today - 12 * 60000,
    },
    {
      id: "#A730",
      customer: "سارة محمود",
      table: "سفري",
      items: ["3x أمريكانو"],
      total: 180,
      status: "Preparing",
      createdAt: today - 5 * 60000,
    },
    {
      id: "#A731",
      customer: "كريم طارق",
      table: "طاولة 2",
      items: ["1x فلات وايت"],
      total: 75,
      status: "Ready",
      createdAt: today - 2 * 60000,
    },
    {
      id: "#A720",
      customer: "ياسين محمد",
      table: "سفري",
      items: ["1x كابتشينو"],
      total: 50,
      status: "Delivered",
      createdAt: today - 120 * 60000,
    },
  ]);

  // 3. Users
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "أحمد طارق",
      role: "مدير النظام",
      email: "admin@qbite.com",
      status: "Active",
    },
    {
      id: 2,
      name: "ليلى حسن",
      role: "باريستا",
      email: "layla@qbite.com",
      status: "Active",
    },
  ]);

  // 4. Tables
  const [tables, setTables] = useState<TableType[]>([
    { id: 1, number: "1", capacity: 2, status: "Available" },
    { id: 2, number: "2", capacity: 4, status: "Occupied" },
    { id: 3, number: "3", capacity: 4, status: "Available" },
    { id: 4, number: "4", capacity: 6, status: "Reserved" },
  ]);

  // 5. Products
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "لاتيه حليب شوفان مختص",
      image: "",
      category: "قهوة ساخنة",
      price: "75",
      stock: "متوفر",
    },
    {
      id: 2,
      name: "كرواسون زبدة فرنسي",
      image: "",
      category: "مخبوزات",
      price: "55",
      stock: "متوفر",
    },
  ]);

  // 6. Notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (message: string, type: Notification["type"] = "info") => {
      const id = Date.now();
      setNotifications((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 4000);
    },
    [],
  );

  // Update order status
  const updateOrderStatus = useCallback(
    (orderId: string, newStatus: OrderStatus) => {
      setOrders((prev) => {
        const order = prev.find((o) => o.id === orderId);

        if (order && newStatus === "Ready") {
          addNotification(
            `الطلب ${orderId} جاهز للتسليم على ${order.table} 🔔`,
            "success",
          );
        }

        return prev.map((o) =>
          o.id === orderId ? { ...o, status: newStatus } : o,
        );
      });
    },
    [addNotification],
  );

  // Tables management
  const addTable = useCallback(
    (table: Omit<TableType, "id">) =>
      setTables((prev) => [...prev, { ...table, id: Date.now() }]),
    [],
  );

  const deleteTable = useCallback(
    (id: number) => setTables((prev) => prev.filter((t) => t.id !== id)),
    [],
  );

  const updateTable = useCallback(
    (id: number, data: Partial<TableType>) =>
      setTables((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...data } : t)),
      ),
    [],
  );

  // Context Value
  const contextValue = useMemo<OrderContextType>(
    () => ({
      orders,
      setOrders,
      updateOrderStatus,

      users,
      setUsers,

      tables,
      setTables,
      addTable,
      deleteTable,
      updateTable,

      products,
      setProducts,

      notifications,
      addNotification,

      settings,
      setSettings,
    }),
    [
      orders,
      users,
      tables,
      products,
      notifications,
      settings,
      updateOrderStatus,
      addTable,
      deleteTable,
      updateTable,
      addNotification,
    ],
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

// ================= HOOK =================
export const useGlobal = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context)
    throw new Error("useGlobal must be used within an OrderProvider");
  return context;
};
