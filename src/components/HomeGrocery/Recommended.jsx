import React, { useEffect, useState } from "react";
import { fetchGroceryData } from "../../api/fakeApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/cartSlice";
import { useNavigate } from "react-router-dom";

function Recommended() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    fetchGroceryData().then((res) => {
      setProducts(res.testimonials.slice(0, 10));
      setLoading(false);
    });
  }, []);

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: Number(item.price.replace("$", "")),
      }),
    );

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 py-20 grid grid-cols-5 gap-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-200 h-64 rounded-2xl"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <>
      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Item added to cart 🛒
        </div>
      )}

      <section className="max-w-[1600px] mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10">Recommended for you</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((item) => {
            const isInCart = items.some((cartItem) => cartItem.id === item.id);

            return (
              <div
                key={item.id}
                className="relative bg-white border rounded-2xl p-5 hover:shadow-xl transition"
              >
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  Sale 50%
                </span>

                <div className="h-40 flex items-center justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 object-contain hover:scale-110 transition"
                  />
                </div>

                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  By Lucky Supermarket
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    $28.99
                  </span>
                </div>

                <div className="text-sm text-yellow-500 mb-4">⭐ 4.8 (17k)</div>

                {!isInCart ? (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
                  >
                    Add To Cart 🛒
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/cart")}
                    className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    Go To Cart 🛒
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Recommended;
