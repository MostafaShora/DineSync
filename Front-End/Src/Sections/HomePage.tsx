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
      <div className="bg-[#F6F1E8] w-full h-full flex">
        <div className="min-h-screen bg-[#F6F1E8] text-ink font-sans flex justify-center">
          {/* MAIN CONTAINER (80%) */}
          <div className="w-[80%] flex gap-6 p-6 items-start">
            {/* LEFT */}
            <aside className="w-65 shrink-0 sticky top-5">
              <div className="sticky top-6">
                {user ? <SidebarAfter /> : <SidebarBefor />}
              </div>
            </aside>

            {/* CENTER */}
            <main className="flex-1 space-y-6">
              <HeroSection />
              <RecommendedSection />
              <SeasonalSection />
              <BestSellersSection />
              <CinematicCafeSection />
              <LocationSection />
            </main>
            {/* RIGHT */}
            <aside className="w-[320px] shrink-0">
              <div className="sticky top-6 space-y-6">
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
