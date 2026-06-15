import React from "react";

const Location: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05070A] py-24">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 3px)",
        }}
      />

      {/* Section Divider Glow */}
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#67C24A]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT: MAP */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1118] shadow-2xl">
            <div className="h-80 md:h-[450px]">
              <iframe
                title="Kingsland Gardens, Northampton"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.007623691162!2d-0.8987250999999999!3d52.261406599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770ebd52984a27%3A0x77f29edc521b88fb!2sKingsland%20Gardens%2C%20Northampton%2C%20UK!5e0!3m2!1sen!2set!4v1767753450539!5m2!1sen!2set"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT: INFO */}
          <div>
            <div className="mb-4 h-1 w-20 rounded-full bg-[#67C24A]" />

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              <span className="text-white">Find Us in</span>
              <br />
              <span className="text-[#67C24A]">Northampton</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-400">
              You'll find us at{" "}
              <span className="font-semibold text-white">
                Kingsland Gardens, Northampton
              </span>
              , a convenient and welcoming spot in the heart of town.
              Whether you're collecting an order or stopping by, we're easy
              to reach and ready to serve.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-400">
              Use the map to get directions, check traffic conditions,
              or open our location directly in Google Maps.
            </p>

            <a
              href="https://share.google/FjxQZkPXvRANq6zKw"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-[#67C24A] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:bg-[#74d455] hover:shadow-green-700/30"
            >
              <span>Open in Google Maps</span>

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
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#67C24A]/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Location;