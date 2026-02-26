import { Link, useLocation } from "react-router-dom";

function Breadcrumb({ title }) {
  const location = useLocation();

  const pathName = location.pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ");

  const formattedName = pathName?.charAt(0).toUpperCase() + pathName?.slice(1);

  return (
    <div className="bg-gray-100 py-6 border-b">
      <div className="max-w-[1600px] mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-green-800">
          {title || formattedName}
        </h1>

        <div className="text-sm text-gray-600 flex items-center gap-2">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>

          <span className="text-gray-400">›</span>

          <span className="text-green-600 font-medium">
            {title || formattedName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
