import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { boxes, mains, sides, drinks, MenuItem } from "../data/menu";
import menuHero from "../assets/menu.jpg";

const Menu: React.FC = () => {
  const location = useLocation();
  const { addItem, isItemSelected, getItemCount } = useCart();

  const orderType: "delivery" | "pickup" =
    location.state?.orderType ?? "delivery";

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleSuccess = () => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    };

    window.addEventListener("order-success", handleSuccess);
    return () =>
      window.removeEventListener("order-success", handleSuccess);
  }, []);

  const cardBase =
    "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0B1118] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#67C24A]/40 hover:shadow-green-900/20";

  const selectedStyle =
    "ring-2 ring-[#67C24A] border-[#67C24A]/50 bg-[#10181F]";

  const handleAdd = (item: MenuItem) => addItem(item);

  const QuantityBadge = ({ count }: { count: number }) =>
    count > 0 ? (
      <div className="absolute right-3 top-3 z-10 rounded-full bg-[#67C24A] px-3 py-1 text-sm font-bold text-white shadow-lg">
        {count}
      </div>
    ) : null;

  return (
    <main className="bg-[#05070A] text-white">
      {/* SUCCESS BANNER */}
      {showSuccess && (
        <div className="fixed top-0 z-50 w-full border-b border-green-400/20 bg-[#67C24A] py-3 text-center font-semibold text-white shadow-lg">
          ✅ Your order was sent successfully
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={menuHero}
          alt="Menu"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 3px)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold sm:text-6xl">
              <span className="text-[#67C24A]">Our</span>{" "}
              <span className="text-white">Menu</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300">
              A bold fusion of Jamaican soul and Bangladeshi spice.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
              {orderType === "delivery"
                ? "🚚 Ordering for Delivery"
                : "🛍️ Ordering for Pickup"}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* BOXES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-white">
              Signature <span className="text-[#67C24A]">Boxes</span>
            </h2>

            <p className="mt-3 text-gray-400">
              Crafted with bold flavours and layered spices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {boxes.map((box) => {
              const selected = isItemSelected(box.id);
              const count = getItemCount(box.id);

              return (
                <div
                  key={box.id}
                  onClick={() => handleAdd(box)}
                  className={`${cardBase} ${
                    selected ? selectedStyle : ""
                  }`}
                >
                  <QuantityBadge count={count} />

                  {box.image && (
                    <div className="overflow-hidden">
                      <img
                        src={box.image}
                        alt={box.name}
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">
                      {box.name}
                    </h3>

                    <ul className="mt-4 space-y-2 text-gray-400">
                      {box.includes?.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-[#67C24A]">
                        £{box.price}
                      </span>

                      <span className="text-sm text-gray-500">
                        Tap to add
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* A LA CARTE */}
      <section className="relative bg-[#0B1118] py-24">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-center text-4xl font-extrabold">
            À La <span className="text-[#67C24A]">Carte</span>
          </h2>

          <p className="mt-4 text-center text-gray-400">
            Mix and match your favourites.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {[
              { title: "Mains", items: mains },
              { title: "Sides", items: sides },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#05070A] p-8 shadow-xl"
              >
                <h3 className="mb-8 text-center text-2xl font-bold text-white">
                  {title}
                </h3>

                <ul className="space-y-3">
                  {items.map((item) => {
                    const count = getItemCount(item.id);

                    return (
                      <li
                        key={item.id}
                        onClick={() => handleAdd(item)}
                        className="flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-[#67C24A]/30 hover:bg-white/5"
                      >
                        <span>
                          {item.name}

                          {count > 0 && (
                            <span className="ml-2 rounded-full bg-[#67C24A]/20 px-2 py-1 text-xs font-semibold text-[#67C24A]">
                              × {count}
                            </span>
                          )}
                        </span>

                        <span className="font-semibold text-[#67C24A]">
                          £{item.price}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* DRINKS */}
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/10 bg-[#05070A] p-8 shadow-xl">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Drinks
            </h3>

            <ul className="space-y-3">
              {drinks.map((item) => {
                const count = getItemCount(item.id);

                return (
                  <li
                    key={item.id}
                    onClick={() => handleAdd(item)}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-[#67C24A]/30 hover:bg-white/5"
                  >
                    <span>
                      {item.name}

                      {count > 0 && (
                        <span className="ml-2 rounded-full bg-[#67C24A]/20 px-2 py-1 text-xs font-semibold text-[#67C24A]">
                          × {count}
                        </span>
                      )}
                    </span>

                    <span className="font-semibold text-[#67C24A]">
                      £{item.price}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>
    </main>
  );
};

export default Menu;
