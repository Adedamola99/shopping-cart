// src/pages/SearchResults.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { selectAllProducts } from "../features/products/productSlice";
import ProductGrid from "../components/shop/ProductGrid";
import Navbar from "../components/layouts/NavBar";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim();
  const allProducts = useAppSelector(selectAllProducts);

  // UI state
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<
    "relevance" | "price-asc" | "price-desc"
  >("relevance");

  // derive categories from products
  const categories = useMemo(
    () =>
      Array.from(
        new Set(allProducts.map((p) => p.category || "uncategorized"))
      ),
    [allProducts]
  );

  // filtered list
  const filtered = useMemo(() => {
    if (!q) return allProducts;
    const term = q.toLowerCase();
    return allProducts.filter((p) => {
      return (
        p.name.toLowerCase().includes(term) ||
        (p.category || "").toLowerCase().includes(term) ||
        (p.description || "").toLowerCase().includes(term)
      );
    });
  }, [allProducts, q]);

  // category filter
  const categoryFiltered = useMemo(() => {
    if (selectedCategory === "all") return filtered;
    return filtered.filter((p) => p.category === selectedCategory);
  }, [filtered, selectedCategory]);

  // sorted
  const results = useMemo(() => {
    const copy = [...categoryFiltered];
    if (sortBy === "price-asc") return copy.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return copy.sort((a, b) => b.price - a.price);
    // relevance (default) - small heuristic: products with term in name rank higher
    if (q) {
      const term = q.toLowerCase();
      return copy.sort((a, b) => {
        const aScore =
          (a.name.toLowerCase().includes(term) ? 5 : 0) +
          (a.category.toLowerCase().includes(term) ? 2 : 0) +
          (a.description.toLowerCase().includes(term) ? 1 : 0);
        const bScore =
          (b.name.toLowerCase().includes(term) ? 5 : 0) +
          (b.category.toLowerCase().includes(term) ? 2 : 0) +
          (b.description.toLowerCase().includes(term) ? 1 : 0);
        return bScore - aScore;
      });
    }
    return copy;
  }, [categoryFiltered, sortBy, q]);

  // if q changes externally, reset category
  useEffect(() => {
    setSelectedCategory("all");
  }, [q]);

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-7xl mx-auto">
        {/* header */}
        <div className="mb-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                Search results {q ? `for “${q}”` : ""}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {results.length} item{results.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm">Sort</label>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "relevance" | "price-asc" | "price-desc"
                  )
                }
                className="border rounded px-3 py-2 bg-white"
              >
                <option value="relevance">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-4 rounded shadow space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="all">All</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Quick actions</h3>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSortBy("relevance");
                    setSearchParams(q ? { q } : {});
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
                >
                  Reset filters
                </button>
              </div>

              <div className="text-xs text-gray-500 mt-2">
                Tip: try searching category names (e.g., “men’s jackets”), or
                product names for faster matches.
              </div>
            </div>
          </aside>

          {/* results */}
          <section className="lg:col-span-3">
            {results.length === 0 ? (
              <div className="bg-white p-8 rounded shadow text-center">
                <h3 className="text-lg font-semibold">No results</h3>
                <p className="text-sm text-gray-600 mt-2">
                  We couldn’t find anything for <strong>{q}</strong>.
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  <Link
                    to="/shop"
                    className="px-4 py-2 bg-purple-600 text-white rounded"
                  >
                    Browse all products
                  </Link>
                  <button
                    onClick={() => {
                      // relax query and try fallback: clear query param
                      setSearchParams({});
                    }}
                    className="px-4 py-2 border rounded"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <ProductGrid products={results} />
                </div>
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
