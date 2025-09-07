// pages/Cart.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import HeroSection from "../components/layouts/HeroSection";
import BackgroundImage from "../asset/images/background-6.jpg";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  removeItem,
  selectCartItem,
  selectCartTotal,
  updateQuantity,
} from "../features/carts/cartSlice";
import Footer from "../components/layouts/Footer";

const Cart: React.FC = () => {
  const cartItems = useAppSelector(selectCartItem);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Navbar />
      <HeroSection
        title="Your Shopping Cart"
        subtitle="Checkout your picks from our collection."
        backgroundUrl={BackgroundImage}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        cta={{ label: "Shop All", href: "/shop" }}
        heightClass="h-[44vh]"
      />
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold"></h2>

        {cartItems.length === 0 ? (
          <div className="mt-8 flex flex-col items-center">
            <p className="text-lg text-gray-700">Your cart is empty! 😿</p>
            <Link
              to="/"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go Back to Products
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ul className="lg:col-span-2 space-y-6">
                {cartItems.map((item: any) => (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex flex-col flex-grow">
                      <p className="font-bold text-slate-900 text-xl">
                        {item.name} - ${item.price}
                      </p>
                      <p className="text-justify text-sm text-gray-700 mt-2">
                        {item.description}
                      </p>
                      <div className="flex items-center mt-4 gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="px-2 py-1 bg-gray-300 rounded disabled:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Summary & Checkout column */}
              <aside className="bg-white p-6 rounded shadow h-fit">
                <h3 className="font-semibold mb-4">Order Summary</h3>

                <div className="space-y-4">
                  {cartItems.map((it: any) => (
                    <div key={it.id} className="flex items-center gap-3">
                      <img
                        src={it.img}
                        alt={it.name}
                        className="w-14 h-14 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium">{it.name}</div>
                        <div className="text-sm text-gray-500">
                          x{it.quantity} • ${it.price}
                        </div>
                      </div>
                      <div className="font-semibold">
                        ${(it.price * it.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t my-4 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${Number(total).toFixed(2)}</span>
                  </div>
                  {/* If you have shipping or taxes, show them here */}
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${Number(total).toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout button */}
                <Link
                  to="/checkout"
                  className={`block text-center px-4 py-3 rounded font-semibold ${
                    cartItems.length === 0
                      ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                  aria-disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Link>

                <div className="text-xs text-gray-500 mt-3">
                  Secure checkout — demo payments only.
                </div>
              </aside>
            </div>
          </>
        )}
      </div>

      {/* Optional: a sticky mobile checkout bar for small screens */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-50 w-[90%]">
          <Link
            to="/checkout"
            className="w-full flex items-center justify-between bg-purple-600 text-white px-4 py-3 rounded-lg shadow-lg"
          >
            <span>Proceed to Checkout</span>
            <span className="font-bold">${Number(total).toFixed(2)}</span>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
