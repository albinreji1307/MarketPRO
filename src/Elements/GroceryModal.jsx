import { useEffect } from "react";

function CategoryModal({ category, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative bg-white w-[95%] max-w-3xl rounded-xl p-8 shadow-xl z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>

          <p className="text-gray-600 mb-6">
            Browse all products under{" "}
            <span className="font-medium">{category.name}</span>.
          </p>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
