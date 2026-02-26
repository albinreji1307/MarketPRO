import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../../app/cartSlice";
import Breadcrumb from "../../Elements/BrudCrumbs";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <>
      <Breadcrumb title="Cart" />
      <div className="max-w-[1600px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border rounded-lg p-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-6"
            >
              <div className="flex items-center gap-6">
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 text-xl"
                >
                  ✕
                </button>

                <img src={item.image} className="h-20" />

                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center border rounded">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-3"
                >
                  -
                </button>

                <span className="px-4">{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-3"
                >
                  +
                </button>
              </div>

              <div className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-6">Cart Totals</h3>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Estimated Tax (5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
