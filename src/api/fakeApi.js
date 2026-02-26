export const fetchOfferAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        offerName: "Mega Flash Sale",
        endDate: "2026-04-01T23:59:59",
        cartCount: 4,
        wishlistCount: 7,
      });
    }, 1000);
  });
};

export const fetchGroceryData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        testimonials: [
          {
    id: 1,
    title: "Daily Grocery Order ",
    subtitle: "Save Up To 50% Off On Your First Order",
    price: "$60.99",
    image: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
 
  {
    id: 3,
    title: "Organic Dairy Products",
    subtitle: "Farm Fresh Everyday",
    price: "$25.99",
    image: "https://pngimg.com/uploads/milk/milk_PNG12758.png",
  },
  {
    id: 4,
    title: "Premium Quality Chicken & Meat",
    subtitle: "Fresh & Hygienic Cuts",
    price: "$89.99",
    image: "https://pngimg.com/uploads/chicken/chicken_PNG2148.png",
  },
 
  {
    id: 7,
    title: "Organic Fruits & Berries",
    subtitle: "Naturally Sweet & Fresh",
    price: "$45.99",
    image: "https://pngimg.com/uploads/strawberry/strawberry_PNG2596.png",
  },
  {
    id: 8,
    title: "Fresh Bakery Products",
    subtitle: "Hot & Delicious",
    price: "$18.99",
    image: "https://pngimg.com/uploads/bread/bread_PNG2289.png",
  },
  
  {
    id: 10,
    title: "Fresh Green Vegetables",
    subtitle: "Straight From Farm",
    price: "$29.99",
    image: "https://pngimg.com/uploads/broccoli/broccoli_PNG72963.png",
  },
  {
    id: 11,
    title: "Juicy Citrus Fruits",
    subtitle: "Rich In Vitamin C",
    price: "$32.99",
    image: "https://pngimg.com/uploads/orange/orange_PNG789.png",
  },
  {
    id: 13,
    title: "Frozen Food Specials",
    subtitle: "Quick & Easy Meals",
    price: "$48.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG44095.png",
  },
  {
    id: 14,
    title: "Fresh Juices & Beverages",
    subtitle: "Cool & Refreshing",
    price: "$19.99",
    image: "https://pngimg.com/uploads/juice/juice_PNG7157.png",
  },
  {
  id: 16,
  title: "Premium Organic Bananas",
  subtitle: "Fresh & Naturally Sweet",
  price: "$21.99",
  image: "https://pngimg.com/uploads/banana/banana_PNG842.png",
},
{
  id: 17,
  title: "Fresh Carrots in Farm",
  subtitle: "Healthy & Crunchy",
  price: "$14.99",
  image: "https://pngimg.com/uploads/carrot/carrot_PNG4985.png",
},

{
  id: 20,
  title: "Premium Red Grapes",
  subtitle: "Sweet & Juicy",
  price: "$26.99",
  image: "https://pngimg.com/uploads/grape/grape_PNG2997.png",
},
{
  id: 21,
  title: "Fresh Mangoes Seasonal Special",
  subtitle: "Naturally Ripened",
  price: "$39.99",
  image: "https://pngimg.com/uploads/mango/mango_PNG9185.png",
},
{
  id: 22,
  title: "Healthy Almond Milk",
  subtitle: "Dairy Free & Organic",
  price: "$17.99",
  image: "https://pngimg.com/uploads/milk/milk_PNG12746.png",
},

{
  id: 24,
  title: "Premium Cashew Nuts",
  subtitle: "Healthy Snacking Option",
  price: "$44.99",
  image: "https://pngimg.com/uploads/cashew/cashew_PNG31.png",
},
{
  id: 25,
  title: "Fresh Pineapple Special",
  subtitle: "Sweet & Tropical",
  price: "$28.99",
  image: "https://pngimg.com/uploads/pineapple/pineapple_PNG2758.png",
}
 
        ],
       categories: [
  {
    id: 1,
    name: "Fresh Fruits",
    image: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
 
  {
    id: 3,
    name: "Fish & Meats",
    image: "https://pngimg.com/uploads/fish/fish_PNG25140.png",
  },
  {
    id: 4,
    name: "Dairy & Eggs",
    image: "https://pngimg.com/uploads/egg/egg_PNG40798.png",
  },
  {
    id: 5,
    name: "Snacks",
    image: "https://pngimg.com/uploads/popcorn/popcorn_PNG17.png",
  },
  
  {
    id: 7,
    name: "Vegetables",
    image: "https://pngimg.com/uploads/broccoli/broccoli_PNG72963.png",
  },
  {
    id: 8,
    name: "Desserts",
    image: "https://pngimg.com/uploads/cake/cake_PNG13102.png",
  },
  {
    id: 9,
    name: "Beverages",
    image: "https://pngimg.com/uploads/juice/juice_PNG7157.png",
  },
 {
  id: 11,
  name: "Fresh Mango",
  image: "https://pngimg.com/uploads/mango/mango_PNG9185.png",
},
{
  id: 12,
  name: "Bananas",
  image: "https://pngimg.com/uploads/banana/banana_PNG842.png",
},
{
  id: 13,
  name: "Carrots",
  image: "https://pngimg.com/uploads/carrot/carrot_PNG4985.png",
},
{
  id: 14,
  name: "Tomatoes",
  image: "https://pngimg.com/uploads/tomato/tomato_PNG12579.png",
},
{
  id: 15,
  name: "Green Grapes",
  image: "https://pngimg.com/uploads/grape/grape_PNG2997.png",
},

{
  id: 17,
  name: "Pineapple",
  image: "https://pngimg.com/uploads/pineapple/pineapple_PNG2758.png",
},
{
  id: 18,
  name: "Strawberries",
  image: "https://pngimg.com/uploads/strawberry/strawberry_PNG2596.png",
},

{
  id: 20,
  name: "Red Onions",
  image: "https://pngimg.com/uploads/onion/onion_PNG99217.png",
},
{
  id: 21,
  name: "Potatoes",
  image: "https://pngimg.com/uploads/potato/potato_PNG7086.png",
},

{
  id: 23,
  name: "Bell Pepper",
  image: "https://pngimg.com/uploads/pepper/pepper_PNG3265.png",
},
{
  id: 24,
  name: "Fresh Bread",
  image: "https://pngimg.com/uploads/bread/bread_PNG2289.png",
},
{
  id: 25,
  name: "Cheese",
  image: "https://pngimg.com/uploads/cheese/cheese_PNG25306.png",
}
]
      });
    }, 1000);
  });
};
export const fetchPromoCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
       {
  id: 1,
  title: "Everyday Fresh Meat",
  price: "$60.99",
  image: "https://pngimg.com/uploads/beef/beef_PNG43.png",
  bg: "from-blue-100 to-blue-200",
  buttonColor: "bg-blue-500 hover:bg-blue-600"
},
{
  id: 2,
  title: "Daily Fresh Vegetables",
  price: "$45.99",
  image: "https://pngimg.com/uploads/broccoli/broccoli_PNG72963.png",
  bg: "from-green-100 to-green-200",
  buttonColor: "bg-green-500 hover:bg-green-600"
},
{
  id: 3,
  title: "Everyday Fresh Milk",
  price: "$30.99",
  image: "https://pngimg.com/uploads/milk/milk_PNG12758.png",
  bg: "from-gray-100 to-gray-200",
  buttonColor: "bg-gray-500 hover:bg-gray-600"
},
{
  id: 4,
  title: "Everyday Fresh Fruits",
  price: "$25.99",
  image: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  bg: "from-yellow-100 to-yellow-200",
  buttonColor: "bg-yellow-500 hover:bg-yellow-600"
}
      ]);
    }, 800);
  });
};


export const fetchFlashSales = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: 14.99,
          oldPrice: 28.99,
          rating: 4.8,
          sold: 18,
          total: 35,
          image:
            "https://nextjs.marketpro.wowtheme7.com/assets/images/thumbs/flash-sale-img1.png",
        },
        {
          id: 2,
          name: "Organic Whole Grain Bread",
          price: 14.99,
          oldPrice: 28.99,
          rating: 4.8,
          sold: 18,
          total: 35,
          image:
            "https://nextjs.marketpro.wowtheme7.com/assets/images/thumbs/flash-sale-img2.png",
        },
     {
  id: 3,
  name: "Frozen Salmon Fillet",
  price: 14.99,
  oldPrice: 28.99,
  rating: 4.8,
  sold: 18,
  total: 35,
image: "https://seafoodfriday.hk/wp-content/uploads/2022/11/frozen-salmon-fillet-200gr.jpg",
},
{
  id: 4,
  name: "Instant Noodles Pack",
  price: 14.99,
  oldPrice: 28.99,
  rating: 4.8,
  sold: 18,
  total: 35,
  image: "https://tse2.mm.bing.net/th/id/OIP.8bicJxLw5fV9rUH1Q0D5kQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
},
{
  id: 5,
  name: "Fresh Shrimp Pack",
  price: 14.99,
  oldPrice: 28.99,
  rating: 4.8,
  sold: 18,
  total: 35,
  image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/064a072b-18c0-4eca-8bad-923abc1f1d96-retina-large.jpg",
},
{
  id: 6,
  name: "Burger Buns Pack",
  price: 14.99,
  oldPrice: 28.99,
  rating: 4.8,
  sold: 18,
  total: 35,
  image: "https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f8c17529-eba2-4b66-8e28-e582b8eedc16.JPG",
}
      ]);
    }, 800);
  });
};