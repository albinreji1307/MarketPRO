import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Spinner from "./Elements/spinner";
import { Navigate } from "react-router-dom";
import Maintenance from "./Elements/Maintenance";
import Cart from "./components/Shop/cart";
import ScrollToTopButton from "./Elements/ScrollToTop";

const HomeGrocery = lazy(() => import("./components/HomeGrocery/HomeGrocery"));
const Shop = lazy(() => import("./components/Shop/shop"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home-grocery" />} />
          <Route path="/home-grocery" element={<HomeGrocery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Maintenance />} />
        </Routes>
        <ScrollToTopButton />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
