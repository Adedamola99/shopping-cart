const Newsletter: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#FFF7ED] to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">Join our newsletter</h3>
        <p className="text-sm text-gray-600 mb-6">
          Get early access to new arrivals, special offers and style tips.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            aria-label="Email"
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
          />
          <button className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
