import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../features/carts/cartSlice";
import { RootState } from "../../store/store";
import {
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with your Redux selectors
  const cartCount = useSelector(selectTotalItems);
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );
  const isLoggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleSearch = (e: any) => {
    if (e) e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const menuItems = [
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-800 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiPhone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail size={14} />
              <span>support@sparinglyshop.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FiMapPin size={14} />
              <span>Free shipping on orders over $50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden mr-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
            >
              DoFi Closet
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                className="w-full py-2 px-4 pr-12 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-gray-700 transition-all"
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <FiSearch size={18} />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <FiSearch size={20} />
            </button>

            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAccountDropdown}
                className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FiUser size={20} />
                <FiChevronDown size={14} className="hidden md:block" />
              </button>

              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50 py-2">
                  {isLoggedIn ? (
                    <>
                      <a
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        My Profile
                      </a>
                      <a
                        href="/orders"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        My Orders
                      </a>
                      <a
                        href="/addresses"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Addresses
                      </a>
                      <hr className="my-2" />
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href="/login"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Sign In
                      </a>
                      <a
                        href="/register"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Create Account
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <a
              href="/wishlist"
              className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FiHeart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Cart */}
            <a
              href="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FiShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
              className="w-full py-2 px-4 pr-12 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-gray-700 transition-all"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <FiSearch size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Menu
            </span>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-800"
            >
              <FiX size={20} />
            </button>
          </div>

          <nav className="space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-4 border-t border-gray-700">
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 px-4 py-2">
                <FiPhone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2">
                <FiMail size={16} />
                <span>support@sparinglyshop.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close account dropdown */}
      {isAccountDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsAccountDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
