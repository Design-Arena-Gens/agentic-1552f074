import Image from "next/image";

const categories = [
  {
    title: "الإلكترونيات المتقدمة",
    description: "ابتكارات صوتية ومرئية لأفضل تجربة ترفيه.",
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "أثاث ذكي",
    description: "قطع تدعم الراحة والأناقة في كل زاوية من منزلك.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "المنزل الذكي",
    description: "حلول متصلة لتتحكم في منزلك من أي مكان.",
    image:
      "https://images.unsplash.com/photo-1595073040790-2be8261ede9d?auto=format&fit=crop&w=900&q=80",
  },
];

export const CategoryShowcase = () => (
  <section id="categories" className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">تسوق حسب الفئة</h2>
        <p className="mt-2 text-sm text-gray-600">
          اختر الفئة المفضلة لديك واكتشف منتجات تجمع بين التصميم والتقنية.
        </p>
      </div>
      <a
        href="#featured-products"
        className="hidden rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:text-gray-900 md:inline-flex"
      >
        عرض جميع المنتجات
      </a>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category.title}
          className="group relative overflow-hidden rounded-3xl"
        >
          <div className="relative h-64 w-full">
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <p className="mt-2 text-sm text-white/80">{category.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              SHOP NOW
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
