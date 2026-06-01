"use client";

import SeasonalSpecialList from "../Components/features/SeasonalSpecialList";
import SidebarAfter from "../Components/features/SidebarAfter";
import SidebarBefor from "../Components/features/SidebarBefor";
import TopbarBefor from "../Components/features/TopbarBefor";
import TopbarUser from "../Components/features/TopbarUser";
import { useAuth } from "../context/AuthContext";
import AboutSection from "./aboutSection";
import HeroSection from "./HeroSection";
import LocationSection from "./LocationSection";
import FeaturedMenu from "./FeaturedMenu";
import SpecialOffers from "./SpecialOffers";
import Gallery from "./The-Café-Experience-Wall";
import WhyChooseUs from "./WhyChooseUs";

export default function HomePage() {
  const { user } = useAuth();
  return (
    <>
      {/* 1. ضفنا مساحة فاضية من تحت في الموبايل (pb-24) عشان شريط الأدوات ميغطيش على المحتوى */}
      <div className="bg-[#F6F1E8] w-full min-h-screen pb-24 lg:pb-0">
        <div className="min-h-screen text-ink font-sans flex justify-center">
          
          {/* MAIN CONTAINER */}
          <div className="w-full xl:w-[80%] flex flex-col lg:flex-row gap-6 p-4 md:p-6 items-start relative">
            
            {/* LEFT SIDEBAR (شريط سفلي في الموبايل، وسايد بار جانبي ثابت في الكمبيوتر) */}
            <aside className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.05)] 
                              lg:shadow-none lg:bg-transparent lg:relative lg:w-64 lg:shrink-0 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
              {user ? <SidebarAfter /> : <SidebarBefor />}
            </aside>

            {/* CENTER CONTENT (ضفنا min-w-0 عشان نمنع تداخل وتمدد العناصر بره الشاشة) */}
            <main className="flex-1 w-full min-w-0 space-y-6">
              <HeroSection />
              <AboutSection />
              <FeaturedMenu />
              <SpecialOffers />
              <WhyChooseUs />
              <Gallery />
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