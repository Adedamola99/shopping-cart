// components/shop/ProductGrid.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addItem, removeItem } from "../../features/carts/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../features/wish/wishlistSlice";
import type { Products } from "../../features/products/productSlice";

interface ProductGridProps {
  products: Products[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlistItems);
  const cartItems = useAppSelector((state) => state.cart.items);

  const isInWishlist = (id: number) => wishlist.some((i: any) => i.id === id);
  const isInCart = (id: number) => cartItems?.some((c: any) => c.id === id);

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

  const toggleCartItem = (product: Products) => {
    if (isInCart(product.id)) {
      dispatch(removeItem(product.id));
    } else {
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
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-purple-200/50 transform hover:-translate-y-2"
        >
          {/* Image Container with Overlay Effects */}
          <div className="relative overflow-hidden rounded-t-3xl">
            {/* Wishlist Button - Floating */}
            <button
              aria-pressed={isInWishlist(product.id)}
              onClick={() => toggleWishlist(product)}
              title={
                isInWishlist(product.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
              className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 transform hover:scale-110 ${
                isInWishlist(product.id)
                  ? "bg-red-500/90 border-red-400/50 text-white shadow-lg shadow-red-500/25"
                  : "bg-white/80 border-white/50 text-gray-600 hover:bg-white/90 hover:text-red-500"
              }`}
            >
              <svg
                className="w-5 h-5 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill={isInWishlist(product.id) ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white backdrop-blur-md border border-white/20 shadow-lg">
                {product.category.toUpperCase()}
              </span>
            </div>

            {/* Image with Hover Effect */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Quick Actions Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleCartItem(product)}
                    className="p-3 rounded-full bg-white/90 backdrop-blur-md text-purple-600 hover:bg-white hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 8L8 7H5l-1-4H2m4 14a1 1 0 110 2 1 1 0 010-2zm10 0a1 1 0 110 2 1 1 0 010-2z"
                      />
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-white/90 backdrop-blur-md text-purple-600 hover:bg-white hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Product Name */}
            <h3 className="font-bold text-xl text-slate-900 mb-2 line-clamp-1 group-hover:text-purple-700 transition-colors duration-300">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Price and Rating */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-slate-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${(product.price * 1.5).toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-500 ml-1">(4.2)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => toggleCartItem(product)}
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  isInCart(product.id)
                    ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 focus:ring-red-500/50"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 focus:ring-purple-500/50"
                }`}
              >
                {isInCart(product.id) ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Remove from Cart
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 8L8 7H5l-1-4H2m4 14a1 1 0 110 2 1 1 0 010-2zm10 0a1 1 0 110 2 1 1 0 010-2z"
                      />
                    </svg>
                    Add to Cart
                  </span>
                )}
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                    isInWishlist(product.id)
                      ? "border-red-500 bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500/50"
                      : "border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 focus:ring-purple-500/50"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill={isInWishlist(product.id) ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {isInWishlist(product.id) ? "Saved" : "Save"}
                  </span>
                </button>

                <button className="px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  Free delivery
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Authentic piece
                </span>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
