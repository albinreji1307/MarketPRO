import React from "react";

function NewsLetter() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="bg-gray-200 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Stay home & get your daily <br />
              needs from our shop
            </h2>

            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none"
              />
              <button className="bg-green-600 text-white px-6 rounded-r-lg hover:bg-green-700 transition text-sm font-bold whitespace-nowrap">
                Subscribe now
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              I agree that my submitted data is being collected and stored.
            </p>
          </div>

          <div>
            <img
              src="https://nextjs.marketpro.wowtheme7.com/assets/images/thumbs/flash-sale-img1.png"
              alt="basket"
              className="h-64 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">Marketpro</h3>
          <p className="text-gray-600 mb-4">
            We're Grocery Shop, an innovative team of food suppliers.
          </p>

          <p className="text-sm text-gray-600">
            Plamoottil House Palakkayam post Palakkad 678591
          </p>

          <p className="text-sm text-gray-600 mt-2">support@market.com</p>

          <p className="text-sm text-gray-600 mt-2">+ 123 456 789</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Information</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Privacy Policy</li>
            <li>Our Suppliers</li>
            <li>Extended Plan</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Customer Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Report Abuse</li>
            <li>Submit and Dispute</li>
            <li>Policies & Rules</li>
            <li>Online Shopping</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">My Account</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Compare</li>
            <li>Help Ticket</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Shop on The Go</h4>

          <p className="text-sm text-gray-600 mb-4">
            MarketPro App is available. Get it now
          </p>

          <div className="space-y-3">
            <button className="w-full bg-white border rounded-lg py-2 shadow-sm">
               App Store
            </button>
            <button className="w-full bg-white border rounded-lg py-2 shadow-sm">
              ▶ Google Play
            </button>
          </div>

          <div className="flex gap-3 mt-6">
            <img
              src="https://pngimg.com/uploads/visa/visa_PNG30.png"
              alt="visa"
              className="h-6"
            />
            <img
              src="https://pngimg.com/uploads/mastercard/mastercard_PNG23.png"
              alt="mastercard"
              className="h-6"
            />
            <img
              src="https://pngimg.com/uploads/paypal/paypal_PNG7.png"
              alt="paypal"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
