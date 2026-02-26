import { useEffect, useState } from "react";
import { fetchGroceryData } from "../../api/fakeApi";

function DailyBestSells() {
  const [products, setProducts] = useState([]);

  const [indexes, setIndexes] = useState([0, 1, 2, 3]);

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    fetchGroceryData().then((res) => {
      setProducts(res.testimonials);
    });
  }, []);

  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      setIndexes((prev) => [
        (prev[0] + 1) % products.length,
        prev[1],
        prev[2],
        prev[3],
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      setIndexes((prev) => [
        prev[0],
        (prev[1] + 1) % products.length,
        prev[2],
        prev[3],
      ]);
    }, 6000);
    return () => clearInterval(interval);
  }, [products]);

  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      setIndexes((prev) => [
        prev[0],
        prev[1],
        (prev[2] + 1) % products.length,
        prev[3],
      ]);
    }, 7000);
    return () => clearInterval(interval);
  }, [products]);

  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      setIndexes((prev) => [
        prev[0],
        prev[1],
        prev[2],
        (prev[3] + 1) % products.length,
      ]);
    }, 8000);
    return () => clearInterval(interval);
  }, [products]);

  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % products.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [products]);

  if (!products.length) return null;

  return (
    <section className="max-w-[1600px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Daily Best Sells</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {indexes.map((i, idx) => {
            const item = products[i];

            return (
              <div
                key={idx}
                className="bg-white border rounded-2xl p-5 flex gap-6 items-center hover:shadow-lg transition duration-500"
              >
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 object-contain transition-all duration-500"
                  />
                </div>

                <div>
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    Sale 50%
                  </span>

                  <h3 className="mt-3 font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-yellow-500 text-sm mt-2">⭐ 4.8 (17k)</p>

                  <div className="mt-2">
                    <span className="text-lg font-bold text-green-600">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      $28.99
                    </span>
                  </div>

                  <button className="mt-4 bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition">
                    Add To Cart 🛒
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold">$5 off your first order</h3>

            <p className="text-sm text-gray-600 mt-2">
              Delivery by 6:15am · Expire Aug 5
            </p>

            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              Shop Now →
            </button>
          </div>

          <img
            src={products[bannerIndex].image}
            alt="promo"
            className="mt-8 h-48 object-contain transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}

export default DailyBestSells;
