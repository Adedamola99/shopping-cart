// components/shop/ProductGrid.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addItem } from "../../features/carts/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../features//wish/wishlistSlice";
import type { Products } from "../../features/products/productSlice";

interface ProductGridProps {
  products: Products[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlistItems);

  const isInWishlist = (id: number) => wishlist.some((i: any) => i.id === id);

  const toggleWishlist = (product: Products) => {
    if (isInWishlist(product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(
        addToWishlist({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          img: product.image,
        })
      );
    }
  };

  const addProductToCart = (product: Products) => {
    dispatch(
      addItem({
        id: product.id,
        img: product.image,
        name: product.name,
        price: product.price,
        description: product.description,
        quantity: 1,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col h-full bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105"
        >
          {/* Love icon top-right */}
          <button
            aria-pressed={isInWishlist(product.id)}
            onClick={() => toggleWishlist(product)}
            title={
              isInWishlist(product.id)
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1"
          >
            {isInWishlist(product.id) ? (
              // filled heart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
                aria-label="Remove from wishlist"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              // outline heart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                role="img"
                aria-label="Add to wishlist"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657l-8.828-8.829a4 4 0 010-5.656z"
                />
              </svg>
            )}
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="flex flex-col flex-grow p-2 gap-2">
            <p className="font-semibold text-sm text-gray-500">
              {product.category.toLocaleUpperCase()}
            </p>
            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <p className="text-xs text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="mt-3 flex gap-2">
            <button
              onClick={() => addProductToCart(product)}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`px-3 py-2 rounded border ${
                isInWishlist(product.id)
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {isInWishlist(product.id) ? "Wishlisted" : "Wish"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
