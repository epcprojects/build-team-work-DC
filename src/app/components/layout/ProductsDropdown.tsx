"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ProductsDropdownProps {
  currentPath: string;
  productsDropdown: Array<{ href: string; label: string }>;
  isMobile?: boolean;
  onClose?: () => void;
}

const ProductsDropdown = ({
  currentPath,
  productsDropdown,
  isMobile = false,
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
      className={isMobile ? "relative w-full" : "relative"}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={`nav-link flex items-center gap-3 text-base ${
          isMobile ? "w-full justify-between" : ""
        } rounded-lg py-2 px-4 ${
          currentPath.startsWith("/cyber-safety")
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
              className={`block py-2 px-4 text-base whitespace-nowrap ${
                currentPath === product.href
                  ? "bg-secondary text-white"
                  : "text-black hover:bg-gray-m-100"
              }`}
              key={product.href}
              href={product.href}
              onClick={closeDropdown}
            >
              {product.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
