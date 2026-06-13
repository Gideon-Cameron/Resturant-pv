import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import popupImage from "../assets/Popup.jpg";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToMenu = (orderType?: "delivery" | "pickup") => {
    setIsModalOpen(false);

    if (orderType) {
      navigate("/menu", {
        state: { orderType },
      });
    } else {
      navigate("/menu");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#05070A]">
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 3px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* LEFT: TEXT */}
            <div>
              <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
                <span className="text-[#67C24A]">Meeny's</span>
                <br />
                <span className="text-white">Kitchen & Grill</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                Introducing Meeny’s — where authenticity meets flavour! 🍲 A
                true Blasian fusion of Caribbean spice and Asian soul, crafted
                with love and passion. Follow us on our journey as we bring the
                taste of home-cooked goodness to your plate.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-[#67C24A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:bg-[#74d455] hover:shadow-green-700/30"
              >
                <span>Order Now</span>
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
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
              </button>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1118] shadow-2xl">
                <img
                  src={heroImage}
                  alt="Featured food"
                  className="w-full max-w-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          {/* MODAL CONTENT */}
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0B1118] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              aria-label="Close"
            >
              ✕
            </button>

            {/* MODAL IMAGE */}
            <img
              src={popupImage}
              alt="Order options"
              className="h-48 w-full object-cover"
            />

            {/* MODAL CONTENT */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                Click + Collect
                <br />
                Takeaway + Pickup
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Choose how you'd like to enjoy Meeny's today.
              </p>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() => goToMenu("delivery")}
                  className="group flex w-full items-center justify-between rounded-lg bg-[#67C24A] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#74d455]"
                >
                  <span>ORDER FOR DELIVERY</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
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
                </button>

                <button
                  onClick={() => goToMenu("pickup")}
                  className="group flex w-full items-center justify-between rounded-lg bg-[#67C24A] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#74d455]"
                >
                  <span>CLICK & COLLECT</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
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
                </button>

                <button
                  onClick={() => goToMenu()}
                  className="group flex w-full items-center justify-between rounded-lg bg-[#67C24A] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#74d455]"
                >
                  <span>BROWSE MENU</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;