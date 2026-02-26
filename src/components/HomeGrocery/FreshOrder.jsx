import React, { useEffect, useRef, useState } from "react";
import { fetchGroceryData, fetchPromoCards } from "../../api/fakeApi";
import Spinner from "../../Elements/spinner";
import CategoryModal from "../../Elements/GroceryModal";
import { useNavigate } from "react-router-dom";
function FreshOrder() {
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(0);
  const categoryRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchPromoCards().then((data) => {
      setCards(data);
    });
  }, []);

  useEffect(() => {
    fetchGroceryData().then((res) => setData(res));
  }, []);

  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === data.testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    const container = categoryRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollLeft += 200;
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [data]);

  if (!data) return <Spinner />;

  const testimonial = data.testimonials[current];

  return (
    <>
      <div className="relative h-[500px] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/aeb2f3_743abd229894464798b23c0814bf7557~mv2.png/v1/fill/w_980,h_419,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aeb2f3_743abd229894464798b23c0814bf7557~mv2.png')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#dff1f2]/60"></div>

        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? data.testimonials.length - 1 : prev - 1,
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 
                   w-14 h-14 rounded-full 
                   bg-[#7fb6c6]/70 flex items-center justify-center
                   shadow-lg hover:bg-[#5ea5ba] transition
                   z-[999]"
        >
          <span className="text-white text-xl">‹</span>
        </button>

        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === data.testimonials.length - 1 ? 0 : prev + 1,
            )
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 
                   w-14 h-14 rounded-full 
                   bg-[#7fb6c6]/70 flex items-center justify-center
                   shadow-lg hover:bg-[#5ea5ba] transition
                   z-[999]"
        >
          <span className="text-white text-xl">›</span>
        </button>

        <div className="relative h-full">
          {data.testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 px-6 md:px-32 
      flex flex-col-reverse md:flex-row 
      items-center justify-between gap-10
      ${index === current ? "z-10" : "z-0 pointer-events-none"}
    `}
            >
              <div className="max-w-xl text-center md:text-left">
                <div
                  className={`transition-all duration-[1000ms] ease-in-out
          ${
            index === current ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
                >
                  <span className="block text-green-600 font-semibold mb-3">
                    {item.subtitle}
                  </span>

                  <div className="flex items-end gap-4 flex-wrap mb-6">
  <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-800 leading-tight">
    {item.title}
  </h1>

  <div className="flex items-end gap-2">
    <span className="text-sm italic">Starting at</span>
    <span className="text-red-500 font-bold text-xl lg:text-3xl">
      {item.price}
    </span>
  </div>
</div>
                </div>

                <div className="lg:absolute lg:left-32 lg:bottom-16 mt-2 lg:mt-0 pb-5">
                  <button
                    onClick={() => navigate("/shop")}
                    className="mt-6 bg-green-600 text-white px-3 py-3 rounded-full  items-center font-medium text-xs hover:bg-green-700"
                  >
                    Explore Shop
                  </button>
                </div>
              </div>

              <div
                className={`transition-all duration-[1200ms] ease-in-out
        ${
          index === current
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0"
        }`}
              >
                <img
                  src={item.image}
                  alt="grocery"
                  className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[350px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <>
        <div
          ref={categoryRef}
          className="flex gap-6 overflow-x-auto scroll-smooth mt-12 pb-4 scrollbar-hide"
        >
          {data.categories.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCategory(item)}
              className="min-w-[140px] flex flex-col items-center cursor-pointer hover:scale-105 transition"
            >
              <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-gray-400">125+ Products</p>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <CategoryModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </>

      <div className="max-w-[1600px] mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-3xl overflow-hidden p-8 flex justify-between items-center bg-gradient-to-r ${card.bg}`}
          >
            <div className="max-w-[60%]">
              <h3 className="text-2xl font-semibold text-gray-800">
                {card.title}
              </h3>

              {card.price && (
                <p className="mt-3 text-sm italic text-gray-600">
                  Starting at{" "}
                  <span className="text-red-500 font-bold text-base">
                    {card.price}
                  </span>
                </p>
              )}

              <button
                className={`font-medium text-sm mt-6 text-white px-4 py-3 rounded-full 
  flex items-center gap-2 transition ${card.buttonColor}`}
              >
                Shop Now →
              </button>
            </div>

            <img
              src={card.image}
              alt={card.title}
              className="w-[130px] sm:w-[150px] lg:w-[180px] object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default FreshOrder;
