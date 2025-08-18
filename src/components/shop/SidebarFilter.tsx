import { useState } from "react";

interface SidebarFilterProps {
  categories: string[];
  onFilterChange: (filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }) => void;
}

export default function SidebarFilter({
  categories,
  onFilterChange,
}: SidebarFilterProps) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const applyFilters = () => {
    onFilterChange({
      category: category || undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      search: search || undefined,
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded w-64">
      <h2 className="font-bold mb-3">Filters</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {/* Category */}
      <label className="block mb-2 font-medium">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Price */}
      <label className="block mb-2 font-medium">Price Range</label>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={applyFilters}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Apply
      </button>
    </div>
  );
}
