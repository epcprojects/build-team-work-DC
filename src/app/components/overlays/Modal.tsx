"use client";
import React, { useEffect, useRef } from "react";
import Portal from "./Portal";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  size?: string;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = "small",
  closeOnOutsideClick = false,
  showCloseButton = false,
  closeOnEsc = false,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (closeOnEsc && isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeOnEsc, isOpen, onClose]);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
      <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 md:p-0 p-3">
        <div
          ref={modalRef}
          className={`bg-white rounded-lg shadow-lg  w-full overflow-hidden relative ${
            size === "small"
              ? "max-w-md"
              : size === "medium"
                ? " max-w-2xl"
                : size === "large"
                  ? "max-w-3xl"
                  : ""
          }`}
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 hover:bg-gray-m-100 rounded-md w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
              <span>✖ </span>
            </button>
          )}
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
