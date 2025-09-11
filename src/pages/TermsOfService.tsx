// src/pages/TermsOfService.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";

const TermsOfService: React.FC = () => {
  const termsSection = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "✅",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            By accessing and using DoFi Closet's website and services, you agree
            to be bound by these Terms of Service and all applicable laws and
            regulations.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-blue-700 text-sm">
              <strong>Important:</strong> If you do not agree with any of these
              terms, you are prohibited from using or accessing our services.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "services",
      title: "Our Services",
      icon: "🛍️",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            DoFi Closet is an online marketplace for preloved fashion items. We
            curate and sell secondhand clothing, accessories, and fashion items.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">
                What We Offer:
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Curated preloved fashion items</li>
                <li>• Online shopping platform</li>
                <li>• Styling consultation services</li>
                <li>• Community events and pop-ups</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">
                Service Areas:
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nigeria (primary market)</li>
                <li>• International shipping available</li>
                <li>• Local pickup in Lagos</li>
                <li>• Pop-up events nationwide</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "accounts",
      title: "User Accounts",
      icon: "👤",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            You may need to create an account to access certain features. You
            are responsible for maintaining the security of your account.
          </p>
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
              <h5 className="font-semibold text-yellow-800 mb-2">
                Your Responsibilities:
              </h5>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Provide accurate information</li>
                <li>• Keep your password secure</li>
                <li>• Notify us of unauthorized access</li>
                <li>• Don't share your account</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
              <h5 className="font-semibold text-red-800 mb-2">
                Account Termination:
              </h5>
              <p className="text-red-700 text-sm">
                We reserve the right to suspend or terminate accounts that
                violate these terms, engage in fraudulent activity, or misuse
                our services.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "purchases",
      title: "Purchases & Payments",
      icon: "💳",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            All purchases are subject to product availability and our acceptance
            of your order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                Payment Terms:
              </h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Payment required before shipping
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Accepted methods: Card, Bank Transfer, Mobile Money
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prices in Nigerian Naira (₦)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All sales are final unless otherwise stated
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                Order Process:
              </h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full text-white text-xs flex items-center justify-center mr-3">
                    1
                  </div>
                  <span className="text-sm text-gray-600">
                    Add items to cart
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full text-white text-xs flex items-center justify-center mr-3">
                    2
                  </div>
                  <span className="text-sm text-gray-600">
                    Complete payment
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full text-white text-xs flex items-center justify-center mr-3">
                    3
                  </div>
                  <span className="text-sm text-gray-600">
                    Order confirmation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full text-white text-xs flex items-center justify-center mr-3">
                    4
                  </div>
                  <span className="text-sm text-gray-600">
                    Processing & shipping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "returns",
      title: "Returns & Exchanges",
      icon: "🔄",
      content: (
        <div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
            <h5 className="font-bold text-green-900 mb-3">
              7-Day Return Policy
            </h5>
            <p className="text-green-700 mb-3">
              We want you to love your purchase! Returns are accepted within 7
              days of delivery for unworn items.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-green-800 mb-2">
                  ✅ Eligible for Return:
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Unworn items with tags</li>
                  <li>• Original packaging</li>
                  <li>• No damage or alterations</li>
                  <li>• Not marked "Final Sale"</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-green-800 mb-2">
                  ❌ Not Eligible:
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Underwear & intimates</li>
                  <li>• Swimwear</li>
                  <li>• Items worn or damaged</li>
                  <li>• Sale/clearance items</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h6 className="font-medium text-gray-900 mb-2">Return Process:</h6>
            <p className="text-gray-600 text-sm">
              Contact our customer service team to initiate a return. Return
              shipping costs are the customer's responsibility unless the item
              was defective or incorrect.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "prohibited",
      title: "Prohibited Uses",
      icon: "🚫",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            To maintain a safe and positive environment, certain activities are
            prohibited on our platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h5 className="font-semibold text-red-900 mb-3">
                Strictly Forbidden:
              </h5>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Using false or misleading information</li>
                <li>• Attempting to hack or compromise security</li>
                <li>• Reselling items without permission</li>
                <li>• Harassment or abusive behavior</li>
                <li>• Spam or unsolicited communications</li>
                <li>• Violating intellectual property rights</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h5 className="font-semibold text-orange-900 mb-3">
                Consequences:
              </h5>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Warning and account suspension</li>
                <li>• Permanent account termination</li>
                <li>• Legal action if necessary</li>
                <li>• Reporting to authorities</li>
                <li>• Forfeiture of account credits</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: "©️",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            All content on DoFi Closet, including text, graphics, logos, and
            images, is our property or used with permission.
          </p>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-purple-900 mb-3">
                  Our Rights:
                </h5>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• DoFi Closet brand and logo</li>
                  <li>• Website design and content</li>
                  <li>• Product photography</li>
                  <li>• Marketing materials</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-purple-900 mb-3">
                  Your Usage:
                </h5>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Personal use only</li>
                  <li>• No commercial reproduction</li>
                  <li>• Credit required for sharing</li>
                  <li>• Respect brand guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: "⚖️",
      content: (
        <div>
          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400 mb-4">
            <p className="text-yellow-800 font-medium mb-2">
              Important Legal Notice:
            </p>
            <p className="text-yellow-700 text-sm">
              DoFi Closet provides services "as is" without warranties. We are
              not liable for indirect, incidental, or consequential damages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">
                We Are Responsible For:
              </h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Accurate product descriptions</li>
                <li>• Secure payment processing</li>
                <li>• Timely order fulfillment</li>
                <li>• Customer service support</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">
                We Are Not Liable For:
              </h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Third-party service failures</li>
                <li>• Internet connectivity issues</li>
                <li>• Misuse of products</li>
                <li>• Acts beyond our control</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: "📝",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            We may update these terms from time to time to reflect changes in
            our services or legal requirements.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-3">
              How We Handle Updates:
            </h5>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">📧</span>
                </div>
                <div>
                  <p className="font-medium text-blue-900">
                    Email Notification
                  </p>
                  <p className="text-blue-700 text-sm">
                    We'll notify registered users at least 30 days before major
                    changes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">🌐</span>
                </div>
                <div>
                  <p className="font-medium text-blue-900">Website Notice</p>
                  <p className="text-blue-700 text-sm">
                    Updates will be posted prominently on our website.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✅</span>
                </div>
                <div>
                  <p className="font-medium text-blue-900">Continued Use</p>
                  <p className="text-blue-700 text-sm">
                    Using our services after changes means you accept the new
                    terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

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
            ⚖️ Last Updated: January 15, 2025
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Terms of
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Clear, fair terms that protect both you and DoFi Closet. Read our
            service agreement and understand your rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Questions? Contact Us
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
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        {/* Quick Summary */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Terms Summary
              </h2>
              <p className="text-gray-600 text-lg">
                Key points you should know before using our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="text-3xl mb-3">✅</div>
                <h4 className="font-bold text-green-900 mb-2">
                  Fair & Transparent
                </h4>
                <p className="text-green-700 text-sm">
                  Clear terms with no hidden surprises or unfair clauses.
                </p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-bold text-blue-900 mb-2">
                  Your Protection
                </h4>
                <p className="text-blue-700 text-sm">
                  7-day returns, secure payments, and customer rights
                  protection.
                </p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-purple-900 mb-2">
                  Mutual Respect
                </h4>
                <p className="text-purple-700 text-sm">
                  Terms that respect both customers and our sustainable mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <div className="space-y-12">
          {termsSection.map((section, index) => (
            <section key={section.id} className="group">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-10 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>

            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-4">
                  Need Clarification?
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Our customer service team is here to help explain any part of
                  these terms or answer your questions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Support
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
                </Link>
                <a
                  href="mailto:legal@doficloset.com"
                  className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Email Legal Team
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl mb-2">📞</div>
                  <p className="font-semibold">Phone Support</p>
                  <p className="text-gray-300 text-sm">+234 (0) 901 234 5678</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="font-semibold">Live Chat</p>
                  <p className="text-gray-300 text-sm">Mon-Fri, 9AM-6PM WAT</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl mb-2">📧</div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300 text-sm">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm">
                  These terms are effective as of January 15, 2025. By using
                  DoFi Closet, you agree to these terms and our{" "}
                  <Link
                    to="/privacy"
                    className="text-white hover:text-purple-300 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
