import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../features/carts/cartSlice";

const Navbar: React.FC = () => {
  const cartCount = useSelector(selectTotalItems);

  return (
    <nav className="bg-gray-900 shadow-lg flex justify-between items-center py-4 px-6 text-white">
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
        Sparingly Shop
      </Link>
      <Link to="/cart" className="relative inline-block">
        <FiShoppingCart size={30} />
        {cartCount > 0 && (
          <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
