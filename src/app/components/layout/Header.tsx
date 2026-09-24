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
    {
      href: "/business-essentials",
      label: "Business Essentials",
      image: "/images/products/businessIntelligence.svg",
    },
    {
      href: "/employee-excellence",
      label: "Employee Excellence",
      image: "/images/products/employeeExcellence.svg",
    },
    {
      href: "/emotional-intelligence",
      label: "Emotional Intelligence",
      image: "/images/products/emotionalIntelligence.svg",
    },
    {
      href: "/healthy-body-and-mind",
      label: "Healthy Body and Mind",
      image: "/images/products/healthyBodyMind.svg",
    },
  ];

  const isProductActive = productsDropdown.some(
    (product) => currentPath === product.href,
  );

  return (
    <>
      <header className=" w-full shadow-lg sticky top-0 bg-white  z-99">
        <nav className="flex md:items-center justify-between md:flex-row flex-col gap-6 md:px-8 px-4 py-4 container max-w-8xl  mx-auto bg-white ">
          <div className="">
            <div className="flex items-center justify-between gap-12">
              <div className="flex ">
                <Link className="-m-1.5 p-1.5" href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    src={Images.headerImages.logo}
                    className="h-15 w-fit "
                    alt="cyber safety training logo"
                    loading="eager"
                  />
                </Link>
              </div>
              <div className="mr-2 md:hidden block ">
                <MobileMenuToggle
                  isOpen={isMenuOpen}
                  setIsOpen={setMenuClosed}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-row lg:flex-col items-end gap-2 justify-end">
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

              <div className="ml-2 md:block hidden">
                <MobileMenuToggle
                  isOpen={isMenuOpen}
                  setIsOpen={setMenuClosed}
                />
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
                    className={`nav-link cursor-pointer flex items-center gap-3 text-base  rounded-lg py-2 px-4 ${
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
                    <div className="absolute bg-white drop-shadow-xl  mt-2 pb-1 w-65">
                      {productsDropdown.map((product) => (
                        <Link
                          className={` py-2.5 px-4 text-base  whitespace-nowrap flex gap-2   ${
                            currentPath === product.href
                              ? " text-black"
                              : "text-black hover:bg-gray-m-100"
                          }`}
                          key={product.href}
                          href={product.href}
                          onClick={closeDropdown}
                        >
                          <Image
                            src={product.image}
                            alt=""
                            width={24}
                            height={20}
                          />
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
            </div>
          </div>
        </nav>
        <MobileMenu
          isOpen={isMenuOpen}
          setIsOpen={setMenuClosed}
          currentPath={currentPath}
          navLinks={navLinks}
          productsDropdown={productsDropdown}
        />
      </header>
    </>
  );
};

export default Header;
