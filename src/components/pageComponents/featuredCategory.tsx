const FeaturedCategories: React.FC = () => {
  const cats = [
    "Evening Gowns",
    "Bridal",
    "Casual",
    "Workwear",
    "Accessories",
    "New Arrivals",
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map((c) => (
            <a
              key={c}
              href={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-3 flex items-center justify-center text-2xl font-bold">
                {c.charAt(0)}
              </div>
              <div className="text-sm font-medium group-hover:text-gray-900">
                {c}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
