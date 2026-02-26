import { useEffect, useState } from "react";

export default function Spinner() {
  const products = [
    "https://cdn-icons-png.flaticon.com/512/590/590685.png",
    "https://cdn-icons-png.flaticon.com/512/135/135620.png",
    "https://cdn-icons-png.flaticon.com/512/415/415682.png",
    "https://cdn-icons-png.flaticon.com/512/2909/2909765.png",
  ];

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const switchInterval = setInterval(() => {
      setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 80);
    const stopTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(switchInterval);
    }, 2000);

    return () => {
      clearInterval(switchInterval);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md z-50">
          <img
            src={products[index]}
            alt="loading"
            className="w-20 h-20 object-contain"
          />
        </div>
      )}
    </div>
  );
}
