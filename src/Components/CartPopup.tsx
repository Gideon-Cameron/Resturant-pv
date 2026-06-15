import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { MenuItem } from "../data/menu";
import { createOrder } from "../firebase/orders";

const DELIVERY_FEE = 5;

const CartPopup: React.FC = () => {
  const location = useLocation();

  const navigatedOrderType: "pickup" | "delivery" =
    location.state?.orderType ?? "delivery";

  const {
    items,
    total,
    isOpen,
    closeCart,
    clearCart,
    removeItem,
  } = useCart();

  const [orderType, setOrderType] =
    useState<"pickup" | "delivery">(navigatedOrderType);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setOrderType(navigatedOrderType);
  }, [navigatedOrderType]);

  if (!isOpen || items.length === 0) return null;

  const groupedItems = items.reduce<
    Record<string, { item: MenuItem; qty: number }>
  >((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { item, qty: 1 };
    } else {
      acc[item.id].qty += 1;
    }
    return acc;
  }, {});

  const deliveryFee = orderType === "delivery" ? DELIVERY_FEE : 0;
  const finalTotal = total + deliveryFee;

  const handleConfirm = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await createOrder({
        type: orderType,
        items: groupedItems,
        subtotal: total,
        deliveryFee,
        total: finalTotal,
        address: orderType === "delivery" ? address : null,
        phone: phone.trim() || null,
      });

      window.dispatchEvent(new Event("order-success"));

      clearCart();
      closeCart();
    } catch (error) {
      console.error("❌ Failed to create order:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:items-center">
      <div className="absolute inset-0" onClick={closeCart} />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0B1118] p-6 shadow-2xl sm:rounded-3xl">
        {/* Accent Bar */}
        <div className="mb-6 h-1 w-20 rounded-full bg-[#67C24A]" />

        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Confirm Your Order
          </h2>

          <button
            onClick={closeCart}
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* ORDER TYPE */}
        <div className="mb-6 space-y-3">
          <div className="font-medium text-white">Order Type</div>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#101720] px-4 py-3 text-gray-300 transition-colors hover:border-[#67C24A]/40">
            <input
              type="radio"
              checked={orderType === "pickup"}
              onChange={() => setOrderType("pickup")}
              className="accent-[#67C24A]"
            />
            Pickup
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#101720] px-4 py-3 text-gray-300 transition-colors hover:border-[#67C24A]/40">
            <input
              type="radio"
              checked={orderType === "delivery"}
              onChange={() => setOrderType("delivery")}
              className="accent-[#67C24A]"
            />
            Delivery (+£{DELIVERY_FEE})
          </label>

          {orderType === "delivery" && (
            <>
              <div className="mt-3 rounded-xl border border-[#67C24A]/20 bg-[#67C24A]/10 p-4 text-sm text-gray-300">
                🚚 Delivery is available{" "}
                <strong>only within Northampton</strong>. Orders outside this
                area may be cancelled.
              </div>

              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery address"
                className="mt-3 w-full rounded-xl border border-white/10 bg-[#101720] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#67C24A] focus:outline-none"
              />
            </>
          )}
        </div>

        {/* OPTIONAL PHONE */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-white">
            Phone number (optional)
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Add a phone number to be notified when your order is ready"
            className="w-full rounded-xl border border-white/10 bg-[#101720] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#67C24A] focus:outline-none"
          />
        </div>

        {/* ITEMS */}
        <ul className="max-h-64 space-y-3 overflow-y-auto pr-1">
          {Object.values(groupedItems).map(({ item, qty }) => (
            <li
              key={item.id}
              className="flex justify-between rounded-xl border border-white/10 bg-[#101720] p-4 text-white"
            >
              <div>
                <div className="font-medium text-white">{item.name}</div>

                <div className="text-sm text-gray-400">
                  £{item.price} × {qty}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold">
                  £{item.price * qty}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 transition-colors hover:text-red-300"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* TOTAL */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#101720] p-4 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>£{total}</span>
          </div>

          {orderType === "delivery" && (
            <div className="mt-2 flex justify-between">
              <span>Delivery</span>
              <span>£{DELIVERY_FEE}</span>
            </div>
          )}

          <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-xl font-bold text-white">
            <span>Total</span>
            <span>£{finalTotal}</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleConfirm}
            disabled={
              isSubmitting ||
              (orderType === "delivery" && address.trim() === "")
            }
            className="w-full rounded-xl bg-[#67C24A] py-4 font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:bg-[#74d455] hover:shadow-green-700/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Placing Order…" : "Confirm Order"}
          </button>

          <button
            onClick={clearCart}
            className="w-full text-sm font-medium text-red-400 transition-colors hover:text-red-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;