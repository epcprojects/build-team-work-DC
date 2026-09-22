import React from "react";

interface MobileMenuToggleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuToggle = ({ isOpen, setIsOpen }: MobileMenuToggleProps) => {
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={handleMenuToggle}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-gray-700 border-1 border-platinum"
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
  );
};

export default MobileMenuToggle;
