// src/pages/Contact.tsx
import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiExternalLink,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import Navbar from "../components/layouts/NavBar";
import HeroSection from "../components/layouts/HeroSection";
import Footer from "../components/layouts/Footer";
import BackgroundImage from "../asset/images/background-4.jpg";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const validate = (): string | null => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please add a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Please enter a message (at least 10 characters).";
    return null;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    setSuccess(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(
        "Thanks — your message was sent. We'll reply within 24–48 hours."
      );
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <Navbar />

      <HeroSection
        title="Get in touch"
        subtitle="Questions, styling help or partnership requests — we've got you."
        backgroundUrl={BackgroundImage}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        cta={{ label: "Shop Now", href: "/shop", variant: "primary" }}
        heightClass="h-[50vh]"
      />

      <main className="max-w-7xl py-24 mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form Section - Takes up more space */}
          <section className="xl:col-span-3 space-y-8">
            {/* Form Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
                  <FiMessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Send us a message
                  </h2>
                  <p className="text-slate-600 mt-1">
                    Fill the form and we'll get back to you shortly. For urgent
                    enquiries call us.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    {error}
                  </div>
                )}
                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {success}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <FiUser className="w-4 h-4" />
                      Full name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                      placeholder="Adaeze Okonkwo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <FiMail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <FiPhone className="w-4 h-4" />
                      Phone (optional)
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                      placeholder="+234 80 0000 0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Subject
                    </label>
                    <input
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                      placeholder="Order enquiry / Partnership"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-slate-50 focus:bg-white h-32 resize-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-60 flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {sending ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <FiSend className="w-5 h-5" />
                    )}
                    {sending ? "Sending..." : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                      setError(null);
                      setSuccess(null);
                    }}
                    className="text-sm text-slate-500 hover:text-slate-700 underline transition-colors"
                  >
                    Reset form
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently asked questions
              </h3>

              <div className="space-y-4">
                <details className="group p-6 bg-gradient-to-r from-slate-50 to-purple-50/50 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200">
                  <summary className="font-semibold cursor-pointer text-slate-800 group-open:text-purple-600 transition-colors">
                    How long does shipping take?
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Standard shipping usually takes 3–7 business days. Express
                    options are available at checkout.
                  </p>
                </details>

                <details className="group p-6 bg-gradient-to-r from-slate-50 to-purple-50/50 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200">
                  <summary className="font-semibold cursor-pointer text-slate-800 group-open:text-purple-600 transition-colors">
                    Can I return items?
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Yes — returns accepted within 14 days for eligible items
                    (see our Returns policy).
                  </p>
                </details>

                <details className="group p-6 bg-gradient-to-r from-slate-50 to-purple-50/50 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200">
                  <summary className="font-semibold cursor-pointer text-slate-800 group-open:text-purple-600 transition-colors">
                    Do you accept wholesale or collaborations?
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Yes! Email partnerships@doficloset.com and our team will
                    follow up.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* Sidebar - Contact Info */}
          <aside className="xl:col-span-2 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8  top-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                Contact details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-purple-50/50 p-4 rounded-2xl transition-all duration-200">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-200">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <Link
                      to="tel:+15551234567"
                      className="text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      +1 (555) 123-4567
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-purple-50/50 p-4 rounded-2xl transition-all duration-200">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-200">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <Link
                      to="mailto:support@doficloset.com"
                      className="text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      support@doficloset.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-purple-50/50 p-4 rounded-2xl transition-all duration-200">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-200">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Address</div>
                    <div className="text-slate-600">
                      12 Market Lane, Lagos, Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiClock className="w-5 h-5 text-purple-600" />
                Opening hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700 font-medium">Mon — Fri</span>
                  <span className="text-slate-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                    9:00 — 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700 font-medium">Saturday</span>
                  <span className="text-slate-600 bg-yellow-50 px-3 py-1 rounded-full text-sm">
                    10:00 — 16:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700 font-medium">Sunday</span>
                  <span className="text-slate-600 bg-red-50 px-3 py-1 rounded-full text-sm">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Find us</h3>
              <div className="h-48 overflow-hidden rounded-2xl border-2 border-slate-200">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.34019112937!2d3.358035597270857!3d6.524379123793976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf3a5b9b74933%3A0x6b8b2b0d5ec5b9d1!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="border-0 grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <Link
                to="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group"
              >
                View on Google Maps
                <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3">Need help styling?</h4>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Book a complimentary styling call and our team will help you
                  pull together a look.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-purple-700 px-6 py-3 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request styling
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
