// pages/CheckoutSuccess.tsx
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";

export default function CheckoutSuccess() {
  const navigate = useNavigate();
  let order: any = null;
  try {
    const raw = sessionStorage.getItem("lastOrder");
    order = raw ? JSON.parse(raw) : null;
  } catch (err) {
    order = null;
  }

  const downloadReceipt = () => {
    if (!order) return;
    const blob = new Blob([JSON.stringify(order, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${order.id || "order"}-receipt.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!order) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold">No recent order found</h2>
          <p className="mt-4 text-gray-600">
            You can continue shopping or check your orders.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/" className="px-4 py-2 bg-purple-600 text-white rounded">
              Browse Products
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded shadow p-8 text-center">
          <div className="mx-auto inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mt-4">Payment Successful</h1>
          <p className="text-gray-600 mt-2">
            Order{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {order.id}
            </span>{" "}
            placed on {new Date(order.createdAt).toLocaleString()}
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold">Shipping</h3>
              <p className="mt-1">{order.customer.name}</p>
              <p className="text-sm text-gray-500">
                {order.customer.email} • {order.customer.phone}
              </p>
              <p className="mt-2 text-sm">
                {order.customer.address1}
                {order.customer.address2 ? `, ${order.customer.address2}` : ""}
              </p>
              <p className="text-sm">
                {order.customer.city} {order.customer.stateRegion}{" "}
                {order.customer.postalCode}
              </p>
              <p className="text-sm">{order.customer.country}</p>
            </div>

            <div>
              <h3 className="font-semibold">Summary</h3>
              <div className="mt-2 space-y-2">
                {order.items.map((it: any) => (
                  <div
                    key={it.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={it.img}
                        alt={it.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <div className="font-medium">{it.name}</div>
                        <div className="text-xs text-gray-500">
                          x{it.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold">
                      ${(it.price * it.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="border-t pt-2 mt-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${Number(order.totals.subtotal).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${Number(order.totals.shipping).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${Number(order.totals.total).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={downloadReceipt}
              className="px-4 py-2 bg-white border rounded"
            >
              Download Receipt
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
