"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiShoppingBag } from "react-icons/fi";
import { useCart } from "./cart-context";
import { CartDrawer } from "./cart-drawer";

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "الإلكترونيات", href: "/?category=الإلكترونيات" },
  { name: "الأثاث", href: "/?category=الأثاث" },
  { name: "الإكسسوارات", href: "/?category=الإكسسوارات" },
  { name: "المنزل الذكي", href: "/?category=المنزل الذكي" },
];

export const Header = () => {
  const { items } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
              متجر
            </span>
            <span className="text-lg font-semibold text-gray-900">
              أڤينيــو
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="relative rounded-full border border-gray-200 p-2 text-gray-700 hover:border-gray-300 hover:text-gray-900"
              aria-label="فتح سلة التسوق"
            >
              <FiShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="فتح القائمة"
            >
              <FiMenu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t bg-white px-4 py-3 md:hidden">
            <nav className="space-y-2 text-sm font-medium text-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-2 py-2 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};
