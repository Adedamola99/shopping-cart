// pages/ShopPage.tsx
import { useEffect, useState } from "react";
import {
  fetchProducts,
  selectAllProducts,
} from "../features/products/productSlice";
import SidebarFilter from "../components/shop/SidebarFilter";
import ProductGrid from "../components/shop/ProductGrid";
import { useAppDispatch, useAppSelector } from "../store/hook";
import type { Products } from "../features/products/productSlice";
import Navbar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import HeroSection from "../components/layouts/HeroSection";
import BackgroundImage from "../asset/images/background-2.jpg";

export default function ShopPage() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(selectAllProducts);
  const loading = useAppSelector((state) => state.product.loading);
  const error = useAppSelector((state) => state.product.error);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productList.length]);

  // Keep filteredProducts in sync when the raw list changes
  useEffect(() => {
    setFilteredProducts(productList);
  }, [productList]);

  const categories = Array.from(new Set(productList.map((p) => p.category)));

  const handleFilterChange = (filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }) => {
    let result = [...productList];

    // destructure into local consts so TypeScript can properly narrow types
    const { category, minPrice, maxPrice, search } = filters;

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Use explicit checks against undefined (or use typeof to ensure a number)
    if (typeof minPrice === "number") {
      result = result.filter((p) => p.price >= minPrice);
    }
    if (typeof maxPrice === "number") {
      result = result.filter((p) => p.price <= maxPrice);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    setFilteredProducts(result);
  };

  if (loading) return <p className="p-6">Loading products...</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <HeroSection
        title="Seasonal Sales"
        subtitle="Limited time — curated picks and deep discounts."
        backgroundUrl={BackgroundImage}
        heightClass="h-[50vh]"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sales" }]}
        cta={{ label: "View Deals", href: "/deals" }}
      />

      <div className="flex gap-6 p-6">
        <SidebarFilter
          categories={categories}
          onFilterChange={handleFilterChange}
        />
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="p-6 text-center">No products match your filters.</p>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
