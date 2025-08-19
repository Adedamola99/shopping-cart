// src/pages/Login.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/authCard/AuthCard";
import { loginUser } from "../utils/auth/fakeAuth";
import Navbar from "../components/layouts/NavBar";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    setLoading(true);
    try {
      await loginUser(email.trim(), password);
      // redirect - you can change target (home or saved redirect)
      navigate("/");
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = () => {
    setEmail("test@example.com");
    setPassword("password");
  };

  return (
    <>
      <Navbar />
      <AuthCard title="Welcome back" subtitle="Sign in to your account">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-300"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-300"
              placeholder="••••••••"
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="border" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <Link
              to="/forgot"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot?
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <button
              type="button"
              onClick={handleQuickDemo}
              className="w-full border px-3 py-2 rounded text-sm"
            >
              Fill demo credentials
            </button>
          </div>

          <div className="text-sm text-center text-slate-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-600 hover:underline">
              Create one
            </Link>
          </div>

          <div className="pt-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-3 flex gap-3">
              <button
                type="button"
                className="flex-1 border rounded py-2 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M21.35 11.1H12v2.9h5.35C16.9 16 14.7 17.5 12 17.5c-3.6 0-6.6-2.9-6.6-6.5s3-6.5 6.6-6.5c1.8 0 3.3.7 4.5 1.9l2.1-2.1C17.6 3 14.9 2 12 2 6.5 2 2 6.6 2 12s4.5 10 10 10c5.5 0 9.9-4.1 9.9-9.6 0-.7-.1-1.3-.55-1.6z"
                  />
                </svg>
                Google
              </button>
              <button type="button" className="flex-1 border rounded py-2">
                Facebook
              </button>
            </div>
          </div>
        </form>
      </AuthCard>
    </>
  );
}
