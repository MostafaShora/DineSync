"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";

import { FiEdit2, FiTrash2, FiPlus, FiImage } from "react-icons/fi";
import { Product, useGlobal } from "@/Src/context/orderContext";
import Button from "@/Src/Components/ui/Button";
import Modal from "@/Src/Components/ui/Modal";
import Badge from "@/Src/Components/ui/Badge";

const MenuManager: React.FC = () => {
  const { products, setProducts, settings } = useGlobal() as {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    settings: { currency: string };
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [form, setForm] = useState<Product>({
    id: 0,
    name: "",
    category: "قهوة ساخنة",
    price: "",
    image: "",
    stock: "متوفر",
  });
  // حفظ (إضافة / تعديل)
  const handleSave = (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...form, id: editingProduct.id } : p,
        ),
      );
    } else {
      //   setProducts([{ ...form, id: crypto.randomUUID() }, ...products]); // هنا بسبب number
    }

    closeModal();
  };

  // إغلاق + Reset
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setForm({
      id: 0,
      name: "",
      category: "قهوة ساخنة",
      price: "",
      image: "",
      stock: "متوفر",
    });
  };

  // تعديل
  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setForm(product);
    setIsModalOpen(true);
  };

  // حذف
  const deleteProduct = (id: number) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الصنف نهائياً؟")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const inputStyles =
    "w-full p-4 bg-white/50 border border-slate-200 rounded-2xl focus:bg-white focus:border-[#0A3622]/30 focus:shadow-[0_0_0_4px_rgba(10,54,34,0.05)] outline-none font-bold text-slate-800 transition-all duration-300 placeholder:text-slate-400";

  return (
    <div
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
      dir="rtl"
    >
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 rounded-4xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-white/80 gap-4">
        <div>
          <h3 className="text-3xl font-black text-[#0A3622] tracking-tight">
            المنيو الرقمي
          </h3>
          <p className="text-sm text-slate-500 mt-1.5 font-bold">
            التحكم في الأصناف، الأسعار، وحالة المخزون
          </p>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          icon={<FiPlus size={20} />}
          className="w-full sm:w-auto shadow-[0_8px_20px_rgba(10,54,34,0.2)] hover:shadow-[0_12px_25px_rgba(10,54,34,0.3)]"
        >
          إضافة صنف
        </Button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white/60 backdrop-blur-lg rounded-4xl overflow-hidden flex flex-col group relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/80 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5"
          >
            {/* Image */}
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <Image
                src={p.image || "https://via.placeholder.com/400?text=No+Image"}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0A3622]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm z-10">
                <button
                  onClick={() => startEdit(p)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#0A3622] hover:bg-[#f0ebd8] transition-colors shadow-lg active:scale-90"
                >
                  <FiEdit2 size={20} />
                </button>

                <button
                  onClick={() => deleteProduct(p.id)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-rose-500 hover:bg-rose-50 transition-colors shadow-lg active:scale-90"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-[10px] text-slate-400 font-black mb-2 uppercase tracking-widest">
                {p.category}
              </span>

              <h4 className="font-black text-slate-800 text-lg mb-4 leading-tight">
                {p.name}
              </h4>

              <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-100">
                <span className="text-2xl font-serif font-black text-[#0A3622] tracking-tight">
                  {p.price}
                  <span className="text-[11px] font-sans text-slate-400 font-bold ml-1">
                    {settings.currency}
                  </span>
                </span>

                <Badge status={p.stock === "متوفر" ? "Active" : "Inactive"} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingProduct ? "تعديل الصنف" : "إضافة منتج للقائمة"}
      >
        <form onSubmit={handleSave} className="space-y-6">
          {/* Preview */}
          {form.image ? (
            <div className="w-full h-52 bg-slate-100 rounded-4xl overflow-hidden shadow-inner mb-2 relative group">
              <Image
                src={form.image}
                alt="Preview"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/40 text-white text-[11px] px-4 py-1.5 rounded-full font-bold">
                معاينة حية
              </div>
            </div>
          ) : (
            <div className="w-full h-52 bg-slate-50 rounded-4xl border-2 border-slate-200 border-dashed flex flex-col items-center justify-center mb-2 gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FiImage size={24} className="text-slate-300" />
              </div>
              <span className="text-slate-400 text-sm font-bold">
                رابط الصورة سيظهر هنا
              </span>
            </div>
          )}

          {/* Name */}
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputStyles}
            placeholder="مثال: لاتيه كراميل مختص"
          />

          {/* Price */}
          <input
            required
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className={inputStyles}
            dir="ltr"
          />

          {/* Image */}
          <input
            type="text"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className={inputStyles}
            placeholder="https://..."
            dir="ltr"
          />

          <Button
            type="submit"
            className="w-full py-4 text-base tracking-wide shadow-[0_8px_20px_rgba(10,54,34,0.2)]"
          >
            {editingProduct ? "حفظ التعديلات" : "حفظ ونشر المنيو"}
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default MenuManager;
