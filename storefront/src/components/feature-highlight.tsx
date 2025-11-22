const features = [
  {
    title: "تجربة مخصصة",
    description: "خوارزميات توصية ذكية تقترح المنتجات بناءً على أسلوب حياتك.",
  },
  {
    title: "شحن سريع وموثوق",
    description: "توصيل خلال ٢٤ - ٤٨ ساعة مع متابعة الطلب لحظة بلحظة.",
  },
  {
    title: "ضمان حقيقي",
    description: "ضمان على جميع المنتجات مع دعم فني متواصل بعد الشراء.",
  },
  {
    title: "دفع آمن",
    description: "طرق دفع متعددة مع تشفير كامل لحماية بياناتك.",
  },
];

export const FeatureHighlight = () => (
  <section className="rounded-3xl bg-gray-900 px-6 py-12 text-white md:px-10">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-2xl font-bold md:text-3xl">
        لماذا يثق الآلاف في متجر أڤينيــو؟
      </h2>
      <p className="mt-3 text-sm text-gray-300 md:text-base">
        نهتم بكل تفاصيل الرحلة الشرائية، من لحظة تصفحك الأول وحتى استلامك للمنتج
        وتجربته.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="mt-2 text-sm text-gray-200">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);
