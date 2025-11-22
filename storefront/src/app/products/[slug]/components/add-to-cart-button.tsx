"use client";

import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart-context";

type AddToCartButtonProps = {
  product: Product;
};

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={!product.inStock}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {added ? (
        <>
          <FiCheck className="h-5 w-5" />
          تمت الإضافة إلى السلة
        </>
      ) : (
        <>
          <span>إضافة إلى السلة</span>
        </>
      )}
    </button>
  );
};
