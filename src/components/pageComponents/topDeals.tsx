import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Gown1 from "../../asset/images/gown1.jpg";

type Deal = {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  image?: string;
  badge?: string;
};

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

const sampleDeals: Deal[] = [
  {
    id: "d1",
    title: "Silk Maxi Gown",
    price: "$79",
    oldPrice: "$130",
    badge: "40% OFF",
    image: "../../images/gown1.jpg",
  },
  {
    id: "d2",
    title: "A-Line Summer Dress",
    price: "$49",
    oldPrice: "$89",
    badge: "Limited",
    image: "../../images/gown2.jpg",
  },
  {
    id: "d3",
    title: "Mermaid Evening Gown",
    price: "$129",
    oldPrice: "$199",
    badge: "Best Seller",
    image: "../../images/gown3.jpg",
  },
  {
    id: "d4",
    title: "Off-Shoulder Mini",
    price: "$39",
    oldPrice: "$69",
    image: "../../images/gown4.jpg",
  },
];

const DealCard: React.FC<{ deal: Deal; index: number }> = ({ deal, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getBadgeStyle = (badge?: string) => {
    if (!badge) return "";

    if (badge.includes("OFF")) {
      return "bg-gradient-to-r from-red-500 to-pink-500 text-white";
    } else if (badge === "Limited") {
      return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
    } else if (badge === "Best Seller") {
      return "bg-gradient-to-r from-purple-500 to-indigo-500 text-white";
    }
    return "bg-gradient-to-r from-gray-700 to-gray-800 text-white";
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsInCart(!isInCart);
      setIsLoading(false);
    }, 600);
  };

  const savings = deal.oldPrice
    ? (
        parseFloat(deal.oldPrice.slice(1)) - parseFloat(deal.price.slice(1))
      ).toFixed(0)
    : null;

  return (
    <article
      className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-white/50 overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-3 ${
        index % 2 === 0 ? "animate-fade-in-up" : "animate-fade-in-up-delayed"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl h-64">
        <img
          src={deal.image || "https://via.placeholder.com/400x300"}
          alt={deal.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Badge */}
        {deal.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg transition-all duration-300 group-hover:scale-110 ${getBadgeStyle(
                deal.badge
              )}`}
            >
              {deal.badge.includes("OFF") && (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {deal.badge === "Limited" && (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {deal.badge === "Best Seller" && (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
              {deal.badge}
            </span>
          </div>
        )}

        {/* Quick Actions Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex gap-3">
            <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 group/btn">
              <svg
                className="w-5 h-5 text-slate-700 group-hover/btn:text-purple-600"
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

            <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 group/btn">
              <svg
                className="w-5 h-5 text-slate-700 group-hover/btn:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 space-y-4">
        {/* Product Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
          {deal.title}
        </h3>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-900">
              {deal.price}
            </span>
            {deal.oldPrice && (
              <span className="text-lg text-slate-400 line-through">
                {deal.oldPrice}
              </span>
            )}
          </div>

          {savings && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600 font-semibold">
                Save ${savings}
              </span>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <span className="text-slate-500">Free shipping</span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-slate-500">(4.8)</span>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <span className="text-sm text-slate-500">128 reviews</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2 flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-60 ${
              isInCart
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Added to Cart
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

          <Link to={`/product/${deal.id}`}>
            <button className="w-full py-3 px-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-purple-300 hover:text-purple-600 transition-all duration-200 hover:shadow-md">
              View Details
            </button>
          </Link>
        </div>

        {/* Stock Indicator */}
        <div className="flex items-center gap-2 pt-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-500">
            {Math.floor(Math.random() * 15) + 3} left in stock
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </article>
  );
};

const TopDeals: React.FC<{ deals?: Deal[] }> = ({ deals = sampleDeals }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">
              Limited Time
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Top Deals
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Don't miss out on these incredible offers. Limited stock available!
          </p>

          <Link to="/deals">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>View All Deals</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal, index) => (
            <DealCard key={deal.id} deal={deal} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              🎉 Flash Sale Alert!
            </h3>
            <p className="text-slate-600 mb-6">
              Get an extra 20% off on your first purchase. Use code{" "}
              <span className="font-bold text-purple-600">FIRST20</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Offer ends in 2 days</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default TopDeals;
