"use client";
import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
        ${isVisible ? "opacity-100" : "opacity-0"}
         hover:bg-blue-600 inline-flex items-center rounded-full p-3 text-white bg-blue-600 shadow-sm transition-opacity focus:outline-none
      `}
      >
        <BiArrowFromBottom className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
