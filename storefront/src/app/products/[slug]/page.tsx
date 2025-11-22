import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { AddToCartButton } from "./components/add-to-cart-button";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug, product.category);

  return (
    <div className="space-y-12">
      <nav className="text-xs text-gray-500">
        <Link href="/" className="hover:text-gray-900">
          الرئيسية
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">{product.category}</span>
      </nav>

      <section className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100">
          <div className="relative aspect-[4/5]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-600">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-sm leading-7 text-gray-600">
              {product.description}
            </p>
            <ul className="space-y-2 rounded-2xl bg-gray-50 p-5 text-sm text-gray-600">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">السعر</p>
              <p className="text-3xl font-semibold text-gray-900">
                {product.price.toFixed(2)} ر.س
              </p>
            </div>
            <AddToCartButton product={product} />
            <p className="text-xs text-gray-500">
              شحن مجاني للطلبات التي تتجاوز ٤٩٩ ر.س. خيارات الدفع عند الاستلام
              متاحة في جميع المدن.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              منتجات ذات صلة
            </h2>
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
            >
              العودة للمتجر
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 px-4 py-5 text-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900">
                    {item.price.toFixed(2)} ر.س
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <aside className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-lg font-semibold text-gray-900">خدمات إضافية</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "صيانة مجانية لمدة عام",
            "استشارة تصميم مجانية مع مختصين",
            "تركيب احترافي وخدمة ما بعد البيع",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-5 text-sm text-gray-600"
            >
              {item}
            </div>
          ))}
        </div>
        <Link
          href="#"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
        >
          اكتشف باقات الضمان الممتد
          <FiShoppingBag className="h-4 w-4" />
        </Link>
      </aside>
    </div>
  );
}
