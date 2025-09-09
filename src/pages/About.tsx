// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import HeroSection from "../components/layouts/HeroSection";
import Footer from "../components/layouts/Footer";
import BackgroundImage from "../asset/images/background-1.jpg";
import Avatar1 from "../asset/images/avatar-1.jpg";
import Avatar2 from "../asset/images/avatar-2.jpg";
import Avatar3 from "../asset/images/avatar-3.jpg";
import Avatar4 from "../asset/images/avatar-4.jpg";

const TeamMember: React.FC<{ name: string; role: string; img: string }> = ({
  name,
  role,
  img,
}) => (
  <div className="group relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-purple-50/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative p-8 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <img
          src={img}
          alt={name}
          className="relative w-32 h-32 object-cover rounded-full shadow-xl ring-4 ring-white group-hover:ring-purple-200 transition-all duration-500"
        />
      </div>
      <h4 className="font-bold text-xl text-slate-900 group-hover:text-purple-700 transition-colors duration-300">
        {name}
      </h4>
      <p className="text-purple-600 font-medium mt-2">{role}</p>
      <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <Link
          aria-label="twitter"
          to="#"
          className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 5.92c-.64.28-1.33.47-2.05.56a3.6 3.6 0 001.58-1.98 7.2 7.2 0 01-2.28.87 3.58 3.58 0 00-6.1 3.26A10.16 10.16 0 013 4.8a3.57 3.57 0 001.11 4.77 3.5 3.5 0 01-1.62-.45v.05a3.58 3.58 0 002.87 3.51c-.34.09-.69.14-1.06.14-.26 0-.52-.03-.78-.07a3.58 3.58 0 003.34 2.49A7.18 7.18 0 012 19.54a10.12 10.12 0 005.5 1.61c6.6 0 10.21-5.47 10.21-10.21v-.46A7.24 7.24 0 0022 5.92z" />
          </svg>
        </Link>
        <Link
          aria-label="instagram"
          to="#"
          className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zM12 7.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zM12 9a2.8 2.8 0 100 5.6A2.8 2.8 0 0012 9z" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <Navbar />

      <HeroSection
        title="About DoFi Closet"
        subtitle="Curating preloved pieces — sustainable, stylish, and affordable."
        backgroundUrl={BackgroundImage}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        cta={{
          label: "Shop Our Collection",
          href: "/shop",
          variant: "primary",
        }}
        heightClass="h-[56vh]"
      />

      <main className="max-w-7xl mx-auto py-24 px-6 lg:px-8">
        {/* Story Section - Floating Cards */}
        <section className="relative -mt-20 z-10 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Story Card */}
            <div className="group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-8 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-purple-700 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  DoFi Closet began as a bedroom mission: to rescue high-quality
                  preloved pieces and place them into wardrobes that cherish
                  them. We blend local curation with modern styling — helping
                  our community look great while reducing fashion waste.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From pop-ups to online drops, our ethos is simple: style with
                  purpose. We partner with local stylists and collectors to
                  hand-select every item.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/shop"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Start Shopping
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
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center text-purple-600 hover:text-purple-700 font-semibold px-6 py-4 rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className=" flex align-middle justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
                alt="thrift shop interior"
                className="w-full   object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Mission & Values - Modern Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-700 to-pink-600 bg-clip-text text-transparent">
              Mission & Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe sustainable style should be accessible to everyone. Our
              values guide everything we do in creating a more circular fashion
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/50 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L4 7v6c0 5 4 9 8 9s8-4 8-9V7l-8-5z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Quality Curation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Every item is hand-inspected and styled by our team of fashion
                  experts to ensure premium quality and timeless appeal.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100/50 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21s-8-4.8-8-11a6 6 0 0112 0c0 6.2-4 11-4 11z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Community First
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We host community swaps, pop-ups and styling sessions to
                  uplift local creators and build lasting connections.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l4 7h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Sustainable Impact
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We reduce waste by extending the life of great garments and
                  supporting circular fashion for a better planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline - Modern Vertical */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-black text-slate-900 mb-4">
                Our Journey
              </h3>
              <p className="text-xl text-gray-600">
                Milestones that shaped our story and built our community
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-green-400 rounded-full"></div>

                <div className="space-y-12">
                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl z-10">
                      2019
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">
                        Humble Beginnings
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Started as a local pop-up in Lagos, selling a carefully
                        curated selection of preloved fashion finds to
                        style-conscious customers.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl z-10">
                      2020
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">
                        Digital Expansion
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Launched our online store and social media presence,
                        reaching fashion lovers across Nigeria and beyond.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl z-10">
                      2022
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">
                        Community Growth
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Hosted over 20 pop-ups and partnered with local
                        designers for collaborative drops, building a thriving
                        community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - Animated Cards */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-10 shadow-2xl text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  20k+
                </div>
                <div className="text-purple-100 font-semibold text-lg">
                  Items Processed
                </div>
                <div className="text-purple-200 text-sm mt-2">
                  Quality pieces curated
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-10 shadow-2xl text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  5k+
                </div>
                <div className="text-pink-100 font-semibold text-lg">
                  Happy Customers
                </div>
                <div className="text-pink-200 text-sm mt-2">
                  Style enthusiasts served
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-10 shadow-2xl text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  120+
                </div>
                <div className="text-green-100 font-semibold text-lg">
                  Community Events
                </div>
                <div className="text-green-200 text-sm mt-2">
                  Connections made
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-700 to-pink-600 bg-clip-text text-transparent">
              Meet Our Team
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind DoFi Closet's mission to
              revolutionize sustainable fashion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Adaeze" role="Founder & Curator" img={Avatar1} />
            <TeamMember name="Kemi" role="Head of Styling" img={Avatar2} />
            <TeamMember name="Sam" role="Operations Director" img={Avatar3} />
            <TeamMember name="Tunde" role="Community & Events" img={Avatar4} />
          </div>
        </section>

        {/* Testimonials - Modern Carousel Style */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-slate-900 mb-6">
              What Our Customers Say
            </h3>
            <p className="text-xl text-gray-600">
              Real stories from our amazing community
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 text-purple-100 opacity-50">
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Found the most beautiful vintage jacket — amazing quality and
                  speedy delivery. The styling advice was spot-on too!"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/80x80/?woman,face"
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-purple-100"
                    alt="customer"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      Chinelo
                    </div>
                    <div className="text-purple-600 font-medium">
                      Verified Buyer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 text-pink-100 opacity-50">
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Love the curation and prices. The team helped style my whole
                  look for an event. Absolutely phenomenal service!"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/80x80/?man,face"
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-pink-100"
                    alt="customer"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      Michael
                    </div>
                    <div className="text-pink-600 font-medium">
                      Verified Buyer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 text-green-100 opacity-50">
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Great customer service and the pickup option saved me so much
                  time. Quality pieces at unbeatable prices!"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/80x80/?person,face"
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-green-100"
                    alt="customer"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      Aisha
                    </div>
                    <div className="text-green-600 font-medium">
                      Verified Buyer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Reimagined */}
        <section className="mb-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            <div className="relative px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to discover your next thrift treasure?
                </h3>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Join thousands of fashion lovers who've already found their
                  perfect preloved pieces. Shop curated drops, join our events,
                  or sign up for early access to exclusive collections.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:w-1/3 lg:justify-end">
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Shop Now
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
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
