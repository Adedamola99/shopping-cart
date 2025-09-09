import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedCategories: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    {
      name: "Evening Gowns",
      icon: "✨",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      hoverColor: "group-hover:from-purple-600 group-hover:to-indigo-700",
      count: "120+ items",
      description: "Elegant evening wear",
    },
    {
      name: "Bridal",
      icon: "👰",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      hoverColor: "group-hover:from-pink-600 group-hover:to-rose-700",
      count: "85+ items",
      description: "Perfect wedding dresses",
    },
    {
      name: "Casual",
      icon: "👕",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-700",
      count: "200+ items",
      description: "Everyday comfort",
    },
    {
      name: "Workwear",
      icon: "💼",
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-50 to-gray-50",
      hoverColor: "group-hover:from-slate-600 group-hover:to-gray-700",
      count: "90+ items",
      description: "Professional attire",
    },
    {
      name: "Accessories",
      icon: "💎",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      hoverColor: "group-hover:from-amber-600 group-hover:to-orange-700",
      count: "150+ items",
      description: "Complete your look",
    },
    {
      name: "New Arrivals",
      icon: "🎉",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      hoverColor: "group-hover:from-emerald-600 group-hover:to-teal-700",
      count: "45+ items",
      description: "Fresh & trendy",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/30">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-200/15 to-purple-200/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">
              Explore Collections
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our carefully curated collections designed to suit every
            occasion and style preference
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/category/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-white/50 p-6 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform ${
                index % 2 === 0
                  ? "animate-fade-in-up"
                  : "animate-fade-in-up-delayed"
              }`}
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`}
              ></div>

              {/* Icon Container */}
              <div className="relative mb-4">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} ${category.hoverColor} flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}
                >
                  <span className="text-white filter drop-shadow-sm">
                    {category.icon}
                  </span>
                </div>

                {/* Pulse Ring */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 animate-ping transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                  {category.name}
                </h3>

                <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {category.description}
                </p>

                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>

                {/* Hover Arrow */}
                <div
                  className={`transition-all duration-300 ${
                    hoveredCategory === category.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <svg
                    className="w-5 h-5 mx-auto mt-2 text-slate-600"
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
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  Can't find what you're looking for?
                </h3>
                <p className="text-white/90 text-lg">
                  Browse our complete collection or get personalized styling
                  recommendations from our experts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-200 hover:scale-105 shadow-lg">
                  Browse All
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 hover:scale-105">
                  Get Styling Help
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {[
            { number: "1000+", label: "Products", icon: "👗" },
            { number: "50+", label: "Brands", icon: "🏷️" },
            { number: "10k+", label: "Happy Customers", icon: "😊" },
            { number: "4.9", label: "Average Rating", icon: "⭐" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
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
          animation: fade-in-up-delayed 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCategories;
