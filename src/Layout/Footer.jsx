import React from "react";

function Footer() {
  return (
    <footer className="border-t mt-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          Copyright © <span className="text-green-600 font-semibold">2025</span>{" "}
          Ui-drops All Rights Reserved
        </p>

        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition">
              f
            </div>

            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition">
              t
            </div>

            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition">
              i
            </div>

            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition">
              in
            </div>
          </div>

        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
