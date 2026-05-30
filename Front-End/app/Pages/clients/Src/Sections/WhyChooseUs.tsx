import {
  FiCoffee,
  FiWifi,
  FiHome,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";

const features = [
  {
    icon: FiCoffee,
    title: "Premium Coffee Beans",
    description:
      "Carefully selected beans sourced from the finest coffee farms.",
  },
  {
    icon: FiWifi,
    title: "Free High-Speed WiFi",
    description:
      "Stay connected while enjoying your favorite coffee and workspace.",
  },
  {
    icon: FiHome,
    title: "Comfortable Atmosphere",
    description:
      "Designed for relaxation, meetings, and meaningful conversations.",
  },
  {
    icon: FiClock,
    title: "Fast Service",
    description: "Freshly prepared drinks and meals served with efficiency.",
  },
  {
    icon: FiDollarSign,
    title: "Fair Pricing",
    description: "Premium quality products at prices you'll appreciate.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 rounded-3xl font-sans">
        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[#123A2B] uppercase tracking-[0.25em] text-xs sm:text-sm font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1C1A]">
            More Than Just Coffee
          </h2>

          <p className="mt-4 text-sm sm:text-base text-black/50 max-w-2xl mx-auto">
            Every detail is thoughtfully crafted to create a memorable café
            experience for our guests.
          </p>
        </div>

        {/* CARDS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
              group
              bg-white
              rounded-3xl
              p-5 sm:p-6
              border border-black/5
              hover:shadow-xl
              transition-all duration-500
              hover:-translate-y-1 sm:hover:-translate-y-2
              flex flex-col
            "
              >
                {/* ICON */}
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[#123A2B]/10 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon size={24} className="text-[#123A2B]" />
                </div>

                {/* TITLE */}
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#1C1C1A]">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm text-black/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
