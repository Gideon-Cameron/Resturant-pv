import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1118] text-white">
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#67C24A]/40 to-transparent" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,194,74,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* LEFT: CONTACT INFO */}
          <div>
            <div className="mb-4 h-1 w-20 rounded-full bg-[#67C24A]" />

            <h2 className="text-4xl font-extrabold sm:text-5xl">
              <span className="text-white">Get In</span>
              <br />
              <span className="text-[#67C24A]">Touch</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
              Questions, orders, catering enquiries, or simply saying hello —
              we'd love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:07367681747"
                  className="mt-2 block text-xl font-semibold text-[#67C24A] transition-colors hover:text-[#74d455]"
                >
                  07367 681747
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Location
                </p>

                <p className="mt-2 text-lg text-gray-300">
                  Northampton, NN2 7PW
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: SOCIALS */}
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">
                Follow Our Journey
              </h3>

              <p className="mt-4 text-gray-400">
                Stay updated with new dishes, specials, events, and everything
                happening at Meeny's Kitchen & Grill.
              </p>

              <div className="mt-8 flex gap-5">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/meenyskitchen?igsh=MWFwbDBxdzg4ZG90Mw%3D%3D&utm_source=qr"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#101720] transition-all duration-300 hover:border-[#67C24A] hover:bg-[#67C24A] hover:scale-105"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm5.8-9.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
                  </svg>
                </a>

                {/* Snapchat */}
                <a
                  href="https://snapchat.com/t/OmGdtl3k"
                  aria-label="Snapchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#101720] transition-all duration-300 hover:border-[#67C24A] hover:bg-[#67C24A] hover:scale-105"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c-4.5 0-8 3.7-8 8.3 0 2.6 1.5 5.1 3.7 6.6v.2c0 .6-.5.7-.8.8-.7.2-1.5.3-1.5.8 0 .6 1.2 1 2.2 1 .3 0 .5 0 .6.1.2.2.2.5.4.7.4.5 1.2.9 2.4.9s2-.3 2.5-.9c.2-.2.2-.5.4-.7 0-.1.2-.1.5-.1 1 0 2.2-.3 2.2-1 0-.5-.8-.6-1.5-.8-.3-.1-.8-.2-.8-.8v-.2c2.2-1.5 3.7-4 3.7-6.6C20 5.7 16.5 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Meeny's Kitchen & Grill. All rights
          reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;