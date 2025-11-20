import React from "react";

export default function Navbar({ cartCount, openModal }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">🛒 FreshCart</h1>

      <button
        onClick={openModal}
        className="relative bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition"
      >
        Cart
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      </button>
    </nav>
  );
}
