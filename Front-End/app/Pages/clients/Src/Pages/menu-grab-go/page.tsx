"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import api from "@/app/Pages/admin/src/libs/api";
import { useCart } from "../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
  };
};

type Category = {
  _id: string;
  name: string;
};

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type ProductApi = Omit<Product, "price"> & {
  price: string | number;
};

export default function MenuPage() {
  const { cart, setCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [productsRes, categoriesRes] = await Promise.all([
          api.get("/products"),
          api.get("/categories"),
        ]);

        const cleanedProducts: Product[] = (
          productsRes.data as ProductApi[]
        ).map((p) => ({
          ...p,
          price: Number(p.price),
        }));

        setProducts(cleanedProducts);
        setCategories(categoriesRes.data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =========================
  // ADD TO CART
  // =========================
  const addToCart = (item: Product) => {
    setCart((prev: CartItem[]) => {
      const exists = prev.find((x) => x.id === item._id);

      if (exists) {
        return prev.map((x) =>
          x.id === item._id ? { ...x, qty: x.qty + 1 } : x,
        );
      }

      return [
        ...prev,
        {
          id: item._id,
          name: item.name,
          price: item.price,
          qty: 1,
        },
      ];
    });
  };

  const submitOrder = async () => {
    try {
      const order = {
        items: cart,
        total,
      };

      await api.post("/orders", order);

      setCart([]); 
      alert("Order sent successfully");
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // CART ACTIONS
  // =========================
  const increase = (id: string) => {
    setCart((prev: CartItem[]) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decrease = (id: string) => {
    setCart((prev: CartItem[]) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id: string) => {
    setCart((prev: CartItem[]) => prev.filter((item) => item.id !== id));
  };

  // =========================
  // FILTER PRODUCTS
  // =========================
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categoryId?._id === activeCategory);

  // =========================
  // TOTAL
  // =========================
  const total = (cart || []).reduce(
    (a: number, b: CartItem) => a + b.price * b.qty,
    0,
  );

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F1E8]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F6F1E8] py-16 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_350px] gap-8">
        {/* LEFT SIDE */}
        <div>
          {/* HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif">Menu</h1>
            <p className="text-black/60 mt-2">Fresh coffee & desserts</p>
          </div>

          {/* TABS */}
          <div className="flex gap-3 mb-10 overflow-x-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl ${
                activeCategory === "all"
                  ? "bg-[#123A2B] text-white"
                  : "bg-white"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setActiveCategory(cat._id)}
                className={`px-4 py-2 rounded-xl ${
                  activeCategory === cat._id
                    ? "bg-[#123A2B] text-white"
                    : "bg-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* PRODUCTS */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-serif text-lg">{item.name}</h3>

                  <p className="text-sm text-black/60">{item.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-[#123A2B]">
                      {item.price} EGP
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-[#123A2B] text-white px-4 py-2 rounded-xl"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CART */}
        <div className="bg-white rounded-3xl p-5 h-fit sticky top-6">
          <h2 className="text-2xl font-serif mb-5">Your Order</h2>

          {cart?.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item: CartItem) => (
                  <div key={item.id} className="border-b pb-3">
                    <div className="flex justify-between">
                      <span>{item.name}</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-red-500 text-sm"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">
                        {item.price * item.qty} EGP
                      </span>

                      <div className="flex gap-2 items-center">
                        <button onClick={() => decrease(item.id)}>-</button>

                        <span>{item.qty}</span>

                        <button onClick={() => increase(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t mt-5 pt-5 flex justify-between font-bold">
                <span>Total</span>
                <span>{total} EGP</span>
              </div>

              <button
                onClick={submitOrder}
                className="w-full mt-5 bg-[#123A2B] text-white py-3 rounded-2xl"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
