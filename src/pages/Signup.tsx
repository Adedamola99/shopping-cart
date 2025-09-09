// src/pages/Signup.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthCard from "../components/authCard/AuthCard";
import { registerUser } from "../utils/auth/fakeAuth";
import Navbar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !password) {
      setError("Please fill all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await registerUser(name.trim(), email.trim(), password);
      navigate("/");
    } catch (err: any) {
      setError(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <AuthCard
        title="Create an account"
        subtitle="Start saving & styling preloved pieces"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Full name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              type="email"
              placeholder="you@gmail.com"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
                type="password"
                placeholder="At least 6 characters"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                Confirm
              </span>
              <input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
                type="password"
                placeholder="Repeat password"
              />
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
            <Link
              to="/login"
              className="flex-1 border rounded py-2 text-center"
            >
              Sign in
            </Link>
          </div>

          <div className="text-xs text-slate-500">
            By creating an account you agree to our{" "}
            <Link to="#" className="text-purple-600">
              Terms
            </Link>
            .
          </div>
        </form>
      </AuthCard>
      <Footer />
    </>
  );
}
