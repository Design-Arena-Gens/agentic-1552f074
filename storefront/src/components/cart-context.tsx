"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "agentic-storefront-cart";

const calculateSubtotal = (items: CartItem[]) =>
  items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed: CartItem[] = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
            : item,
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clear = () => setItems([]);

  const value = useMemo(
    () => ({
      items,
      subtotal: calculateSubtotal(items),
      addItem,
      updateQuantity,
      removeItem,
      clear,
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
};
