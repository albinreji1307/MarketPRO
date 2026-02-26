Marketpro
E-COMMERCE WEB APPLICATION
This project is a modern( Grocery )E-Commerce Web Application built using React, Redux Toolkit, Tailwind CSS, and a custom Demo API.
The application allows users to browse products, add them to cart, view product details, and manage their shopping cart efficiently

Technologies Used 
•	React JS 
•	Redux Toolkit – State management 
•	React Router – Page navigation 
•	Tailwind CSS – Styling 
•	Custom Demo API  
•	JavaScript (ES6+) 

Features 
•	Product listing with dynamic API data 
•	Product modal with detailed view 
•	Add to Cart functionality with Redux 
•	dynamic cart count in Navbar 
•	Auto-changing Daily Best Sells section 
•	banner image rotation and independent product changing 
•	Scroll-to-top button with animation , custom spinning
•	Newsletter subscription section 
•	Responsive design for all screen sizes


State Management (Redux)
   Redux Toolkit is used to manage cart state globally. 
   The cartSlice  contains reducers for: addToCart, increaseQty, decreaseQty, removeItem, and clearCart.
   Cart count is derived using a reduce function on cart items.

Dynamic Auto-Rotating Sections 
The Daily Best Sells section uses multiple useEffect hooks with setInterval to rotate product cards independently. 
The banner image also rotates every 7 seconds. Cleanup functions are implemented to prevent memory leaks.

Key
The MarketPRO project is developed using a modular approach by dividing the UI into reusable components like Header, Footer, Navbar, and Product sections.
It uses functional components and React Hooks to manage data efficiently.
The project follows a clean folder structure, ensures responsive design for all devices, a
nd avoids placing all HTML in a single file to maintain better organization and readability.



