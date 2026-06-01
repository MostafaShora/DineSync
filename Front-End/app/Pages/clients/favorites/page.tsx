// "use client";

// import { useMemo, useState } from "react";

// import { FiHeart, FiPlus } from "react-icons/fi";
// import { BsFillLeafFill } from "react-icons/bs";
// import menu from "@/jsonData/menu.json";
// import Image from "next/image";

// type MenuItem = (typeof menu.products)[number];
// export default function FavoritesPage() {
//   const [favorites, setFavorites] = useState<number[]>([1, 2]); // demo

//   const favoriteItems = useMemo(() => {
//     return menu.products.filter((p) => favorites.includes(p.id));
//   }, [favorites]);

//   const removeFavorite = (id: number) => {
//     setFavorites((prev) => prev.filter((x) => x !== id));
//   };
//   const addToOrder = (item: MenuItem) => {
//     const existing = JSON.parse(localStorage.getItem("order") || "[]");

//     const updated = [...existing, item];

//     localStorage.setItem("order", JSON.stringify(updated));

//     alert("Added to order 🍽️");
//   };
//   return (
//     <div className="min-h-screen bg-[#fbf9f5] py-20">
//       {/* HEADER */}
//       <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/60 border-b border-black/5">
//         <div className="flex justify-between items-center px-5 h-16">
//           {/* LOGO */}
//           <div className="w-10 h-10 relative rounded-xl bg-[#0A3622]/10 grid place-items-center overflow-hidden">
//             <div className="absolute inset-0 bg-[#0A3622]/10 blur-md opacity-60" />
//             <BsFillLeafFill className="relative w-6 h-6 text-[#0A3622]" />
//           </div>

//           {/* BRAND */}
//           <div className="flex flex-col items-center leading-none">
//             <h1 className="font-bold tracking-widest text-[#061b0e] text-lg">
//               DINE SYNC
//             </h1>
//             <span className="text-[10px] text-gray-500 tracking-widest">
//               SMART ORDER SYSTEM
//             </span>
//           </div>
//           {/* TABLE */}
//           <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full border border-gray-200 backdrop-blur-xl">
//             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//             <span className="text-xs text-gray-700 font-medium">Table 12</span>
//           </div>
//         </div>
//       </header>
//       <div className="text-center mb-14 mt-10">
//         <h1 className="text-5xl font-bold tracking-widest text-[#061b0e]">
//           YOUR FAVORITES
//         </h1>
//         <p className="text-sm text-gray-500 mt-2">Saved dishes you love ❤️</p>
//       </div>

//       {/* EMPTY STATE */}
//       {favoriteItems.length === 0 ? (
//         <div className="text-center mt-24">
//           <div className="text-6xl mb-4">💔</div>
//           <h2 className="text-xl font-semibold text-[#061b0e]">
//             No favorites yet
//           </h2>
//           <p className="text-gray-500 text-sm mt-2">
//             Start adding items from the menu
//           </p>
//         </div>
//       ) : (
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {favoriteItems.map((item) => (
//             <div
//               key={item.id}
//               className="relative group rounded-3xl overflow-hidden shadow-2xl"
//             >
//               {/* IMAGE */}

//               <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-cover group-hover:scale-110 transition duration-700"
//                 />
//               </div>

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

//               {/* CONTENT */}
//               <div className="absolute bottom-0 left-0 right-0 p-5">
//                 <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 flex justify-between items-end">
//                   {/* TEXT */}
//                   <div>
//                     <h3 className="text-xl font-bold text-white">
//                       {item.name}
//                     </h3>

//                     <p className="text-sm text-white/80 mt-1">
//                       {item.description}
//                     </p>

//                     <p className="text-white font-semibold mt-2">
//                       {item.price} EGP
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     {/* ADD TO ORDER */}
//                     <button
//                       onClick={() => addToOrder(item)}
//                       className="w-11 h-11 rounded-full bg-[#0A3622] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition"
//                     >
//                       <FiPlus />
//                     </button>

//                     {/* REMOVE FAVORITE */}
//                     <button
//                       onClick={() => removeFavorite(item.id)}
//                       className="w-11 h-11 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition"
//                     >
//                       <FiHeart className="fill-white" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
