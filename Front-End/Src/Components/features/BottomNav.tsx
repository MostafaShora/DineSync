export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-[#fbf4e3] border-t px-6 py-3">
      <div className="max-w-5xl mx-auto grid grid-cols-4 text-center">

        <button>⌂ Home</button>
        <button>⌘ Menu</button>
        <button>🧾 Orders</button>

        <button className="font-bold text-[#062b12]">
          👤 Profile
        </button>

      </div>
    </nav>
  );
}