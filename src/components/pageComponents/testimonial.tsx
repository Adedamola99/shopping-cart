type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

const Testimonial: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha K.",
    role: "Fashion Blogger",
    quote:
      "DoFi Closet changed my wardrobe — high quality gowns and speedy delivery!",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "t2",
    name: "Mark O.",
    role: "Stylist",
    quote: "Affordable designers with amazing fit. Highly recommended.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "t3",
    name: "Chinelo R.",
    role: "Bride",
    quote: "I found my dream dress here. Customer service was top-notch.",
    avatar: "/images/avatar-3.jpg",
  },
];

const Testimonials: React.FC<{ items?: Testimonial[] }> = ({
  items = Testimonial,
}) => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <blockquote
              key={t.id}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src={t.avatar || "https://via.placeholder.com/80"}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
                </div>
              </div>

              <p className="mt-4 text-gray-700">“{t.quote}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
