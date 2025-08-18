// components/shop/ProductGrid.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  addItem,
  removeItem,
  selectCartItem,
} from "../../features/carts/cartSlice";
import type { Products } from "../../features/products/productSlice";

interface ProductGridProps {
  products: Products[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItem);

  const isInCart = (id: number) =>
    cartItems?.some((item: any) => item.id === id);

  const toggleCartItem = (
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
  ) => {
    if (isInCart(id)) {
      dispatch(removeItem(id));
    } else {
      dispatch(
        addItem({
          id,
          img: image,
          name,
          price,
          description,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-0">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col h-full bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105"
        >
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
            <p className="text-gray-500 mb-4">${product.price}</p>
          </div>
          <button
            onClick={() =>
              toggleCartItem(
                product.id,
                product.name,
                product.price,
                product.description,
                product.image
              )
            }
            className={`mt-auto ${
              isInCart(product.id)
                ? "bg-red-500 hover:bg-red-600"
                : "bg-purple-500 hover:bg-purple-600"
            } text-white font-bold py-2 px-4 rounded`}
          >
            {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
