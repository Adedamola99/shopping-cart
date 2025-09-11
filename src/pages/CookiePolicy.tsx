// src/pages/CookiePolicy.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";

const CookiePolicy: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const handleCookieToggle = (type: keyof typeof cookiePreferences) => {
    if (type === "essential") return; // Can't disable essential cookies
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const cookieTypes = [
    {
      id: "essential",
      name: "Essential Cookies",
      description:
        "Required for basic website functionality like shopping cart and login.",
      examples: "Session tokens, security cookies, load balancing",
      duration: "Session/1 year",
      color: "green",
      canDisable: false,
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description:
        "Help us understand how visitors use our website to improve performance.",
      examples: "Google Analytics, page views, user behavior",
      duration: "2 years",
      color: "blue",
      canDisable: true,
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description:
        "Used to show you relevant ads and measure advertising effectiveness.",
      examples: "Facebook Pixel, Google Ads, retargeting",
      duration: "1 year",
      color: "purple",
      canDisable: true,
    },
    {
      id: "preferences",
      name: "Preference Cookies",
      description:
        "Remember your settings and preferences for a personalized experience.",
      examples: "Language settings, theme preferences, location",
      duration: "6 months",
      color: "pink",
      canDisable: true,
    },
  ];

  const colorClasses = {
    green: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200",
      icon: "bg-green-500",
      toggle: "bg-green-500",
    },
    blue: {
      bg: "from-blue-50 to-sky-50",
      border: "border-blue-200",
      icon: "bg-blue-500",
      toggle: "bg-blue-500",
    },
    purple: {
      bg: "from-purple-50 to-violet-50",
      border: "border-purple-200",
      icon: "bg-purple-500",
      toggle: "bg-purple-500",
    },
    pink: {
      bg: "from-pink-50 to-rose-50",
      border: "border-pink-200",
      icon: "bg-pink-500",
      toggle: "bg-pink-500",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white text-sm font-medium mb-8">
            🍪 Last Updated: January 15, 2025
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Cookie
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn about the cookies we use to enhance your browsing experience
            and how you can control them.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        {/* What Are Cookies */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mr-6 text-2xl">
                🍪
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  What Are Cookies?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Cookies are small text files stored on your device when you
                  visit websites. They help us remember your preferences, keep
                  you logged in, and provide a better browsing experience.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-blue-700 font-medium">
                    💡 Think of cookies like a bookmark that remembers where you
                    left off and what you like.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Quick Facts:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Small files (usually under 4KB)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Can't access your personal files
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    You can delete them anytime
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Help websites work better
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types & Settings */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Cookie Management
              </h2>
              <p className="text-gray-600 text-lg">
                Control which cookies you want to allow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie) => (
                <div
                  key={cookie.id}
                  className={`bg-gradient-to-br ${
                    colorClasses[cookie.color as keyof typeof colorClasses].bg
                  } rounded-2xl p-6 border ${
                    colorClasses[cookie.color as keyof typeof colorClasses]
                      .border
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 ${
                          colorClasses[
                            cookie.color as keyof typeof colorClasses
                          ].icon
                        } rounded-xl flex items-center justify-center mr-4`}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900">{cookie.name}</h4>
                    </div>
                    <div className="flex items-center">
                      {cookie.canDisable ? (
                        <button
                          onClick={() =>
                            handleCookieToggle(
                              cookie.id as keyof typeof cookiePreferences
                            )
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            cookiePreferences[
                              cookie.id as keyof typeof cookiePreferences
                            ]
                              ? colorClasses[
                                  cookie.color as keyof typeof colorClasses
                                ].toggle
                              : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[
                                cookie.id as keyof typeof cookiePreferences
                              ]
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      ) : (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Always On
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">{cookie.description}</p>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">
                        Examples:
                      </span>
                      <span className="text-gray-600 ml-2">
                        {cookie.examples}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Duration:
                      </span>
                      <span className="text-gray-600 ml-2">
                        {cookie.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Save Preferences
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300">
                Accept All
              </button>
            </div>
          </div>
        </section>

        {/* How to Control Cookies */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              How to Control Cookies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Our Cookie Settings
                </h4>
                <p className="text-gray-600 text-sm">
                  Use the toggles above to control your preferences on our
                  website.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Browser Settings
                </h4>
                <p className="text-gray-600 text-sm">
                  Adjust cookie settings directly in your browser's privacy
                  options.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Privacy Extensions
                </h4>
                <p className="text-gray-600 text-sm">
                  Use browser extensions that block tracking cookies
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Questions */}
        <section>
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>

            <div className="relative text-center">
              <h3 className="text-3xl font-black mb-4">
                Questions About Cookies?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Need help managing your cookie preferences or have questions
                about our cookie policy?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  Contact Support
                </Link>
                <Link
                  to="/privacy"
                  className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-8">
                Last updated: January 15, 2025 • Questions? Email us at
                privacy@doficloset.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
