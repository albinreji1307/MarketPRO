import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/cartSlice";
import { useNavigate } from "react-router-dom";
import ProductModal from "../../Elements/ShopModal";

function ProductCard({ product, viewMode }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ratingValue = product?.rating?.rate || 0;
  const { items } = useSelector((state) => state.cart);

  const isInCart = items.some(item => item.id === product?.id);


  const handleAddToCart = (e) => {
    e.stopPropagation(); 

    dispatch(addToCart(product));
  };

  const openModal = () => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="bg-white border rounded-xl p-4 flex flex-col shadow-sm hover:shadow-md transition h-full cursor-pointer"
      >
        <div className="h-40 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>

        <div className="flex flex-col flex-1 mt-4">
          <h4 className="font-medium line-clamp-2 min-h-[48px]">
            {product.title}
          </h4>

          <p className="text-yellow-500 mt-2">
            ⭐ {ratingValue}
          </p>

          <p className="text-lg font-bold mt-2">
            ${product.price}
          </p>

 
          {!isInCart ? (
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add To Cart
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                navigate("/cart");
              }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Go To Cart 🛒
            </button>
          )}
        </div>
      </div>

    
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAdd={(product) => dispatch(addToCart(product))}
        />
      )}
    </>
  );
}

export default ProductCard;