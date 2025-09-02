import { Link } from "react-router-dom";

const PromoBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-lg">
          Spring Sale — Up to 50% off on selected gowns
        </h3>
        <p className="text-sm opacity-90">
          Use code <span className="font-bold">SPRING50</span> at checkout. Free
          returns within 30 days.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/shop">
          <a className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold shadow">
            Shop Now
          </a>
        </Link>
        <Link to="/deals">
          <a className="border border-white/30 px-4 py-2 rounded-md text-sm">
            View Deals
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default PromoBanner;
