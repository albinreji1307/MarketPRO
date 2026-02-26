import React from "react";
import FreshOrder from "./FreshOrder";
import FlashSale from "./FlashSale";
import Recommended from "./Recommended";
import DiscountBanner from "./DiscountCard";
import DailyBestSells from "./DealSection";
import NewsLetter from "./NewsLetter";

function HomeGrocery() {
  return (
   <>
 <section className="max-w-[1600px] mx-auto px-4 mt-6">
     
     <FreshOrder/>
     <FlashSale/>
     <Recommended/>
    <DiscountBanner/>
    <DailyBestSells/>
    <NewsLetter/>
    </section>
    </>
  );
}

export default HomeGrocery;