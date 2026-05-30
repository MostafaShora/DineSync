"use client";

import SeasonalSpecialList from "../Components/features/SeasonalSpecialList";
import SidebarAfter from "../Components/features/SidebarAfter";
import SidebarBefor from "../Components/features/SidebarBefor";
import TopbarBefor from "../Components/features/TopbarBefor";
import TopbarUser from "../Components/features/TopbarUser";
import { useAuth } from "../context/AuthContext";
import BestSellersSection from "./BestSellersSection";
import CinematicCafeSection from "./CafeExperienceSection";
import HeroSection from "./HeroSection";
import LocationSection from "./LocationSection";
import RecommendedSection from "./RecommendedSection";
import SeasonalSection from "./SeasonalSection";

export default function HomePage() {
  const { user } = useAuth();
  return (
    <>
      <div className="bg-[#F6F1E8] w-full min-h-screen">
        <div className="min-h-screen bg-[#F6F1E8] text-ink font-sans flex justify-center">
          {/* MAIN CONTAINER */}
          <div className="w-full xl:w-[80%] flex flex-col lg:flex-row gap-6 p-4 md:p-6 items-start">
            {/* LEFT SIDEBAR */}
            <aside className="w-64 shrink-0 sticky top-6 h-screen">
              {user ? <SidebarAfter /> : <SidebarBefor />}
            </aside>

            {/* CENTER CONTENT */}
            <main className="flex-1 w-full space-y-6">
              <HeroSection />
              <RecommendedSection />
              <SeasonalSection />
              <BestSellersSection />
              <CinematicCafeSection />
              <LocationSection />
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="lg:sticky lg:top-6 space-y-6">
                {user ? <TopbarUser /> : <TopbarBefor />}
                <SeasonalSpecialList />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
