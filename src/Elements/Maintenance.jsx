import { useLocation } from "react-router-dom";

function Maintenance() {
  const location = useLocation();

  const pageName = location.pathname.replace("/", "").replace(/-/g, " ");

  const formattedName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        {formattedName || "This Page"}
      </h1>

      <p className="text-gray-600 text-lg">🚧 Under Maintenance</p>

      <p className="text-gray-500 mt-2 max-w-md">
        This page is currently under development. Please check back later.
      </p>

      <a
        href="/"
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default Maintenance;
