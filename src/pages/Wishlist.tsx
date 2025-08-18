// pages/Wishlist.tsx
import React from "react";
import Navbar from "../components/layouts/NavBar";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  selectWishlistItems,
  removeFromWishlist,
  clearWishlist,
} from "../features/wish/wishlistSlice";
import { addItem } from "../features/carts/cartSlice";
import { Link } from "react-router-dom";

const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlistItems);

  const handleMoveToCart = (item: any) => {
    dispatch(
      addItem({
        id: item.id,
        img: item.img,
        name: item.name,
        price: item.price,
        description: item.description,
        quantity: 1,
      })
    );
    dispatch(removeFromWishlist(item.id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Your Wishlist</h1>
          {wishlist.length > 0 && (
            <button
              onClick={() => dispatch(clearWishlist())}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">
              No items in your wishlist yet.
            </p>
            <Link
              to="/"
              className="mt-4 inline-block px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item: any) => (
              <div
                key={item.id}
                className="bg-white shadow rounded p-4 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="mt-3 flex-1">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
