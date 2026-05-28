import {
    collection,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";
  import { db } from "./firebase";
  import { MenuItem } from "../data/menu";
  
  /* ======================
     TYPES
  ====================== */
  
  export type OrderType = "pickup" | "delivery";
  
  export interface OrderItem {
    item: MenuItem;
    qty: number;
  }
  
  export interface CreateOrderPayload {
    type: OrderType;
    items: Record<string, OrderItem>;
    subtotal: number;
    deliveryFee: number;
    total: number;
    address: string | null;
  
    phone?: string | null;
  }
  
  /* ======================
     FIRESTORE COLLECTION
  ====================== */
  
  const ordersRef = collection(db, "orders");
  
  /* ======================
     CREATE ORDER
  ====================== */
  
  export const createOrder = async (
    payload: CreateOrderPayload
  ) => {
    console.log("✅ Using correct createOrder runtime");
  
    /* ----------------------
       Normalize items map → array
    ---------------------- */
    const normalizedItems = Object.values(payload.items).map(
      ({ item, qty }) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: qty,
        lineTotal: item.price * qty,
        type: item.type,
      })
    );
  
    /* ----------------------
       Build order document
    ---------------------- */
    const orderDoc = {
      type: payload.type,
  
      items: normalizedItems,
  
      pricing: {
        subtotal: payload.subtotal,
        deliveryFee: payload.deliveryFee,
        total: payload.total,
      },
  
      delivery:
        payload.type === "delivery"
          ? { address: payload.address }
          : null,
  
      // ✅ NEW: notification preferences
      notification: {
        phone: payload.phone ?? null,
      },
  
      status: "active", // active | completed
  
      createdAt: serverTimestamp(),
      completedAt: null,
  
      // Firestore TTL (48 hours)
      expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
  
      source: "web",
    };
  
    const docRef = await addDoc(ordersRef, orderDoc);
  
    console.log("📦 Order saved to Firestore:", docRef.id);
  
    return docRef.id;
  };
  