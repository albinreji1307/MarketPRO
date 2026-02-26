import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../app/cartSlice";

import { useNavigate } from "react-router-dom";

function MainHeader() {
  const { wishlistCount } = useSelector((state) => state.ui);

  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [categorySearch, setCategorySearch] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const cartCount = useSelector(selectCartCount);
  const categories = [
    "Grocery",
    "Breakfast & Dairy",
    "Vegetables",
    "Milks and Dairies",
    "Pet Foods & Toy",
    "Snacks",
    "Fruits",
    "Tea & Coffee",
  ];

  const navigate = useNavigate();

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase()),
  );

  return (
    <div className="bg-white border-b relative">
      <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🛒</span>
          <h3 className="text-2xl font-bold text-green-600 mb-0">Marketpro</h3>
        </div>

        <div className="hidden lg:flex w-[600px] border rounded-lg relative">
          <div className="relative border-r">
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="px-4 py-2 bg-gray-100 text-sm flex items-center gap-2 h-full"
            >
              {selectedCategory}
              <span
                className={`text-xs transition-transform ${
                  showCategory ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {showCategory && (
              <div className="absolute top-full left-0 mt-2 w-[260px] bg-white shadow-xl rounded-xl border z-[999] p-4">
                <input
                  type="text"
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  placeholder="Search category..."
                  className="w-full border rounded-md px-3 py-2 mb-3 text-sm outline-none"
                />

                <div className="max-h-[220px] overflow-y-auto space-y-1">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowCategory(false);
                          setCategorySearch("");
                        }}
                        className={`px-3 py-2 rounded-md cursor-pointer text-sm ${
                          selectedCategory === cat
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {cat}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-400 px-2">
                      No categories found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <input
            className="flex-1 px-4 outline-none text-sm"
            placeholder="Search for products, categories or brands..."
          />

          <button className="bg-primary text-white px-6">🔍</button>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="lg:hidden text-xl"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            🔍
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl">👤</span>
            <span className="hidden lg:inline text-sm">Profile</span>
          </div>

          <div className="relative flex items-center gap-2 cursor-pointer">
            <span className="text-xl">❤️</span>
            <span className="hidden lg:inline text-sm">Wishlist</span>
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1 rounded-full">
              {wishlistCount}
            </span>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="relative flex items-center gap-2 cursor-pointer"
          >
            <span className="text-xl">🛒</span>

            <span className="hidden lg:inline text-sm">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {showMobileSearch && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex border rounded-lg overflow-hidden">
            <input
              className="flex-1 px-4 py-2 outline-none text-sm"
              placeholder="Search products..."
            />
            <button className="bg-primary text-white px-4">🔍</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHeader;
