import { useState } from "react";

function DiscountBanner() {
  const [copied, setCopied] = useState(false);
  const code = "FREE25BAC";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="border border-dashed border-green-300 bg-green-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <h2 className="text-lg md:text-xl font-medium text-green-900">
        Super discount for your{" "}
        <span className="font-semibold underline">first purchase</span>
      </h2>

      <button
        onClick={handleCopy}
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
      >
        {copied ? "Copied ✅" : code}
      </button>

      <p className="text-sm text-green-800">
        Use discount code to get <span className="font-semibold">20%</span>{" "}
        discount
      </p>
    </div>
  );
}

export default DiscountBanner;
