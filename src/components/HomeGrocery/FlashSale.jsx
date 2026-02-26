import React, { useEffect, useRef, useState } from "react";
import { fetchFlashSales } from "../../api/fakeApi";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffer, updateTime } from "../../app/store";

function FlashSales() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const { timeLeft } = useSelector((state) => state.countdown);

  useEffect(() => {
    fetchFlashSales().then((data) => {
      setProducts(data);
    });
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(fetchOffer());

    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <>
      <div className="max-w-[1600px] mx-auto px-6 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Flash Sales Today
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 cursor-pointer">
              View All Deals
            </span>

            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[260px] bg-white border rounded-2xl p-5 relative"
            >
              <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                Add 🛒
              </div>

              <div className="flex justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 object-contain"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">${product.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.oldPrice}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                ⭐ {product.rating.rate} (17k)
              </p>

              <h3 className="font-medium mt-2">{product.name}</h3>

              <div className="mt-3">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-green-500 rounded-full"
                    style={{
                      width: `${(product.sold / product.total) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Sold: {product.sold}/{product.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Pasta"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />

          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              X-Connect Smart Television
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Time remaining until the end of the offer.
            </p>

            {timeLeft ? (
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <span className="bg-white px-3 md:px-4 py-2 rounded-lg shadow text-xs md:text-sm font-semibold">
                  {String(timeLeft.days).padStart(2, "0")} D
                </span>
                <span className="bg-white px-3 md:px-4 py-2 rounded-lg shadow text-xs md:text-sm font-semibold">
                  {String(timeLeft.hours).padStart(2, "0")} H
                </span>
                <span className="bg-white px-3 md:px-4 py-2 rounded-lg shadow text-xs md:text-sm font-semibold">
                  {String(timeLeft.minutes).padStart(2, "0")} M
                </span>
                <span className="bg-white px-3 md:px-4 py-2 rounded-lg shadow text-xs md:text-sm font-semibold">
                  {String(timeLeft.seconds).padStart(2, "0")} S
                </span>
              </div>
            ) : (
              <span>Loading...</span>
            )}

            <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold transition">
              Shop Now →
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Vegetables Combo Box
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Time remaining until the end of the offer.
            </p>

            {timeLeft ? (
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <span className="bg-teal-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold">
                  {String(timeLeft.days).padStart(2, "0")} D
                </span>
                <span className="bg-teal-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold">
                  {String(timeLeft.hours).padStart(2, "0")} H
                </span>
                <span className="bg-teal-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold">
                  {String(timeLeft.minutes).padStart(2, "0")} M
                </span>
                <span className="bg-teal-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold">
                  {String(timeLeft.seconds).padStart(2, "0")} S
                </span>
              </div>
            ) : (
              <span>Loading...</span>
            )}

            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold transition">
              Shop Now →
            </button>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
            alt="Vegetable Box"
            className="w-32 h-32 md:w-40 md:h-40 object-contain order-1 md:order-2"
          />
        </div>
      </div>
    </>
  );
}

export default FlashSales;
