// src/components/Footer.tsx
import React, { useState } from "react";

interface FooterProps {
  variant?: "default" | "modern" | "minimal";
  showNewsletter?: boolean;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  variant = "modern",
  showNewsletter = true,
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  const socialIcons = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
          <circle cx="16.806" cy="7.207" r="1.078" />
          <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  if (variant === "minimal") {
    return (
      <footer className={`bg-white border-t border-gray-200 ${className}`}>
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900">DoFi Closet</h3>
              <p className="text-gray-600 text-sm">
                Sustainable fashion for all
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
            © 2025 DoFi Closet. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "default") {
    return (
      <div className={className}>
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
              <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img
                  className="w-auto h-9"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt=""
                />
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <ul className="flex items-center space-x-3 mt-9">
                  {socialIcons.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Company
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/about"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/works"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Help
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Delivery Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {showNewsletter && (
                <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                  <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                    Subscribe to newsletter
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </button>
                  </form>
                </div>
              )}
            </div>

            <hr className="mt-16 mb-10 border-gray-200" />
            <p className="text-sm text-center text-gray-600">
              © Copyright 2025, All Rights Reserved by DoFi Closet
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Modern variant (default)
  return (
    <footer className={`relative overflow-hidden ${className}`}>
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <h2 className="text-4xl font-black text-white mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    DoFi
                  </span>{" "}
                  <span className="text-white">Closet</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-md">
                  Curating preloved fashion pieces for the conscious style
                  lover. Sustainable, stylish, and surprisingly affordable.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5K+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">20K+</div>
                  <div className="text-sm text-gray-400">Items Sold</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">120+</div>
                  <div className="text-sm text-gray-400">Events Hosted</div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-medium">
                  Follow us
                </span>
                <div className="flex gap-3">
                  {socialIcons.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation sections */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {/* Company links */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 relative">
                    Company
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { label: "About Us", href: "/about" },
                      { label: "Our Story", href: "/story" },
                      { label: "Collections", href: "/shop" },
                      { label: "Sustainability", href: "/sustainability" },
                      { label: "Events", href: "/events" },
                    ].map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center"
                        >
                          <span className="w-0 group-hover:w-4 h-px bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Help links */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 relative">
                    Support
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { label: "Customer Support", href: "/support" },
                      { label: "Size Guide", href: "/size-guide" },
                      { label: "Shipping Info", href: "/shipping" },
                      { label: "Returns", href: "/returns" },
                      { label: "FAQ", href: "/faq" },
                    ].map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center"
                        >
                          <span className="w-0 group-hover:w-4 h-px bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter section */}
            {showNewsletter && (
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  {isSubscribed ? (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-white"
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
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        You're In! 🎉
                      </h3>
                      <p className="text-gray-300">
                        Welcome to our fashion community!
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Stay in Style
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Get first access to new drops, exclusive deals, and
                        styling tips.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-xl border-0 focus:ring-4 focus:ring-white/30 transition-all duration-300"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting || !email}
                          className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Joining...
                            </>
                          ) : (
                            <>
                              Join Community
                              <svg
                                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                            </>
                          )}
                        </button>
                      </form>

                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1l3.5 7h7.5l-6 4.5 2.5 7.5-7.5-5.5L4.5 20 7 12.5 1 8h7.5z" />
                        </svg>
                        <span>No spam, unsubscribe anytime</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 DoFi Closet. All rights reserved. Made with ❤️ in Nigeria
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
