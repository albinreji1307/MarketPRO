import { useEffect, useState } from "react";
import { getAllProducts, getCategories } from "../../api/productApi";
import ProductCard from "./productCard";
import Breadcrumb from "../../Elements/BrudCrumbs";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("popular");

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const productData = await getAllProducts();
    const categoryData = await getCategories();
    setProducts(productData);
    setFiltered(productData);
    setCategories(categoryData);
  };

  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  useEffect(() => {
    let temp = [...products];

    if (selectedCategory !== "all") {
      temp = temp.filter((p) => p.category === selectedCategory);
    }

    temp = temp.filter((p) => p.price <= Number(priceRange));

    if (selectedRatings.length > 0) {
      temp = temp.filter((product) =>
        selectedRatings.some((r) => product?.rating?.rate >= r),
      );
    }

    if (sortOption === "low") {
      temp.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "rating") {
      temp.sort((a, b) => (b?.rating?.rate || 0) - (a?.rating?.rate || 0));
    }

    setFiltered(temp);
    setCurrentPage(1);
  }, [selectedCategory, priceRange, selectedRatings, sortOption, products]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Breadcrumb title="Shop" />

      <div className="max-w-[1600px] mx-auto px-4 py-6">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-full bg-green-600 text-white py-2 rounded-lg"
          >
            {filterOpen ? "Hide Filters ▲" : "Show Filters ▼"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div
            className={`${filterOpen ? "block" : "hidden"} lg:block space-y-6`}
          >
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Product Category</h3>

              <p
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer mb-2 ${
                  selectedCategory === "all" && "text-green-600"
                }`}
              >
                All
              </p>

              {categories.map((cat, i) => (
                <p
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer capitalize mb-2 ${
                    selectedCategory === cat && "text-green-600"
                  }`}
                >
                  {cat}
                </p>
              ))}
            </div>

            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Filter by Price</h3>

              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full accent-green-600"
              />

              <p className="mt-2 text-sm text-green-600 font-medium">
                Max: ${priceRange}
              </p>
            </div>

            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Filter by Rating</h3>

              {[4, 3, 2, 1].map((r) => (
                <label key={r} className="flex items-center gap-2 mb-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(r)}
                    onChange={() => handleRatingChange(r)}
                  />
                  ⭐ {r} & above
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg border ${
                    viewMode === "list"
                      ? "bg-green-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  ☰
                </button>

                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg border ${
                    viewMode === "grid"
                      ? "bg-green-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  ⬛
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-600">Sort by:</span>

                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                >
                  <option value="popular">Popular</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "flex flex-col gap-6"
              }
            >
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center mt-10 gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                  className="px-4 py-2 border rounded disabled:opacity-40"
                >
                  ←
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => changePage(i + 1)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === i + 1
                        ? "bg-green-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                  className="px-4 py-2 border rounded disabled:opacity-40"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
