// src/pages/Deals.tsx
import React, { useMemo, useState } from "react";
import Navbar from "../components/layouts/NavBar";
import HeroSection from "../components/layouts/HeroSection";
import Footer from "../components/layouts/Footer";
import { useAppSelector } from "../store/hook";
import { selectAllProducts } from "../features/products/productSlice";
import DealCard from "../components/pageComponents/DealCard";
import BackgroundImage from "../asset/images/background-5.jpg";
import { Link } from "react-router-dom";

export default function Deals() {
  const products = useAppSelector(selectAllProducts);

  // determine which products are "deals" - pick a stable subset:
  // e.g. product.id % 3 === 0 => on deal
  const allDeals = useMemo(
    () => products.filter((p) => p.id % 3 === 0),
    [products]
  );

  const categories = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.category || "uncategorized"))),
    [products]
  );

  // UI state
  const [category, setCategory] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [sortBy, setSortBy] = useState<"discount" | "price-asc" | "price-desc">(
    "discount"
  );

  // compute discount for sorting - same logic as DealCard
  const discountFor = (id: number) => ((id * 13) % 40) + 10;

  const filtered = useMemo(() => {
    let list = [...allDeals];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (maxPrice !== "")
      list = list.filter((p) => {
        const d = discountFor(p.id);
        const sale = Number((p.price * (1 - d / 100)).toFixed(2));
        return sale <= Number(maxPrice);
      });

    if (sortBy === "price-asc")
      list.sort((a, b) => {
        const aSale = Number(
          (a.price * (1 - discountFor(a.id) / 100)).toFixed(2)
        );
        const bSale = Number(
          (b.price * (1 - discountFor(b.id) / 100)).toFixed(2)
        );
        return aSale - bSale;
      });
    else if (sortBy === "price-desc")
      list.sort((a, b) => {
        const aSale = Number(
          (a.price * (1 - discountFor(a.id) / 100)).toFixed(2)
        );
        const bSale = Number(
          (b.price * (1 - discountFor(b.id) / 100)).toFixed(2)
        );
        return bSale - aSale;
      });
    else list.sort((a, b) => discountFor(b.id) - discountFor(a.id)); // highest discount first

    return list;
  }, [allDeals, category, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection
        title="Hot Deals"
        subtitle="Curated markdowns — limited time picks from our collection."
        backgroundUrl={BackgroundImage}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Deals" }]}
        cta={{ label: "Shop All", href: "/shop" }}
        heightClass="h-[44vh]"
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
              <h4 className="font-semibold">Filters</h4>

              <label className="block text-sm">
                Category
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2"
                >
                  <option value="all">All</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm">
                Max sale price (Naira / $)
                <input
                  type="number"
                  value={maxPrice as any}
                  onChange={(e) =>
                    setMaxPrice(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  placeholder="e.g. 50"
                  className="mt-2 w-full border rounded px-3 py-2"
                />
              </label>

              <label className="block text-sm">
                Sort by
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="mt-2 w-full border rounded px-3 py-2"
                >
                  <option value="discount">Best discount</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                </select>
              </label>

              <div>
                <button
                  onClick={() => {
                    setCategory("all");
                    setMaxPrice("");
                    setSortBy("discount");
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Small promo box */}
            <div className="mt-4 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
              <h5 className="font-semibold">Limited time</h5>
              <p className="text-sm text-gray-600 mt-2">
                Selected deals end within 24 hours. Add to cart to reserve at
                sale price.
              </p>
              <Link
                to="/checkout"
                className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded"
              >
                Checkout Now
              </Link>
            </div>
          </aside>

          {/* Results */}
          <section className="lg:col-span-3">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  Deals ({filtered.length})
                </h2>
                <p className="text-sm text-gray-500">
                  Hand-picked discount picks from your collection
                </p>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white p-8 rounded shadow text-center">
                <h3 className="font-semibold">No deals right now</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Try resetting filters or browse the full shop.
                </p>
                <div className="mt-4">
                  <Link
                    to="/shop"
                    className="bg-purple-600 text-white px-4 py-2 rounded"
                  >
                    Browse all products
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <DealCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Featured Deals / carousel placeholder */}
        {allDeals.length > 0 && (
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Featured flash deals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allDeals.slice(0, 3).map((p) => (
                <DealCard key={`feat-${p.id}`} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
