import { useRef, useEffect, useState } from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import NewsLetter from "../components/pageComponents/newsletter";
import FeaturedCategory from "../components/pageComponents/featuredCategory";
import PromoBanner from "../components/pageComponents/promoBanner";
import TopDeals from "../components/pageComponents/topDeals";
import Testimonial from "../components/pageComponents/testimonial";
import HeroImage from "../asset/images/hero-1.jpg";
import HeroImage2 from "../asset/images/hero-1.jpg";

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const gownStyles = [
    "Maxi Gown",
    "A‑Line Gown",
    "Mermaid Gown",
    "Sheath Gown",
    "Ball Gown",
    "Empire‑Waist Gown",
    "Slip Gown",
    "One‑Shoulder Gown",
    "Off‑Shoulder Gown",
    "High‑Low Gown",
  ];

  // Triple the content for smoother infinite scroll
  const displayList = [...gownStyles, ...gownStyles, ...gownStyles];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -0.02}px, ${
                mousePosition.y * -0.02
              }px)`,
            }}
          ></div>
        </div>

        <div className="relative pt-16 sm:pt-24 lg:pt-32 xl:pt-40 pb-16 lg:pb-24">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 z-10"></div>
            <img
              className="object-cover object-right w-full h-full opacity-90"
              src={HeroImage2}
              alt=""
            />
          </div>

          <div className="relative z-20 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content Column */}
              <div
                className={`space-y-8 transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                {/* Coupon Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold tracking-wide">
                      Use "FIT40" coupon to get 40% flat discount
                    </span>
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                    <span className="block">Gowns that</span>
                    <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                      elevate
                    </span>
                    <span className="block">your fashion style</span>
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Discover our curated collection of stunning gowns designed
                    to make you feel confident and beautiful for every special
                    occasion.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Start shopping</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg
                      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>

                  <a
                    href="#"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:shadow-lg"
                  >
                    View Collection
                    <svg
                      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white"></div>
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-semibold">10k+</span> happy
                      customers
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 ml-2">
                      4.9/5 rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-60 animate-pulse"></div>

                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <img
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                      src={HeroImage}
                      alt="Fashion Collection"
                    />

                    {/* Floating Cards */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-slate-700">
                          Free Delivery
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          40%
                        </div>
                        <span className="text-sm font-semibold text-slate-700">
                          OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Marquee Section */}
      <div className="py-8 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative">
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {displayList.map((gown, idx) => (
              <div key={idx} className="inline-flex items-center mx-8">
                <span className="text-2xl lg:text-3xl font-bold text-white hover:text-purple-300 transition-colors duration-300 cursor-default">
                  {gown}
                </span>
                {idx !== displayList.length - 1 && (
                  <div className="mx-8 flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced sections with spacing */}
      <div className="space-y-16 pb-16">
        <TopDeals />
        <FeaturedCategory />
        <PromoBanner />
        <Testimonial />
      </div>
      <NewsLetter />

      <Footer />

      <style>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-slow {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
