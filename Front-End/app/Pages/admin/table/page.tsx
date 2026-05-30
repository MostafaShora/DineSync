"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { FiArrowRight, FiCoffee, FiStar, FiWifi } from "react-icons/fi";

const TablePage = () => {
  const router = useRouter();
  const params = useParams();

  const tableId = params.id;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef6f1] flex items-center justify-center px-5">
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-50 -left-37.5 w-100 h-100 rounded-full bg-[#d0e9d4]/50 blur-3xl" />
      <div className="absolute -bottom-50 -right-37.5 w-100 h-100 rounded-full bg-[#b4cdb8]/40 blur-3xl" />

      {/* GRID */}
      <div className=" absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(27,48,34,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,48,34,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* CONTENT */}
      <main className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className=" w-full rounded-[40px] border border-white/40 bg-white/40 backdrop-blur-2xl shadow-[0_4px_24px_-1px_rgba(6,27,14,0.05),0_0_40px_-10px_rgba(6,27,14,0.08)] px-7 py-10 md:px-12"
        >
          {/* WELCOME */}
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className=" block text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#434843] mb-6"
          >
            Welcome to Dine Sync
          </motion.span>

          {/* TABLE INFO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <h1 className="text-5xl md:text-7xl leading-none font-black text-[#061b0e]">
              Table {tableId}
            </h1>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c3c8c1]/40 bg-white/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-xs font-semibold text-[#434843]">
                Online
              </span>
            </div>
          </motion.div>

          {/* ICON */}
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 140,
            }}
            className=" mx-auto mb-8 w-20 h-20 rounded-full bg-[#d0e9d4]/40 flex items-center justify-center"
          >
            <FiCoffee size={38} className="text-[#1b3022]" />
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
            }}
            className="text-center text-3xl md:text-4xl leading-tight text-[#061b0e] font-semibold mb-10"
          >
            Smart Cafe Ordering
          </motion.h2>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              y: -4,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => router.push(`/menu?table=${tableId}`)}
            className="w-full bg-[#0A3622] hover:bg-[#1b3022] text-white rounded-full py-4 px-8 flex items-center justify-between transition-all duration-300 shadow-lg"
          >
            <span className="text-lg font-semibold ml-2">Start Order</span>

            <FiArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.button>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
          className="
        flex
        flex-wrap
        justify-center
        gap-4

        mt-8
      "
        >
          {/* CARD */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
          rounded-2xl

          border
          border-white/40

          bg-white/40

          backdrop-blur-xl

          px-5
          py-3
          flex
          items-center
          gap-3

          shadow-sm
        "
          >
            <FiWifi size={18} className="text-[#1b3022]" />

            <span
              className="
            text-sm
            font-medium

            text-[#1b1c1a]
          "
            >
              Fast Service
            </span>
          </motion.div>

          {/* CARD */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2,
            }}
            className="
          rounded-2xl

          border
          border-white/40

          bg-white/40

          backdrop-blur-xl

          px-5
          py-3

          flex
          items-center
          gap-3

          shadow-sm
        "
          >
            <FiStar size={18} className="text-[#1b3022]" />

            <span
              className="
            text-sm
            font-medium

            text-[#1b1c1a]
          "
            >
              Fresh Menu
            </span>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default TablePage;
