// src/components/AuthCard.tsx
import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  extra?: React.ReactNode; // right-side or bottom extra (e.g., illustration)
}

export default function AuthCard({ title, subtitle, children, extra }: Props) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12">
      <div className="container px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* left: form card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-extrabold text-slate-900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
              )}
            </div>
            <div>{children}</div>
          </div>

          {/* right: illustration / extra */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md">
              {extra ?? (
                <div className="rounded-lg p-6 bg-gradient-to-br from-purple-50 to-white border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1520975918533-6b6f7d6b3df6?q=80&w=900&auto=format&fit=crop"
                    alt="thrift shop"
                    className="w-full h-56 object-cover rounded-lg shadow-sm"
                  />
                  <p className="mt-4 text-sm text-slate-600">
                    Join our community — save, style, and find curated preloved
                    pieces.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
