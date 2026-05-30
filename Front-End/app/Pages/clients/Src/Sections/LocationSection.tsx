import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

export default function LocationPage() {
  return (
    <section className="py-24 px-4">
      <div className="space-y-6 bg-[#F6F1E8] px-4 sm:px-6 lg:px-8 py-4 rounded-3xl font-sans">
        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <span className="text-[#123A2B] uppercase tracking-[0.25em] text-sm font-medium">
            Find Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#1C1C1A]">
            Visit Our Café
          </h2>

          <p className="mt-4 text-black/50 max-w-2xl mx-auto">
            Come experience our space in person — fresh coffee, cozy atmosphere,
            and great vibes waiting for you.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* MAP */}
          <div className="relative h-125 rounded-3xl overflow-hidden group shadow-lg">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76952890745!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d9b5c8c9c7d%3A0x2e3c3c3c3c3c3c3c!2sCairo!5e0!3m2!1sen!2seg!4v0000000000"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* INFO CARDS */}
          <div className="flex flex-col gap-6">
            {/* Branch */}
            <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <FiMapPin className="text-[#123A2B]" />
                <h3 className="text-xl font-semibold text-[#123A2B]">
                  Main Branch
                </h3>
              </div>

              <p className="text-black/60 text-sm leading-relaxed">
                123 Nile Street, Downtown Cairo, Egypt
              </p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-[#123A2B]" />
                <h3 className="text-xl font-semibold text-[#123A2B]">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-2 text-sm text-black/60">
                <p>Monday - Thursday: 8:00 AM - 11:00 PM</p>
                <p>Friday - Saturday: 8:00 AM - 1:00 AM</p>
                <p>Sunday: 9:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-3xl bg-[#123A2B] text-white">
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>

              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <FiPhone />
                  <span>+20 100 000 0000</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMail />
                  <span>hello@cafebrand.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMapPin />
                  <span>Cairo, Egypt</span>
                </div>
              </div>

              <button className="mt-5 px-5 py-3 rounded-xl bg-white text-[#123A2B] font-medium flex items-center gap-2">
                Call Now
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* BRANCHES GRID */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
          {["Downtown", "Zamalek", "New Cairo"].map((branch, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white border border-black/5 hover:shadow-lg transition group"
            >
              <h4 className="text-lg font-semibold text-[#123A2B] mb-2">
                {branch} Branch
              </h4>

              <p className="text-sm text-black/60">
                Cozy seating, premium coffee, and fast WiFi in the heart of{" "}
                {branch}.
              </p>

              <button className="mt-4 text-sm text-[#123A2B] font-medium flex items-center gap-1 group-hover:underline">
                View Details
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
