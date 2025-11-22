import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "أڤينيــو | متجر إلكتروني",
  description:
    "متجر إلكتروني متكامل يقدم منتجات عصرية وتقنيات ذكية مع دعم كامل للغة العربية وشحن سريع.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${geistMono.variable} min-h-screen bg-gray-50 antialiased`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
