"use client";

import { useEffect, useState } from "react";
import { FiMapPin, FiNavigation, FiClock } from "react-icons/fi";

type Branch = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  open: string;
};

const branches: Branch[] = [
  {
    name: "Dine Sync Downtown",
    address: "Tahrir Square, Cairo",
    lat: 30.0444,
    lng: 31.2357,
    open: "9 AM - 11 PM",
  },
  {
    name: "Dine Sync Zamalek",
    address: "Zamalek, Cairo",
    lat: 30.0626,
    lng: 31.2197,
    open: "9 AM - 12 AM",
  },
  {
    name: "Dine Sync Garden City",
    address: "Garden City, Cairo",
    lat: 30.032,
    lng: 31.231,
    open: "9 AM - 11 PM",
  },
];

// 🧮 Haversine formula (real distance)
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function NearbyPage() {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
      },
    );
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8f1de] via-[#f5ecd6] to-[#efe3c2] text-[#062b12]">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto h-18 flex items-center justify-center gap-2">
          <FiMapPin className="w-4 h-4 text-[#062b12]" />

          <h1 className="font-black tracking-[0.25em] text-sm">NEARBY CAFES</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16 space-y-8">
        {/* HERO */}
        <section className="bg-white/20 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 shadow-xl">
          <h2 className="text-4xl font-[Cormorant_Garamond] font-bold">
            Cafes Near You
          </h2>
          <p className="text-sm text-black/60 mt-2">
            We detect your location and show the closest branches.
          </p>
        </section>

        {/* LIST */}
        <section className="grid md:grid-cols-2 gap-5">
          {branches
            .map((b) => {
              const distance = userLocation
                ? getDistance(
                    userLocation.lat,
                    userLocation.lng,
                    b.lat,
                    b.lng,
                  ).toFixed(1)
                : null;

              return { ...b, distance };
            })
            .sort(
              (a, b) => Number(a.distance ?? 999) - Number(b.distance ?? 999),
            )
            .map((b, i) => (
              <div
                key={i}
                className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg space-y-4"
              >
                {/* TITLE */}
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-5 h-5 text-[#062b12]" />
                  <h3 className="font-bold text-lg">{b.name}</h3>
                </div>

                <p className="text-sm text-gray-600">{b.address}</p>

                {/* INFO */}
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FiNavigation className="w-4 h-4" />
                    <span>
                      {b.distance ? `${b.distance} km` : "Locating..."}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    <span>{b.open}</span>
                  </div>
                </div>

                {/* ACTION */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`}
                  target="_blank"
                  className="block text-center w-full py-3 rounded-xl bg-[#062b12] text-white hover:opacity-90 transition"
                >
                  Get Directions
                </a>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}
