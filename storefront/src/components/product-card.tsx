"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import type { Product } from "@/lib/products";
import { useCart } from "./cart-context";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
          )}
          {!product.inStock && (
            <span className="absolute right-3 top-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
              غير متوفر حالياً
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 px-4 py-5">
        <div>
          <p className="text-xs font-medium text-gray-500">{product.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500">السعر</p>
            <p className="text-lg font-semibold text-gray-900">
              {product.price.toFixed(2)} ر.س
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex items-center gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:text-gray-900"
            >
              التفاصيل
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => addItem(product)}
              disabled={!product.inStock}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition enabled:hover:bg-gray-800 disabled:opacity-40"
              aria-label="إضافة إلى السلة"
            >
              <FiPlus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
