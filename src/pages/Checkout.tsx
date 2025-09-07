// pages/Checkout.tsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { selectCartItem, selectCartTotal } from "../features/carts/cartSlice";
import { clearCart } from "../features/carts/cartSlice";
import HeroSection from "../components/layouts/HeroSection";
import Footer from "../components/layouts/Footer";
import BackgroundImage from "../asset/images/background-6.jpg";

type ShippingMethod = {
  id: string;
  label: string;
  price: number;
  eta: string;
};

const shippingMethods: ShippingMethod[] = [
  { id: "standard", label: "Standard Shipping", price: 4.99, eta: "4-7 days" },
  { id: "express", label: "Express Shipping", price: 9.99, eta: "1-3 days" },
  { id: "pickup", label: "Local Pickup", price: 0, eta: "Same day" },
];

export default function Checkout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItem);
  const cartTotal = useAppSelector(selectCartTotal);

  // customer form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [shippingId, setShippingId] = useState<string>(shippingMethods[0].id);
  const shipping = useMemo(
    () =>
      shippingMethods.find((s) => s.id === shippingId) ?? shippingMethods[0],
    [shippingId]
  );

  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  // fake card fields (we don't process them; purely UI)
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  // UI state
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const totalWithShipping = Number(cartTotal) + Number(shipping.price);

  const validate = () => {
    if (!fullName.trim()) return "Please enter your full name";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
      return "Please enter a valid email";
    if (!phone.trim()) return "Please enter a phone number";
    if (!address1.trim()) return "Please enter your address";
    if (!city.trim()) return "Please enter your city";
    if (!postalCode.trim()) return "Please enter a postal code";
    // If card chosen, do basic checks
    if (paymentMethod === "card") {
      if (!/^\d{12,19}$/.test(cardNumber.replace(/\s+/g, "")))
        return "Enter a valid card number (digits only)";
      if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) return "Expiry must be MM/YY";
      if (!/^\d{3,4}$/.test(cardCvv)) return "Enter a valid CVV";
    }
    if (cartItems.length === 0) return "Your cart is empty";
    return null;
  };

  const handlePlaceOrder = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setErrors(null);
    const err = validate();
    if (err) {
      setErrors(err);
      return;
    }

    setLoading(true);

    // simulate payment processing delay
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString(),
        customer: {
          name: fullName,
          email,
          phone,
          address1,
          address2,
          city,
          stateRegion,
          postalCode,
          country,
        },
        shipping: {
          method: shipping.label,
          price: shipping.price,
          eta: shipping.eta,
        },
        payment: {
          method:
            paymentMethod === "card"
              ? "Card (simulated)"
              : "PayPal (simulated)",
          last4:
            paymentMethod === "card"
              ? cardNumber.replace(/\s+/g, "").slice(-4)
              : undefined,
        },
        items: cartItems,
        totals: {
          subtotal: cartTotal,
          shipping: shipping.price,
          total: Number(totalWithShipping.toFixed(2)),
        },
      };

      // save last order for success page (session storage is fine for demo)
      try {
        sessionStorage.setItem("lastOrder", JSON.stringify(order));
      } catch (err) {
        // ignore
      }

      // clear cart in redux
      dispatch(clearCart());

      setLoading(false);
      navigate("/checkout/success");
    }, 1400);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Checkout</h2>
          <p className="mt-4 text-gray-600">
            Your cart is empty. Add something to checkout.
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <HeroSection
        title="Checkout"
        subtitle="Pay the Bills"
        backgroundUrl={BackgroundImage}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        cta={{ label: "Shop All", href: "/shop" }}
        heightClass="h-[44vh]"
      />
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold"></h2>
        <main className="p-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* left: form */}
            <form
              className="lg:col-span-2 space-y-6 bg-white p-6 rounded shadow"
              onSubmit={handlePlaceOrder}
            >
              <section>
                <h2 className="font-semibold mb-3">Contact & Shipping</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="border p-2 rounded"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 rounded"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="border p-2 rounded"
                  />
                  <input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal code"
                    className="border p-2 rounded"
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <input
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    placeholder="Address line 1"
                    className="border p-2 rounded"
                  />
                  <input
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    placeholder="Address line 2 (optional)"
                    className="border p-2 rounded"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="border p-2 rounded"
                    />
                    <input
                      value={stateRegion}
                      onChange={(e) => setStateRegion(e.target.value)}
                      placeholder="State/Region"
                      className="border p-2 rounded"
                    />
                    <input
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Country"
                      className="border p-2 rounded"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-semibold mb-3">Shipping Method</h2>
                <div className="space-y-2">
                  {shippingMethods.map((s) => (
                    <label
                      key={s.id}
                      className="flex items-center gap-3 p-3 border rounded"
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingId === s.id}
                        onChange={() => setShippingId(s.id)}
                      />
                      <div>
                        <div className="font-medium">{s.label}</div>
                        <div className="text-sm text-gray-500">
                          {s.eta} • ${s.price}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-semibold mb-3">Payment</h2>
                <div className="flex gap-3 mb-3">
                  <label
                    className={`px-4 py-2 border rounded cursor-pointer ${
                      paymentMethod === "card" ? "ring-2 ring-purple-400" : ""
                    }`}
                  >
                    <input
                      className="hidden"
                      type="radio"
                      name="pm"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    Card (Fake)
                  </label>
                  <label
                    className={`px-4 py-2 border rounded cursor-pointer ${
                      paymentMethod === "paypal" ? "ring-2 ring-purple-400" : ""
                    }`}
                  >
                    <input
                      className="hidden"
                      type="radio"
                      name="pm"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                    />
                    PayPal (Fake)
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Card number (digits only)"
                      className="border p-2 rounded md:col-span-2"
                    />
                    <input
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="border p-2 rounded"
                    />
                    <input
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="CVV"
                      className="border p-2 rounded md:col-span-1"
                    />
                  </div>
                )}
              </section>

              {errors && (
                <div className="text-red-600 bg-red-50 p-3 rounded">
                  {errors}
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded font-semibold disabled:opacity-60"
                >
                  {loading ? "Processing..." : "Place Order (Fake)"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // quick debug: prefill data for testing
                    setFullName("Test User");
                    setEmail("test@example.com");
                    setPhone("+123456789");
                    setAddress1("12 Test Road");
                    setCity("Lagos");
                    setPostalCode("100001");
                    setCountry("Nigeria");
                  }}
                  className="text-sm text-gray-500 underline"
                >
                  Auto-fill test
                </button>
              </div>
            </form>

            {/* right: summary */}
            <aside className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-4">
                {cartItems.map((it: any) => (
                  <div key={it.id} className="flex items-center gap-3">
                    <img
                      src={it.img}
                      alt={it.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{it.name}</div>
                      <div className="text-sm text-gray-500">
                        x{it.quantity} • ${it.price}
                      </div>
                    </div>
                    <div className="font-semibold">
                      ${(it.price * it.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t my-4 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${Number(cartTotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${Number(totalWithShipping).toFixed(2)}</span>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                This is a demo checkout — payments are simulated and no real
                transaction will occur.
              </div>
            </aside>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
