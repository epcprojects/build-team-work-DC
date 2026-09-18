"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import { Images } from "../../ui/images";
import Image from "next/image";
import { useCart } from "@/src/app/components/cart/useCart";

const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuClosed] = useState(false);
  const { itemCount, openCart } = useCart();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
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
  }, []);

  const currentPath = usePathname();

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contactus", label: "Contact Us" },
  ];

  const productsDropdown = [
    { href: "/business-essentials", label: "Business Essentials" },
    {
      href: "/employee-excellence",
      label: "Employee Excellence",
    },
    {
      href: "/emotional-intelligence",
      label: "Emotional Intelligence",
    },
    {
      href: "/healthy-body-and-mind",
      label: "Healthy Body and Mind",
    },
  ];

  return (
    <header className=" w-full shadow-lg sticky top-0 bg-white  z-[99]">
      <nav className="flex md:items-center justify-between md:flex-row flex-col gap-6 px-4 lg:px-0 py-4 container max-w-8xl  mx-auto bg-white ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex ">
              <Link className="-m-1.5 p-1.5" href="/">
                <span className="sr-only">Your Company</span>
                <Image
                  src={Images.headerImages.logo}
                  className="h-9 lg:h-[60px] w-fit"
                  alt="cyber safety training logo"
                  loading="eager"
                />
              </Link>
            </div>
          </div>
          <MobileMenuToggle isOpen={isMenuOpen} setIsOpen={setMenuClosed} />
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex flex-row lg:flex-col items-end gap-4 justify-end">
            <div className="flex items-center gap-3">
              <Link
                href="/training"
                className="border border-primary text-primary px-3 py-2 hover:bg-primary  hover:text-white text-sm md:text-base   rounded-lg"
              >
                <span className="text-sm "> My Training</span>
              </Link>
              <Link
                href="/login"
                className="border border-primary text-primary  px-3 py-2 hover:bg-primary  hover:text-white text-sm md:text-base   rounded-lg"
              >
                <span className="text-sm "> Login</span>
              </Link>

              <button
                type="button"
                onClick={openCart}
                className="bg-primary relative  p-2.5 px-3 border border-primary   text-white text-sm md:text-base font-medium hover:bg-primaryDark  rounded-lg"
              >
                <Image
                  src={Images.headerImages.cartIcon}
                  alt="cart icon"
                  className="w-5 h-5"
                />

                <span className="bg-red-600 text-xs border border-white absolute -end-2 -top-2 flex items-center justify-center  w-5 h-5 rounded-full text-white">
                  {itemCount}
                </span>
              </button>
            </div>
            <nav className="hidden lg:flex items-center gap-3">
              <Link
                className={`nav-link text-base block  rounded-lg py-2 px-4 ${
                  currentPath === "/"
                    ? "bg-secondary text-white"
                    : "text-black hover:bg-gray-m-100"
                }`}
                href="/"
              >
                Home
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className={`nav-link flex items-center gap-3 text-base  rounded-lg py-2 px-4 ${
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
                  <div className="absolute bg-white border-b-2 drop-shadow-xl border-secondary mt-2 pb-1">
                    {productsDropdown.map((product) => (
                      <Link
                        className={`block py-2 px-4 text-base  whitespace-nowrap ${
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

              {navLinks.map((link) => (
                <Link
                  className={`nav-link text-base block whitespace-nowrap  rounded-lg py-2 px-4 ${
                    currentPath === link.href
                      ? "bg-secondary text-white"
                      : "text-black hover:bg-gray-m-100"
                  }`}
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="md:block hidden lg:hidden">
              <button
                id="mobileMenuBtn"
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={() => setMenuClosed(false)}
        currentPath={currentPath}
        navLinks={navLinks}
        productsDropdown={productsDropdown}
      />
    </header>
  );
};

export default Header;
