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
    description: "Carefully selected beans sourced from the finest coffee farms.",
  },
  {
    icon: FiWifi,
    title: "Free High-Speed WiFi",
    description: "Stay connected while enjoying your favorite coffee and workspace.",
  },
  {
    icon: FiHome,
    title: "Comfortable Atmosphere",
    description: "Designed for relaxation, meetings, and meaningful conversations.",
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
    <section className="py-8 sm:py-12 px-4 w-full">
      <div className="bg-[#EFE6D6]/40 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 rounded-[2rem] font-sans w-full">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#123A2B] uppercase tracking-[0.25em] text-xs sm:text-sm font-bold bg-[#123A2B]/10 px-4 py-2 rounded-full inline-block mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1C1A]">
            More Than Just Coffee
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every detail is thoughtfully crafted to create a memorable café
            experience for our guests.
          </p>
        </div>

        {/* CARDS CONTAINER - 3 on top, 2 on bottom (centered) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex-1 
                  min-w-[280px] 
                  max-w-[340px] 
                  bg-white
                  rounded-3xl
                  p-6 sm:p-8
                  border border-black/5
                  hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                  hover:border-[#123A2B]/20
                  transition-all duration-300
                  hover:-translate-y-2
                  flex flex-col
                "
              >
                {/* ICON */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FBF7F0] group-hover:bg-[#123A2B] transition-colors duration-300 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#123A2B] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#1C1C1A]">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 leading-relaxed">
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