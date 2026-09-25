// components/OffCanvas.tsx
import React, { useEffect, useRef } from "react";
import { Images } from "../../ui/images";
import Image from "next/image";
import Portal from "./Portal";

interface OffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean; // Optional prop
}

const OffCanvas: React.FC<OffCanvasProps> = ({
  isOpen,
  onClose,
  title,
  children,
  closeOnOutsideClick = false, // Default to false
}) => {
  const offCanvasRef = useRef<HTMLDivElement | null>(null);

  // Close the offcanvas when the "Escape" key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset"; // Enable scrolling again
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Close the offcanvas when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      offCanvasRef.current &&
      !offCanvasRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (closeOnOutsideClick && isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeOnOutsideClick, isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[9999] flex justify-end">
        <div className="fixed inset-0 bg-black/50 z-0" onClick={onClose}></div>
        <div
          ref={offCanvasRef}
          className="bg-white z-10 relative w-full md:w-2/5 xl:w-2/6 h-dvh  shadow-lg transform transition-transform"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="flex justify-between p-4 border-b border-platinum items-center">
            <div className="flex items-center gap-2">
              {Images.componentImages?.cartPrimary && (
                <Image
                  src={Images.componentImages.cartPrimary}
                  className="w-6 h-6"
                  alt="primary cart icon"
                />
              )}
              <h2 className="text-xl font-semibold">{title} </h2>
            </div>

            <button
              onClick={onClose}
              className="mb-0 rounded-md w-6 h-6 text-2xl flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
              <span>✖</span>
            </button>
          </div>
          <div className="mt-0 pb-24 overflow-y-scroll h-dvh  customScrollbar bg-[#f9fafb]">
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default OffCanvas;
