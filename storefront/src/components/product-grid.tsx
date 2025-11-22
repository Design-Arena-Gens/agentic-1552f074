import type { Product } from "@/lib/products";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => (
  <section
    id="featured-products"
    className="space-y-6 scroll-mt-24"
  >
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          مختارات فريق التصميم
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          تشكيلة متجددة من المنتجات التي نحبها هذا الأسبوع.
        </p>
      </div>
      <a
        href="#"
        className="hidden text-xs font-semibold text-gray-500 hover:text-gray-900 md:block"
      >
        عرض المزيد
      </a>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);
