"use client";

import React from "react";
import Image from "next/image";
import { OffCanvas } from "@/src/app/components/overlays";
import { ArrowWithTailIcon, CartIcon } from "@/public/icons";
import { CyberButton, ButtonType } from "@/src/app/components/forms";
import { Images } from "@/src/app/ui/images";
import type { CartItem } from "./useCart";

interface CartOffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const currency = (value: number) => `$${value.toFixed(2)}`;

const CartOffCanvas: React.FC<CartOffCanvasProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const isEmpty = items.length === 0;

  return (
    <OffCanvas
      isOpen={isOpen}
      onClose={onClose}
      title="Your Cart"
      closeOnOutsideClick={true}
    >
      {isEmpty ? (
        <div className="px-5 mt-5 flex items-center justify-center flex-col">
          <Image
            src={Images.blogImages.cartEmpty}
            className="mb-4 w-32 md:w-44"
            alt="cart empty icon"
          />
          <h5 className="font-semibold text-center text-xl text-gray-900">
            Your shopping cart is currently empty!
          </h5>

          <p className="text-base text-center text-gray-600 mb-4">
            Don&apos;t miss out on our amazing training products - start adding items
            today!
          </p>

          <CyberButton
            onClick={onClose}
            type={ButtonType.PRIMARY}
            paddings="px-5 md:px-8 py-1.5 md:py-2"
          >
            <span className="font-semibold">Close</span>
          </CyberButton>
        </div>
      ) : (
        <>
          <div className="mt-5 p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-900">
                  <tr className="bg-whiteSmoke">
                    <th
                      scope="col"
                      className="px-1.5 text-sm font-normal py-3 border"
                    >
                      Product Description
                    </th>
                    <th
                      scope="col"
                      className="text-sm py-3 border px-1.5 font-normal"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm py-3 border px-1.5 font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm py-3 border px-1.5 font-normal"
                    >
                      Subtotal
                    </th>
                    <th scope="col" className="px-6 py-3 border"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr className="bg-white" key={item.id}>
                      <th
                        scope="row"
                        className="px-1.5 py-4 font-semibold border text-primary"
                      >
                        {item.name}
                      </th>
                      <td className="px-1.5 py-4 border">
                        <div className="flex justify-center">
                          <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                              onUpdateQuantity(item.id, Number(e.target.value) || 1)
                            }
                            className="border w-20 py-1.5 rounded-md outline-none px-2"
                          />
                        </div>
                      </td>
                      <td className="px-1.5 py-4 border text-gray-600">
                        {currency(item.unitPrice)}
                      </td>
                      <td className="px-1.5 border py-4 text-gray-600">
                        {currency(item.unitPrice * item.quantity)}
                      </td>
                      <td className="border px-1.5">
                        <div className="flex justify-center items-center">
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className=""
                          >
                            <Image
                              src={Images.blogImages.filledDeleteIcon}
                              alt="filled delete icon"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 pb-1">
              <p className="flex items-center gap-3 mb-3">
                <span className="text-base w-1/2">Sub Total:</span>
                <span className="font-medium text-base w-1/2 text-end">
                  {currency(subtotal)}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-base w-1/2">Sales Tax:</span>
                <span className="font-medium text-base w-1/2 text-end">TBD</span>
              </p>
            </div>
          </div>
          <div className="border-t border-b py-3 bg-fantacy mb-4">
            <p className="flex items-center m-0 px-4 gap-3">
              <span className="font-medium text-base w-1/2">Total</span>
              <span className="font-semibold text-base text-end w-1/2">
                {currency(subtotal)}
              </span>
            </p>
          </div>

          <div className="px-4 flex items-center justify-between">
            <CyberButton
              icon={<CartIcon />}
              type={ButtonType.PRIMARY_OUTLINE}
              paddings="px-4 py-2"
              onClick={onClose}
            >
              Update Cart
            </CyberButton>

            <CyberButton
              animateIconClasses={"duration-700 group-hover:translate-x-2"}
              icon={<ArrowWithTailIcon />}
              type={ButtonType.PRIMARY}
              paddings="px-4 py-2 flex-row-reverse gap-3"
              onClick={onCheckout}
            >
              Checkout
            </CyberButton>
          </div>
        </>
      )}
    </OffCanvas>
  );
};

export default CartOffCanvas;

