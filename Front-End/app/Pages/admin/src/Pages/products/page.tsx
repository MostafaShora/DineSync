"use client";

import { useEffect, useState } from "react";
import api from "../../libs/api";
import {
  FiPlus,
  FiTrash2,
  FiSearch,
  FiDollarSign,
  FiBox,
  FiInbox,
  FiLoader,
  FiStar,
  FiImage,
  FiTag,
  FiChevronDown,
} from "react-icons/fi";

type Product = {
  _id: string;
  name: string;
  categoryId: {
    _id: string;
    name: string;
  };
  price: number;
  image: string;
};

type Category = {
  _id: string;
  name: string;
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [search, setSearch] = useState("");
  const [adding, setAdding] = useState(false);

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

        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =========================
  // ADD PRODUCT
  // =========================
  const handleAddProduct = async () => {
    try {
      setAdding(true);

      if (!name || !category || !price || !image) {
        alert("Fill all fields");
        return;
      }

      const { data } = await api.post("/products", {
        name,
        categoryId: category,
        price: Number(price),
        image,
      });

      setProducts((prev) => [data, ...prev]);

      setName("");
      setCategory("");
      setPrice("");
      setImage("");
    } catch (err) {
      console.error(err);
    } finally {
      setAdding(false);
    }
  };

  // =========================
  // DELETE PRODUCT
  // =========================
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // FILTER
  // =========================
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F1E9] via-[#FBF8F3] to-[#F3EDE4] p-4 md:p-8">
      {/* HEADER */}
      <div className="relative mb-14">
        {/* glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A2B]/10 via-transparent to-[#123A2B]/10 blur-3xl rounded-3xl" />

        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl">
          {/* LEFT CONTENT */}
          <div className="space-y-3">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123A2B]/10 text-[#123A2B] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#123A2B] animate-pulse" />
              Admin Dashboard
            </div>

            {/* title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1A] tracking-tight">
              Products
            </h1>

            {/* subtitle */}
            <p className="text-[#6B6B63] text-sm md:text-base flex items-center gap-2">
              Manage your menu with elegance
              <FiStar className="text-yellow-500" />
            </p>
          </div>

          {/* RIGHT DECOR (optional stats style feel) */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white/60 border border-white/40 backdrop-blur-xl shadow-sm">
              <p className="text-xs text-[#6B6B63]">Status</p>
              <p className="text-sm font-semibold text-[#123A2B] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Active
              </p>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-white/60 border border-white/40 backdrop-blur-xl shadow-sm">
              <p className="text-xs text-[#6B6B63]">Mode</p>
              <p className="text-sm font-semibold text-[#1C1C1A]">Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A2B]/10 via-transparent to-[#123A2B]/10 blur-3xl rounded-3xl" />

        <div className="relative bg-white/40 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* NAME */}
            <div className="relative group">
              <FiBox className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63] group-focus-within:text-[#123A2B] transition" />

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product name"
                className="w-full pl-11 py-3 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-xl outline-none focus:ring-2 ring-[#123A2B] transition shadow-sm"
              />
            </div>

            {/* CATEGORY */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#123A2B]">
                <FiTag />
              </div>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                w-full
                pl-11 pr-10
                py-3
                rounded-2xl
                bg-white/60
                border border-white/60
                shadow-sm
                backdrop-blur-xl
                appearance-none
                outline-none
                cursor-pointer
                focus:ring-2 ring-[#123A2B]
                transition
                hover:shadow-md
              "
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>

              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#123A2B] pointer-events-none transition" />
            </div>

            {/* PRICE */}
            <div className="relative group">
              <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63] group-focus-within:text-[#123A2B] transition" />

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                className="w-full pl-11 py-3 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-xl outline-none focus:ring-2 ring-[#123A2B] transition"
              />
            </div>

            {/* IMAGE */}
            <div className="relative group">
              <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63] group-focus-within:text-[#123A2B] transition" />

              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                className="w-full pl-11 py-3 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-xl outline-none focus:ring-2 ring-[#123A2B] transition"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-7 flex justify-end">
            <button
              onClick={handleAddProduct}
              disabled={adding}
              className="
              relative
              overflow-hidden
              bg-gradient-to-r from-[#123A2B] to-[#1D5B43]
              text-white
              px-7 py-3
              rounded-2xl
              shadow-lg
              transition-all
              hover:scale-[1.03]
              hover:shadow-2xl
              disabled:opacity-60
            "
            >
              <span className="flex items-center gap-2">
                <FiPlus className="w-4 h-4" />
                {adding ? "Adding..." : "Add Product"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative mb-10">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63]" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full p-3 pl-12 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-xl outline-none focus:ring-2 ring-[#123A2B] transition"
        />
      </div>

      {/* GRID STATES */}
      {loading ? (
        <div className="text-center text-gray-500 py-24 flex flex-col items-center gap-3">
          <FiLoader className="animate-spin text-[#123A2B]" size={26} />
          <p>Loading products...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-gray-400 py-24 flex flex-col items-center gap-3">
          <FiInbox size={34} />
          <p>No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((p) => (
            <div
              key={p._id}
              className="
              group
              bg-white/50
              backdrop-blur-xl
              border border-white/40
              rounded-3xl
              overflow-hidden
              shadow-md
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-2
            "
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-[#1C1C1A]">{p.name}</h2>

                <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                  <FiTag className="text-[#123A2B]" />
                  {p.categoryId?.name}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <p className="font-bold text-[#123A2B] flex items-center gap-1">
                    <FiDollarSign className="w-4 h-4" />
                    {p.price}
                  </p>

                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-[#123A2B] text-white rounded-xl text-sm hover:scale-105 transition">
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p._id)}
                      className="
                      w-9 h-9
                      grid place-items-center
                      bg-red-100
                      text-red-500
                      rounded-xl
                      hover:bg-red-500 hover:text-white
                      transition
                    "
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
