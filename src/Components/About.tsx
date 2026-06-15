import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/About.jpg";

const About: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05070A]">
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 3px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1118] shadow-2xl">
              <img
                src={aboutImage}
                alt="About our food"
                className="w-full max-w-xl object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <div className="mb-4 h-1 w-20 rounded-full bg-[#67C24A]" />

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              <span className="text-white">BIG TASTE.</span>
              <br />
              <span className="text-[#67C24A]">BOLD LAYERS.</span>
              <br />
              <span className="text-white">EVERY BITE MATTERS.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Meeny’s Kitchen & Grill is where cultures meet in the kitchen.
              We bring together the deep, comforting flavours of Caribbean
              cooking with the rich spices and soul of Asian cuisine —
              creating dishes that feel both familiar and exciting.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
              Every meal is prepared with care, balance, and intention.
              From our signature Blasian boxes to our made-to-order mains,
              we focus on quality ingredients, bold seasoning, and food
              that’s meant to be enjoyed, shared, and remembered.
            </p>

            {/* CTA */}
            <Link to="/menu">
              <button className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-[#67C24A] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:bg-[#74d455] hover:shadow-green-700/30">
                <span>View The Menu</span>

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
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#67C24A]/40 to-transparent" />
    </section>
  );
};

export default About;