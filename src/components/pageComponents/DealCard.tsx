// // src/components/deals/DealCard.tsx
// import React, { useMemo } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/hook";
// import { addItem, removeItem } from "../../features/carts/cartSlice";
// import {
//   addToWishlist,
//   removeFromWishlist,
//   selectWishlistItems,
// } from "../../features/wish/wishlistSlice";
// import type { Products } from "../../features/products/productSlice";

// interface DealCardProps {
//   product: Products;
// }

// export default function DealCard({ product }: DealCardProps) {
//   const dispatch = useAppDispatch();
//   const wishlist = useAppSelector(selectWishlistItems);
//   const cartItems = useAppSelector((s: any) => s.cart.items ?? []);

//   // deterministic discount derived from id so it won't jump around
//   const discount = useMemo(() => ((product.id * 13) % 40) + 10, [product.id]); // 10% - 49%
//   const salePrice = useMemo(
//     () => Number((product.price * (1 - discount / 100)).toFixed(2)),
//     [product.price, discount]
//   );

//   const isInWishlist = wishlist.some((i: any) => i.id === product.id);
//   const isInCart = cartItems.some((i: any) => i.id === product.id);

//   const toggleWishlist = () => {
//     if (isInWishlist) dispatch(removeFromWishlist(product.id));
//     else
//       dispatch(
//         addToWishlist({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           description: product.description,
//           img: product.image,
//         })
//       );
//   };

//   const toggleCart = () => {
//     if (isInCart) dispatch(removeItem(product.id));
//     else
//       dispatch(
//         addItem({
//           id: product.id,
//           img: product.image,
//           name: product.name,
//           price: product.price,
//           description: product.description,
//           quantity: 1,
//         })
//       );
//   };

//   // small UX: show "Deal ends in Xh" where X is deterministic from id
//   const dealEndsInHours = (product.id % 24) + 1;

//   return (
//     <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
//       {/* badge */}
//       <div className="absolute top-3 left-3 z-10">
//         <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-xs font-semibold text-slate-900 px-3 py-1 rounded-full shadow-sm">
//           {discount}% OFF
//         </span>
//       </div>

//       {/* heart */}
//       <button
//         onClick={toggleWishlist}
//         className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-gray-100"
//         aria-pressed={isInWishlist}
//         title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
//       >
//         {isInWishlist ? (
//           <svg
//             className="w-6 h-6 text-red-500"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//           </svg>
//         ) : (
//           <svg
//             className="w-6 h-6 text-gray-400"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657l-8.828-8.829a4 4 0 010-5.656z"
//             />
//           </svg>
//         )}
//       </button>

//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-44 object-cover"
//       />

//       <div className="p-4 flex-1 flex flex-col">
//         <div className="flex items-start justify-between gap-3">
//           <div>
//             <p className="text-xs text-gray-500">
//               {product.category?.toUpperCase()}
//             </p>
//             <h3 className="mt-1 text-lg font-semibold text-slate-900">
//               {product.name}
//             </h3>
//           </div>
//           <div className="text-right">
//             <div className="text-sm text-gray-500 line-through">
//               ${product.price.toFixed(2)}
//             </div>
//             <div className="text-xl font-bold text-slate-900">
//               ${salePrice.toFixed(2)}
//             </div>
//           </div>
//         </div>

//         <p className="text-xs text-gray-600 mt-2 line-clamp-2">
//           {product.description}
//         </p>

//         <div className="mt-4 flex items-center justify-between gap-3">
//           <button
//             onClick={toggleCart}
//             className={`flex-1 py-2 rounded font-semibold text-white ${
//               isInCart
//                 ? "bg-red-500 hover:bg-red-600"
//                 : "bg-purple-600 hover:bg-purple-700"
//             }`}
//           >
//             {isInCart ? "Remove from Cart" : "Add to Cart"}
//           </button>

//           <div className="text-xs text-gray-500 text-center px-2">
//             <div>Ends in</div>
//             <div className="font-semibold">{dealEndsInHours}h</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/deals/DealCard.tsx
import React, { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addItem, removeItem } from "../../features/carts/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../features/wish/wishlistSlice";
import type { Products } from "../../features/products/productSlice";

interface DealCardProps {
  product: Products;
}

export default function DealCard({ product }: DealCardProps) {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlistItems);
  const cartItems = useAppSelector((s: any) => s.cart.items ?? []);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // deterministic discount derived from id so it won't jump around
  const discount = useMemo(() => ((product.id * 13) % 40) + 10, [product.id]); // 10% - 49%
  const salePrice = useMemo(
    () => Number((product.price * (1 - discount / 100)).toFixed(2)),
    [product.price, discount]
  );

  const isInWishlist = wishlist.some((i: any) => i.id === product.id);
  const isInCart = cartItems.some((i: any) => i.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) dispatch(removeFromWishlist(product.id));
    else
      dispatch(
        addToWishlist({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          img: product.image,
        })
      );
  };

  const toggleCart = async () => {
    setIsLoading(true);
    // Small delay for better UX
    setTimeout(() => {
      if (isInCart) dispatch(removeItem(product.id));
      else
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
      setIsLoading(false);
    }, 300);
  };

  // small UX: show "Deal ends in Xh" where X is deterministic from id
  const dealEndsInHours = (product.id % 24) + 1;
  const savings = (product.price - salePrice).toFixed(2);

  return (
    <div
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-white/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Discount Badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="relative">
          <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-bold">{discount}% OFF</span>
            </div>
          </div>
          {/* Small pulse animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl animate-pulse opacity-30 -z-10"></div>
        </div>
      </div>

      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-4 right-4 z-20 p-3 rounded-2xl backdrop-blur-sm bg-white/80 hover:bg-white border border-white/50 shadow-lg transition-all duration-300 hover:scale-110 group/heart"
        aria-pressed={isInWishlist}
        title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isInWishlist ? (
          <svg
            className="w-5 h-5 text-red-500 group-hover/heart:scale-110 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-slate-400 group-hover/heart:text-red-500 group-hover/heart:scale-110 transition-all duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657l-8.828-8.829a4 4 0 010-5.656z"
            />
          </svg>
        )}
      </button>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay with Quick View */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-white/90 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg">
            Quick View
          </button>
        </div>

        {/* Timer Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-slate-700">
              Ends in {dealEndsInHours}h
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        {/* Category and Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">
            {product.category?.toUpperCase()}
          </span>

          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-slate-500 ml-1">4.8</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing Section */}
        <div className="mb-6">
          <div className="flex items-end gap-3 mb-2">
            <div className="text-2xl font-bold text-slate-900">
              ${salePrice.toFixed(2)}
            </div>
            <div className="text-lg text-slate-400 line-through">
              ${product.price.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-green-600 font-semibold">
              You save ${savings}
            </span>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <span className="text-sm text-slate-500">Free shipping</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={toggleCart}
            disabled={isLoading}
            className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-60 ${
              isInCart
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105"
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                {isInCart ? (
                  <>
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Remove from Cart
                  </>
                ) : (
                  <>
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5"
                      />
                    </svg>
                    Add to Cart
                  </>
                )}
              </>
            )}
          </button>

          {/* Secondary Action */}
          <div className="flex gap-3">
            <button className="flex-1 py-2 px-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-purple-300 hover:text-purple-600 transition-all duration-200">
              Compare
            </button>
            <button className="flex-1 py-2 px-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-purple-300 hover:text-purple-600 transition-all duration-200">
              Share
            </button>
          </div>
        </div>

        {/* Stock Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-500">
            {Math.floor(Math.random() * 20) + 5} left in stock
          </span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
