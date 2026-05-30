import Image from "next/image";

const images = [
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
    title: "Morning Calm",
  },
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop",
    title: "Signature Coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop",
    title: "Cozy Corners",
  },
  {
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1600&auto=format&fit=crop",
    title: "Sweet Moments",
  },
  {
    url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1600&auto=format&fit=crop",
    title: "Fresh Bakery",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 rounded-3xl font-sans">
        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[#123A2B] uppercase tracking-[0.25em] text-xs sm:text-sm">
            Our World
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
            A Visual Taste of Our Café
          </h2>

          <p className="mt-4 text-sm sm:text-base text-black/50 max-w-2xl mx-auto">
            Every corner tells a story — from the aroma of freshly brewed coffee
            to the warmth of our cozy space.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
          <div className="relative h-65 sm:h-95 md:h-120 lg:h-130 rounded-3xl overflow-hidden group">
            <Image
              src={images[0].url}
              alt="image"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif">
                {images[0].title}
              </h3>
            </div>
          </div>
        </div>

        {/* MOSAIC GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Tall Image */}
          <div className="md:row-span-2 relative h-65 sm:h-87.5 md:h-full rounded-3xl overflow-hidden group">
            <Image
              src={images?.[1]?.url || "/placeholder.jpg"}
              alt="image"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
              <h3 className="text-lg sm:text-xl font-serif">
                {images?.[1]?.title}
              </h3>
            </div>
          </div>

          {/* Small Cards */}
          {images.slice(2).map((img, i) => (
            <div
              key={i}
              className="relative h-45 sm:h-50 md:h-55 rounded-3xl overflow-hidden group"
            >
              <Image
                src={img?.url || "/placeholder.jpg"}
                alt="image"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="text-sm sm:text-base md:text-lg font-serif">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-[#123A2B] text-white hover:brightness-110 transition text-sm sm:text-base">
            Visit & Experience It Yourself
          </button>
        </div>
      </div>
    </section>
  );
}
