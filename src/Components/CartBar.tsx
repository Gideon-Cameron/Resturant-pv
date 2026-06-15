import React from "react";
import { useCart } from "../context/CartContext";

const CartBar: React.FC = () => {
  const { items, total, openCart } = useCart();

  const itemCount = items.length;

  // Hide bar if nothing selected
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#67C24A]/30 bg-[#0B1118]/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(103,194,74,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* LEFT: ITEM COUNT */}
        <div className="text-sm font-medium text-gray-300">
          <span className="text-[#67C24A] font-semibold">
            {itemCount}
          </span>{" "}
          item{itemCount !== 1 ? "s" : ""} selected
        </div>

        {/* RIGHT: REVIEW BUTTON */}
        <button
          onClick={() => {
            console.log("🧾 Review order clicked");
            openCart();
          }}
          className="group rounded-lg bg-[#67C24A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:bg-[#74d455] hover:shadow-green-700/30 focus:outline-none focus:ring-2 focus:ring-[#67C24A] focus:ring-offset-2 focus:ring-offset-[#0B1118]"
        >
          <span className="flex items-center gap-2">
            Review Order · £{total}

            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartBar;