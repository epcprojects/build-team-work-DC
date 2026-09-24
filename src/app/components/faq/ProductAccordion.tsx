"use client";

import React, { useState } from "react";
import ThemeButton, { ButtonType } from "../forms/ThemeButton";
import { CartIcon } from "@/public/icons";
import { useRouter } from "next/navigation";
import { Images } from "../../ui/images";
import Image from "next/image";
interface SingleAccordionProps {
  title: string;
  btnRequired?: boolean;
  addToCart?: () => void;
}

const ProductAccordion: React.FC<SingleAccordionProps> = ({
  title,
  btnRequired = true,
  addToCart,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const router = useRouter();
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion p-6 bg-gray-100 select-none rounded-xl ">
      <div className="accordion-item">
        <div
          className="accordion-title cursor-pointer flex items-center text-secondaryDark text-lg font-semibold justify-between"
          onClick={toggleAccordion}
        >
          {title}
          <Image
            src={Images.componentImages.arrowHead}
            className={`w-5 h-5 ${isOpen ? "rotate-180" : ""}`}
            alt=""
          />
        </div>
        {isOpen && (
          <div className="accordion-content mt-6">
            <div className="mb-6">
              <div className=" mt-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm sm:text-base  text-black">
                    How many employees do you need to train?
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="rounded-lg w-full bg-white border-2 border-gray-200 py-2 outline-0 px-3"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div
              className={`${btnRequired ? "mb-6" : ""} flex flex-col gap-1.5`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base sm:text-lg text-mirage  block">
                  Price Per Seat:
                </span>
                <span className="text-xl text-mirage font-medium">$0.00</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-base sm:text-lg text-mirage font-medium block">
                  You Saved:
                </span>
                <span className="text-xl text-red-500 font-medium">$0.00</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg sm:text-lg text-mirage font-semibold">
                  Total Price:
                </span>
                <span className="text-xl text-mirage font-medium">$0.00</span>
              </div>
            </div>

            <div className="flex btnContainer items-center flex-col md:flex-row justify-between gap-4">
              <ThemeButton
                fullWidth
                type={ButtonType.SECONDARY}
                icon={<CartIcon />}
                onClick={() => console.log("Add to cart")}
                paddings="px-5 py-2 md:py-3"
              >
                Add to Cart
              </ThemeButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAccordion;
