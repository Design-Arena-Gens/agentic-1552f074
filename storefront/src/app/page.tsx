import { Hero } from "@/components/hero";
import { CategoryShowcase } from "@/components/category-showcase";
import { ProductGrid } from "@/components/product-grid";
import { FeatureHighlight } from "@/components/feature-highlight";
import { products } from "@/lib/products";

type HomePageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = (await searchParams) ?? {};
  const filtered =
    params.category && params.category !== "الكل"
      ? products.filter((product) => product.category === params.category)
      : products;

  return (
    <div className="space-y-12">
      <Hero />
      <CategoryShowcase />
      <ProductGrid products={filtered} />
      <FeatureHighlight />
    </div>
  );
}
