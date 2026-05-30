import Image from "next/image";

const offers = [
  {
    title: "Morning Coffee",
    discount: "20% OFF",
    description: "Enjoy your favorite coffee before 11 AM.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Happy Hour",
    discount: "Buy 1 Get 1",
    description: "Every day from 4 PM to 6 PM.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 rounded-3xl font-sans">
        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[#123A2B] uppercase tracking-[0.25em] text-xs sm:text-sm font-medium">
            Special Offers
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
            Exclusive Deals For Coffee Lovers
          </h2>

          <p className="mt-4 text-sm sm:text-base text-black/50 max-w-2xl mx-auto">
            Discover limited-time offers, seasonal drinks, and exclusive
            discounts crafted just for you.
          </p>
        </div>

        {/* OFFERS GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="
            relative
            h-80 sm:h-95 md:h-105
            rounded-3xl
            overflow-hidden
            group
          "
            >
              <div className="relative w-full h-full">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY FIX */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-7 md:p-8 text-white">
                <span className="w-fit px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-[#123A2B] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  {offer.discount}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif">
                  {offer.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-white/80 text-xs sm:text-sm">
                  {offer.description}
                </p>

                <button
                  className="
                mt-4 sm:mt-6
                w-fit
                px-4 sm:px-6 py-2 sm:py-3
                rounded-xl
                bg-white
                text-[#123A2B]
                font-medium
                text-sm
                hover:bg-white/90
                transition
              "
                >
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className="max-w-6xl mx-auto mt-10 sm:mt-12">
          <div
            className="
        rounded-3xl
        bg-[#123A2B]
        text-white
        p-6 sm:p-8
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        gap-4
      "
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-serif">
                Join Our Loyalty Program
              </h3>

              <p className="text-white/70 mt-2 text-sm sm:text-base">
                Earn points with every purchase and unlock exclusive rewards.
              </p>
            </div>

            <button
              className="
          px-5 sm:px-6 py-3
          rounded-xl
          bg-white
          text-[#123A2B]
          font-medium
          text-sm sm:text-base
        "
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
