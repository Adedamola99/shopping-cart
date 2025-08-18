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

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice);
    }
    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
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
        backgroundUrl="https://source.unsplash.com/1600x900/?vintage,market"
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
