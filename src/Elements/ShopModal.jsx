import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductModal({ product, onClose, onAdd }) {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const ratingValue = product?.rating?.rate || 0;

  const isInCart = items.some((item) => item.id === product?.id);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative bg-white w-[95%] max-w-3xl rounded-xl p-6 shadow-xl z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[300px] object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{product.title}</h2>

            <p className="text-yellow-500 mt-3">⭐ {ratingValue}</p>

            <p className="text-2xl font-bold text-green-600 mt-4">
              ${product.price}
            </p>

            <p className="text-gray-600 mt-4">{product.description}</p>

            {!isInCart ? (
              <button
                onClick={onAdd}
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Add To Cart
              </button>
            ) : (
              <button
                onClick={() => navigate("/cart")}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Go To Cart 🛒
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
