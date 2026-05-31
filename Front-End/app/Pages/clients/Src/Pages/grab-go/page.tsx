import { CartProvider } from "../../context/CartContext";
import MenuGrabGo from "../menu-grab-go/page";

export default function GrabGoPage() {
  return (
    <CartProvider>
      <div className="bg-[#F6F1E8] min-h-screen">
        {/* Hero */}

        <section className="py-20 text-center px-4">
          <span className="uppercase tracking-[0.3em] text-[#123A2B] text-sm">
            Grab & Go
          </span>

          <h1 className="text-5xl font-serif mt-4">
            Order Ahead.
            <br />
            Skip The Queue.
          </h1>

          <p className="mt-5 text-black/60 max-w-xl mx-auto">
            Choose your favorite coffee and desserts, then pick them up when
            they are ready.
          </p>
        </section>

        {/* Layout */}
        <MenuGrabGo />
      </div>
    </CartProvider>
  );
}
