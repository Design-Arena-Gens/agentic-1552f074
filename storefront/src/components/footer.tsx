const footerLinks = [
  {
    title: "خدمة العملاء",
    links: ["مركز المساعدة", "الإرجاع والاستبدال", "تتبع الطلب", "الأسئلة الشائعة"],
  },
  {
    title: "عن المتجر",
    links: ["قصتنا", "الاستدامة", "انضم لفريقنا", "المدونة"],
  },
  {
    title: "تواصل معنا",
    links: ["البريد الإلكتروني", "الهاتف", "الدعم اللحظي", "الشراكات"],
  },
];

export const Footer = () => (
  <footer className="bg-gray-50">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">أڤينيــو</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          نختار لك منتجات عصرية بتصاميم مبتكرة وتقنيات ذكية لتعيش تجربة تسوق
          متكاملة في أي وقت ومن أي مكان.
        </p>
      </div>
      {footerLinks.map((column) => (
        <div key={column.title} className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-900">
            {column.title}
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {column.links.map((item) => (
              <li key={item}>
                <a className="hover:text-gray-900" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} أڤينيــو. جميع الحقوق محفوظة.</p>
        <p>نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك.</p>
      </div>
    </div>
  </footer>
);
