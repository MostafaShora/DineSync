type Item = {
  title: string;
  price: string;
  image: string;
  id: string;
};

const items: Item[] = [
  {
    id: "pumpkin",
    title: "Pumpkin Spice Latte",
    price: "$5.90",
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "caramel",
    title: "Caramel Macchiato",
    price: "$4.80",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "iced",
    title: "Iced Vanilla Brew",
    price: "$3.90",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function SeasonalSpecialList() {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <section
          key={item.id}
          className="rounded-2xl overflow-hidden shadow-soft border border-line bg-[#EAD8C2]"
        >
          {/* content */}
          <div className="p-5">
            <div className="uppercase tracking-widest text-[11px] text-black/60">
              Seasonal Special
            </div>

            <div className="mt-2 font-serif text-3xl leading-tight">
              {item.title}
            </div>

            <div className="mt-3 text-xl font-semibold">{item.price}</div>

            <button
              className="mt-4 px-5 py-3 rounded-xl bg-[#123A2B] text-white font-medium hover:brightness-110 transition"
              data-add={item.id}
            >
              Order Now
            </button>
          </div>

          {/* image */}
          <div
            className="h-45 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        </section>
      ))}
    </div>
  );
}
