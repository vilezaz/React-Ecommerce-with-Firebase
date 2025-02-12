import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong, FaTrash } from "react-icons/fa6";
import toast from "react-hot-toast";
import {
  addToCart,
  decreaseQuantity,
  removeFromcart,
} from "../store/Slices/cart";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const decreaseproductQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decreaseQuantity(product));
    } else {
      dispatch(removeFromcart(product));
      toast.error("removed from cart!");
    }
  };

  const increaseproductQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const getTotalAmount = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
};

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center flex justify-center items-center flex-col gap-3 h-[80vh] pb-16 pt-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No products in cart found</h2>
        <button onClick={() => navigate("/products")} className="border-2 flex items-center gap-2 mx-auto m-3 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded transition-colors cursor-pointer">Continue Shopping<span><FaArrowLeftLong /></span></button>
      </div>
    );
  }

  return (
    <div className="md:w-[85%] w-full mx-auto px-2 py-20 md:py-32">
      <h1 className="text-center md:text-5xl text-3xl font-semibold">Cart</h1>
      <hr className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <div className="md:col-span-2 overflow-hidden bg-white shadow rounded-lg p-2">
          <h2 className="text-xl font-bold mb-4">Item List</h2>
          {cart.map((product) => (
            <div key={product.id} className="border-b pb-4 mb-4">
              <div className="flex items-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-bold">{product.title}</h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center space-x-5">
                    <button
                      onClick={() => decreaseproductQuantity(product)}
                      className="text-xl font-bold text-gray-600 px-2.5 rounded active:ring active:ring-blue-200">
                      –
                    </button>
                    <span className="px-4 py-2 text-sm bg-gray-100 rounded">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => increaseproductQuantity(product)}
                      className="text-xl font-bold text-gray-600 px-2 rounded active:ring active:ring-blue-200">
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text font-bold">
                      {product.quantity} x ${product.price}
                    </p>
                  </div>
                </div>
                <div className="px-3 md:px-10" onClick={() => {
                  dispatch(removeFromcart(product));
                  toast.error("product removed from cart!");
                }}>
                  <FaTrash className="text-gray-600 cursor-pointer hover:text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Foods ({getTotalItems()})</p>
            <p>${getTotalAmount()}</p>
          </div>
          <div className="flex justify-between text-xl font-bold mb-6">
            <p>SubTotal</p>
            <p>${(parseFloat(getTotalAmount())).toFixed(2)}</p>
          </div>
          <Link to={"/checkout"}>
            <button className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded hover:bg-blue-700">
              Go to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;