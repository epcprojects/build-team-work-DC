"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductsDropdownProps {
  currentPath: string;
  productsDropdown: Array<{ href: string; label: string; image: string }>;
  isMobile?: boolean;
  onClose?: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsDropdown = ({
  currentPath,
  productsDropdown,
  isMobile = false,
  setIsOpen,
  onClose,
}: ProductsDropdownProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    if (onClose) onClose();
  };

  const isProductActive = productsDropdown.some(
    (product) => currentPath === product.href,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`  ${
        isMobile
          ? "relative w-full border-b border-[#dfdfdf] rounded-lg hover:bg-[#f1f1f1]"
          : "relative"
      }  `}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={`nav-link  flex items-center justify-between gap-3 text-base w-full cursor-pointer ${
          isMobile ? "w-full justify-between" : ""
        } rounded-lg py-2 px-4 ${
          isProductActive
            ? "bg-secondary text-white"
            : "text-black hover:bg-gray-m-100"
        }`}
      >
        Products
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="#32488b"
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410826 0.642759C0.736263 0.317322 1.2639 0.317322 1.58934 0.642759L6.00008 5.0535L10.4108 0.642759C10.7363 0.317322 11.2639 0.317322 11.5893 0.642759C11.9148 0.968196 11.9148 1.49583 11.5893 1.82127L6.58934 6.82127C6.2639 7.14671 5.73626 7.14671 5.41083 6.82127L0.410826 1.82127C0.0853888 1.49583 0.0853888 0.968196 0.410826 0.642759Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          className={`absolute bg-white border-b-2 drop-shadow-xl ${
            isMobile ? "w-full" : ""
          } border-secondary mt-2 pb-1`}
        >
          {productsDropdown.map((product) => (
            <Link
              onClick={() => {
                closeDropdown();
                setIsOpen(false);
              }}
              className={` py-2 px-4 text-base whitespace-nowrap flex gap-2 ${
                currentPath === product.href
                  ? " "
                  : "text-black hover:bg-gray-m-100"
              }`}
              key={product.href}
              href={product.href}
              // onClick={closeDropdown}
            >
              <Image src={product.image} alt="" width={24} height={20} />
              {product.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
