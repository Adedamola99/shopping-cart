// src/components/Testimonials.tsx
import React from "react";
import avatar1 from "../../asset/images/avatar-1.jpg";
import avatar2 from "../../asset/images/avatar-2.jpg";
import avatar3 from "../../asset/images/avatar-3.jpg";
import avatar4 from "../../asset/images/avatar-4.jpg";
import avatar5 from "../../asset/images/avatar-5.jpg";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

const TestimonialData: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha K.",
    role: "Fashion Blogger",
    quote:
      "DoFi Closet changed my wardrobe — high quality gowns and speedy delivery!",
    avatar: avatar1,
  },
  {
    id: "t2",
    name: "Mark O.",
    role: "Stylist",
    quote: "Affordable designers with amazing fit. Highly recommended.",
    avatar: avatar2,
  },
  {
    id: "t3",
    name: "Chinelo R.",
    role: "Bride",
    quote: "I found my dream dress here. Customer service was top-notch.",
    avatar: avatar3,
  },
];

const Testimonials: React.FC<{
  items?: Testimonial[];
  variant?: "default" | "modern";
  showTitle?: boolean;
}> = ({ items = TestimonialData, variant = "modern", showTitle = true }) => {
  if (variant === "modern") {
    const avatarList = [avatar1, avatar2, avatar3, avatar4, avatar5];
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          {showTitle && (
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from our amazing community of fashion lovers
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {items.map((testimonial, index) => {
              const gradientColors = [
                "from-purple-100 to-purple-50",
                "from-pink-100 to-pink-50",
                "from-blue-100 to-blue-50",
              ];
              const ringColors = [
                "ring-purple-200",
                "ring-pink-200",
                "ring-blue-200",
              ];
              const quoteColors = [
                "text-purple-100",
                "text-pink-100",
                "text-blue-100",
              ];
              const roleColors = [
                "text-purple-600",
                "text-pink-600",
                "text-blue-600",
              ];

              return (
                <div
                  key={testimonial.id}
                  className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                      gradientColors[index % 3]
                    } rounded-full -translate-y-16 translate-x-16 opacity-50`}
                  ></div>

                  {/* Quote icon */}
                  <div
                    className={`absolute top-6 right-6 ${
                      quoteColors[index % 3]
                    } opacity-20`}
                  >
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                  </div>

                  <div className="relative">
                    {/* Quote */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className={`w-full h-full object-cover ring-4 ${
                              ringColors[index % 3]
                            } group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">
                          {testimonial.name}
                        </div>
                        {testimonial.role && (
                          <div
                            className={`${
                              roleColors[index % 3]
                            } font-semibold text-sm`}
                          >
                            {testimonial.role}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-4 border-white shadow-lg overflow-hidden"
                  >
                    <img
                      src={avatarList[i]}
                      alt={`Customer ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-700">
                  5,000+ customers
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default/original variant
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {showTitle && (
          <h2 className="text-2xl font-bold mb-6">What customers say</h2>
        )}
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

              <p className="mt-4 text-gray-700">"{t.quote}"</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
