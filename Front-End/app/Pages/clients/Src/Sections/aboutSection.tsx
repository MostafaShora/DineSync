import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mt-16 sm:mt-24 px-4">
      <div className="bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 rounded-3xl font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* TEXT SIDE */}
          <div className="order-2 lg:order-1">
            <span className="text-[#123A2B] uppercase tracking-[0.2em] text-xs sm:text-sm font-medium">
              About Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              Crafted Moments,
              <br />
              One Cup at a Time
            </h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-black/60 leading-7 sm:leading-8">
              We believe coffee is more than a drink. It’s a daily ritual, a
              quiet escape, and a reason for people to connect. Every cup is
              carefully prepared using premium beans and served in a space
              designed to inspire comfort and conversation.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#123A2B]">
                  10+
                </h3>
                <p className="text-xs sm:text-sm text-black/50">Years</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#123A2B]">
                  50K+
                </h3>
                <p className="text-xs sm:text-sm text-black/50">Guests</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#123A2B]">
                  100%
                </h3>
                <p className="text-xs sm:text-sm text-black/50">
                  Premium Beans
                </p>
              </div>
            </div>

            <button className="mt-8 sm:mt-10 px-5 sm:px-6 py-3 rounded-xl bg-[#123A2B] text-white hover:brightness-110 transition text-sm sm:text-base">
              Discover Our Story
            </button>
          </div>

          {/* IMAGE SIDE */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-65 sm:h-87.5 md:h-105 lg:h-125 rounded-3xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Coffee Shop"
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
