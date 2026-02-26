import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg z-50
        ${
          isVisible
            ? "bg-green-600 text-white border-green-600 scale-100"
            : "bg-white text-green-600 border-green-600 scale-0"
        }
      `}
    >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
    </button>
  );
}

export default ScrollToTopButton;