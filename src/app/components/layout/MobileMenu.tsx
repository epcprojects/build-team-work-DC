




import React from "react";
import Link from "next/link";
import ProductsDropdown from "./ProductsDropdown";
import Image from "next/image";
import { Images } from "../../ui/images";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath: string;
  navLinks: Array<{ href: string; label: string }>;
  productsDropdown: Array<{
    href: string;
    label: string;
    image: string;
  }>;
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
  currentPath,
  navLinks,
  productsDropdown,
}: MobileMenuProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] lg:hidden transition-[visibility] duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-20 w-full p-4 overflow-y-auto bg-white md:px-6 md:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="" onClick={handleClose}>
            <span className="sr-only">Your Company</span>

            <Image
              src={Images.headerImages.logo}
              alt="cyber safety logo"
              className="w-auto h-12"
              loading="eager"
            />
          </Link>

          <button
            type="button"
            onClick={handleClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>

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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flow-root mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6 space-y-2">
              <nav className="flex flex-col gap-3">
                <Link
                  className={`nav-link text-base border-b border-[#dfdfdf] rounded-lg block font-medium py-2 px-4 ${
                    currentPath === "/"
                      ? "bg-secondary text-white"
                      : "text-black hover:bg-gray-m-100"
                  }`}
                  href="/"
                  onClick={handleClose}
                >
                  Home
                </Link>

                {navLinks.map((link) => (
                  <Link
                    className={`nav-link text-base border-b border-[#dfdfdf] rounded-lg hover:bg-[#f1f1f1] block py-2 px-4 ${
                      currentPath === link.href
                        ? "bg-secondary text-white"
                        : "text-black hover:bg-gray-m-100"
                    }`}
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                  >
                    {link.label}
                  </Link>
                ))}

                <ProductsDropdown
                  currentPath={currentPath}
                  productsDropdown={productsDropdown}
                  setIsOpen={setIsOpen}
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;