"use client";

import { useState } from "react";

import AdminSidebar from "../components/features/Sidebar";

import AdminDashboardPage from "../Pages/dashboard/page";
import AdminProductsPage from "../Pages/products/page";
import AdminOrdersPage from "../Pages/orders/page";
import AdminCustomersPage from "../Pages/customers/page";
import AdminAnalyticsPage from "../Pages/analytics/page";
import AdminReviewsPage from "../Pages/reviews/page";
import AdminOffersPage from "../Pages/offers/page";
import AdminSettingsPage from "../Pages/settings/page";

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
            {page === "dashboard" && <AdminDashboardPage />}

            {page === "products" && <AdminProductsPage />}

            {page === "orders" && <AdminOrdersPage />}

            {page === "customers" && <AdminCustomersPage />}

            {page === "analytics" && <AdminAnalyticsPage />}

            {page === "reviews" && <AdminReviewsPage />}

            {page === "offers" && <AdminOffersPage />}

            {page === "settings" && <AdminSettingsPage />}
          </main>
        </div>
      </div>
    </div>
  );
}
