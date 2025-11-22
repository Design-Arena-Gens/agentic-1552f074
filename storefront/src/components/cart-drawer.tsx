"use client";

import Image from "next/image";
import { Fragment, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { useCart } from "./cart-context";

const DELIVERY_FEE = 25;

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, subtotal, updateQuantity, removeItem, clear } = useCart();

  const total = useMemo(() => subtotal + (items.length ? DELIVERY_FEE : 0), [
    items.length,
    subtotal,
  ]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="flex h-full w-screen max-w-md flex-col bg-white shadow-xl">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Dialog.Title className="text-lg font-semibold text-gray-900">
                  سلة التسوق
                </Dialog.Title>
                <button
                  type="button"
                  className="rounded-full p-2 hover:bg-gray-100"
                  onClick={onClose}
                  aria-label="إغلاق السلة"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <p className="text-center text-sm text-gray-500">
                    سلتك فارغة حالياً. تصفح المنتجات وأضف ما يعجبك!
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={item.product.id}
                        className="flex gap-4 rounded-lg border p-3"
                      >
                        <div className="relative h-20 w-20 overflow-hidden rounded-md">
                          <Image
                            src={item.product.image.src}
                            alt={item.product.image.alt}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-sm font-medium text-gray-900">
                                {item.product.name}
                              </h3>
                              <p className="text-xs text-gray-500">
                                {item.product.category}
                              </p>
                            </div>
                            <button
                              type="button"
                              className="text-xs text-gray-400 hover:text-red-500"
                              onClick={() => removeItem(item.product.id)}
                            >
                              إزالة
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    Math.max(1, item.quantity - 1),
                                  )
                                }
                                className="h-8 w-8 rounded-full border text-lg font-semibold leading-none"
                                aria-label="تقليل الكمية"
                              >
                                −
                              </button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    Math.min(99, item.quantity + 1),
                                  )
                                }
                                className="h-8 w-8 rounded-full border text-lg font-semibold leading-none"
                                aria-label="زيادة الكمية"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {(item.product.price * item.quantity).toFixed(2)}{" "}
                              ر.س
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t px-6 py-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي</span>
                    <span>{subtotal.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between">
                    <span>رسوم التوصيل</span>
                    <span>{items.length ? DELIVERY_FEE.toFixed(2) : "0.00"} ر.س</span>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-gray-900">
                    <span>الإجمالي</span>
                    <span>{total.toFixed(2)} ر.س</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
                  disabled={!items.length}
                >
                  إتمام الشراء
                </button>

                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clear}
                    className="mt-2 w-full text-xs text-gray-400 hover:text-red-400"
                  >
                    تفريغ السلة
                  </button>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
