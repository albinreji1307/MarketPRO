import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openCategory, setOpenCategory] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  const menus = [
    {
      name: "Home",
      path: "/",
      submenu: [
        { name: "Home Grocery", path: "/home-grocery" },
        { name: "Home Electronics", path: "/home-electronics" },
        { name: "Home Fashion", path: "/home-fashion" },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
      submenu: [
        { name: "Shop ", path: "/shop" },
        { name: "Shop Details", path: "/shop-details" },
      ],
    },
    { name: "Pages", path: "/pages" },
    { name: "Vendors", path: "/vendors" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const categories = [
    { name: "Vegetables", icon: "🥦", path: "/shop" },
    { name: "Milk & Cake", icon: "🥛", path: "/category/milk-cake" },
    { name: "Grocery", icon: "🛒", path: "/category/grocery" },
    { name: "Beauty", icon: "💄", path: "/category/beauty" },
    { name: "Wines & Drinks", icon: "🍷", path: "/category/wines-drinks" },
    { name: "Snacks", icon: "🍪", path: "/category/snacks" },
    { name: "Juice", icon: "🧃", path: "/category/juice" },
    { name: "Fruits", icon: "🍎", path: "/category/fruits" },
    { name: "Tea & Coffee", icon: "☕", path: "/category/tea-coffee" },
  ];

  const isMenuActive = (menu) => {
    if (menu.submenu) {
      return menu.submenu.some((sub) => location.pathname.startsWith(sub.path));
    }
    return location.pathname.startsWith(menu.path);
  };

  return (
    <>
      <div className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-[1600px] mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              Browse Categories
              <span>{showCategories ? "▲" : "▼"}</span>
            </button>

            {showCategories && (
              <div className="absolute top-full mt-2 w-[600px] bg-white rounded-xl shadow-lg p-6 grid grid-cols-3 gap-4 z-50">
                {categories.map((cat, index) => (
                  <NavLink
                    key={index}
                    to={cat.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 p-2 rounded ${
                        isActive
                          ? "bg-green-100 text-green-600"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    <span className="text-xl">{cat.icon}</span>
                    {cat.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div className="hidden lg:flex gap-8 items-center">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(menu.name)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <NavLink
                  to={menu.path}
                  className={`flex items-center gap-1 ${
                    isMenuActive(menu)
                      ? "text-green-600 font-semibold"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {menu.name}
                  {menu.submenu && (
                    <span>{desktopDropdown === menu.name ? "▲" : "▼"}</span>
                  )}
                </NavLink>

                {menu.submenu && desktopDropdown === menu.name && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 w-52">
                    {menu.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block py-2 px-2 rounded ${
                            isActive
                              ? "bg-green-100 text-green-600"
                              : "hover:bg-gray-100"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 ${mobileOpen ? "visible" : "invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        ></div>

        <div
          className={`absolute left-0 top-0 h-full w-[300px] bg-white shadow-xl transform transition-transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-green-600">Marketpro</h2>
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto h-full">
            {menus.map((menu, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <NavLink
                    to={menu.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-medium ${
                      isMenuActive(menu) ? "text-green-600" : "text-gray-700"
                    }`}
                  >
                    {menu.name}
                  </NavLink>

                  {menu.submenu && (
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === menu.name ? null : menu.name)
                      }
                    >
                      {openMenu === menu.name ? "▲" : "▼"}
                    </button>
                  )}
                </div>

                {menu.submenu && openMenu === menu.name && (
                  <div className="pl-4 mt-2 space-y-1">
                    {menu.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block text-sm py-1 ${
                            isActive ? "text-green-600" : "text-gray-600"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Categories</span>
                <button onClick={() => setOpenCategory(!openCategory)}>
                  {openCategory ? "▲" : "▼"}
                </button>
              </div>

              {openCategory && (
                <div className="pl-4 mt-2 space-y-2">
                  {categories.map((cat, index) => (
                    <NavLink
                      key={index}
                      to={cat.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-2 text-sm py-1 ${
                          isActive ? "text-green-600" : "text-gray-600"
                        }`
                      }
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
