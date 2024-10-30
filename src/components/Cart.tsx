import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectCartItem, selectCartTotal, updateQuantity } from "../features/carts/cartSlice";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
    const cartItems = useSelector(selectCartItem);
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <>
            <Navbar />
            <div className="p-4">
                <h2 className="text-2xl font-bold">Your Shopping Cart List</h2>

                {cartItems.length === 0 ? (
                    <div className="mt-8 flex flex-col items-center">
                        <p className="text-lg text-gray-700">
                            Your cart is empty! 😿
                        </p>
                        <Link
                            to="/"
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Go Back to Products
                        </Link>
                    </div>
                ) : (
                    <>
                        <ul className="mt-4 space-y-6">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                                    />
                                    <div className="flex flex-col flex-grow">
                                        <p className="font-bold text-slate-900 text-xl">
                                            {item.name} - ${item.price}
                                        </p>
                                        <p className="text-justify text-sm text-gray-700 mt-2">{item.description}</p>
                                        <div className="flex items-center mt-4 gap-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                                className="px-2 py-1 bg-gray-300 rounded disabled:bg-gray-100"
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
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
                        <p className="mt-4 font-bold text-xl">Total: ${total.toFixed(2)}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
