"use client";

import { useState } from "react";

import AdminSidebar from "../components/features/Sidebar";
import GrabAndGoPage from "../Pages/grab-go/page";

export default function HomeAdmin() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="bg-[#F6F1E8] w-full min-h-screen">
      <div className="min-h-screen bg-[#F6F1E8] flex justify-center">
        <div className="w-full xl:w-[80%] flex gap-6 p-6 items-start">
          {/* SIDEBAR */}
          <aside className="w-64 shrink-0 sticky top-6 h-screen">
            <AdminSidebar setPage={setPage} page={page} />
          </aside>

          {/* CONTENT */}
          <main className="flex-1">
            {page === "grab&go" && <GrabAndGoPage />}
          </main>
        </div>
      </div>
    </div>
  );
}
