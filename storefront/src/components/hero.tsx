export const Hero = () => (
  <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-20 text-white md:px-10">
    <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
      <span className="text-xs tracking-[0.4em] text-gray-300">
        NEW ARRIVALS
      </span>
      <h1 className="text-3xl font-bold leading-snug md:text-5xl">
        اكتشف مجموعة منتجاتنا الذكية المختارة بعناية لحياة عصرية أكثر سلاسة.
      </h1>
      <p className="text-sm text-gray-300 md:text-base">
        أحدث الأجهزة، قطع الديكور، الأثاث، وملحقات المنزل الذكي في مكان واحد.
        شحن سريع، دفع آمن، وتجربة تسوق تدعم اللغة العربية بالكامل.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
        <a
          href="#featured-products"
          className="rounded-full bg-white px-6 py-3 text-black transition hover:-translate-y-0.5 hover:bg-gray-200"
        >
          تسوق الآن
        </a>
        <a
          href="#categories"
          className="rounded-full border border-white/40 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          مجموعات المختصين
        </a>
      </div>
    </div>
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    <div className="pointer-events-none absolute -left-10 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
  </section>
);
