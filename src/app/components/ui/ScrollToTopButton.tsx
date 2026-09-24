"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Images } from "../../ui/images";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={scrollToTop}
            className="w-15 h-15 flex items-center justify-center rounded-full bg-primary hover:bg-primaryDark text-white transition duration-300 shadow-[rgba(0,0,0,0.4)_0px_4px_16px_0px] cursor-pointer"
          >
            <Image
              src={Images.componentImages.arrowWithTail}
              className="w-7 h-7 -rotate-90"
              alt=""
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
