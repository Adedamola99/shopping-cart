import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  fetchProducts,
  selectAllProducts,
  selectProductLoading,
  selectProductError,
} from "../features/products/productSlice";
import {
  addItem,
  removeItem,
  selectCartItem,
} from "../features/carts/cartSlice"; // Import removeItem and selectCartItem
import NavBar from "./NavBar";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const cartItems = useSelector(selectCartItem); // Get current cart items

  // Function to check if product is already in cart
  const isInCart = (id: number) => cartItems.some((item) => item.id === id);

  // Function to add or remove item based on existence in cart
  const toggleCartItem = (
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
  ) => {
    if (isInCart(id)) {
      dispatch(removeItem(id)); // If in cart, remove item
    } else {
      dispatch(
        addItem({
          // If not in cart, add item
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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center flex align-middle justify-center items-center h-screen">
        <p className="text-center text-lg">Loading Products, Please Wait...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
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
              <p className="font-semibold text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
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
    </div>
  );
};

export default ProductList;
