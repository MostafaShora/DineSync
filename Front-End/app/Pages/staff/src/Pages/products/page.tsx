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
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0E8] via-[#FAF7F2] to-[#F5F0E8] p-4 md:p-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1A] tracking-tight">
            Products
          </h1>

          <p className="text-[#6B6B63] mt-2 text-sm md:text-base flex items-center gap-2">
            Manage your menu with elegance
            <FiStar className="text-yellow-500" />
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A2B]/10 via-transparent to-[#123A2B]/10 blur-2xl rounded-3xl" />

        <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-5 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* NAME */}
            <div className="relative">
              <FiBox className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63]" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product name"
                className="w-full pl-11 py-3 rounded-2xl bg-white/70 border outline-none focus:ring-2 ring-[#123A2B]"
              />
            </div>

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/70 border outline-none focus:ring-2 ring-[#123A2B]"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* PRICE */}
            <div className="relative">
              <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B63]" />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                className="w-full pl-11 py-3 rounded-2xl bg-white/70 border outline-none focus:ring-2 ring-[#123A2B]"
              />
            </div>

            {/* IMAGE */}
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="px-4 py-3 rounded-2xl bg-white/70 border outline-none focus:ring-2 ring-[#123A2B]"
            />
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAddProduct}
              disabled={adding}
              className="group relative overflow-hidden bg-[#123A2B] text-white px-6 py-3 rounded-2xl shadow-lg transition hover:scale-[1.02] disabled:opacity-60"
            >
              <FiPlus className="inline mr-2" />
              {adding ? "Adding..." : "Add Product"}
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative mb-8">
        <FiSearch className="absolute left-4 top-3 text-[#6B6B63]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full p-3 pl-12 rounded-2xl bg-white/70 border outline-none focus:ring-2 ring-[#123A2B]"
        />
      </div>

      {/* GRID */}
      {loading ? (
        <div className="text-center text-gray-500 py-20 flex flex-col items-center gap-3">
          <FiLoader className="animate-spin" size={24} />
          <p>Loading products...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-gray-400 py-20 flex flex-col items-center gap-3">
          <FiInbox size={32} />
          <p>No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p._id}
              className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition hover:-translate-y-1"
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

                <p className="text-sm text-gray-500 mt-1">
                  {p.categoryId?.name}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold text-[#123A2B]">${p.price}</p>

                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-[#123A2B] text-white rounded-xl text-sm">
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p._id)}
                      className="w-9 h-9 grid place-items-center bg-red-100 text-red-500 rounded-xl"
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
