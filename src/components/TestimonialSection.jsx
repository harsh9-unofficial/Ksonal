import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "LESLIE ALEXANDER",
    company: "FERRARI",
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam.",
    img: "/images/Ellipse4.png",
  },
  {
    name: "ANNETTE BLACK",
    company: "LOUIS VUITTON",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.",
    img: "/images/Ellipse4.png",
    featured: true,
  },
  {
    name: "RALPH EDWARDS",
    company: "MITSUBISHI",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "/images/Ellipse4.png",
  },
];

const TestimonialSection = () => {
  return (
    <section className="p-4 lg:py-16 lg:pb-20 lg:px-16 text-center">
      {/* Section Title */}
      <h3 className="text-green-600 font-semibold text-3xl">TESTIMONIAL</h3>
      <h2 className="text-4xl md:text-4xl font-bold mt-2 mb-8">
        OUR CLIENTS SAY!
      </h2>

      {/* Testimonials Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-0 w-full xl:w-[80%] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full sm:w-[90%] mx-auto py-8 lg:py-10 xl:py-14 relative p-8 rounded-3xl flex flex-col text-center bg-white ${
              testimonial.featured
                ? "border border-gray-300 shadow-[0px_0px_5px_4px_rgba(0,0,0,0.15)] "
                : "p-8"
            }`}
          >
            <div>
              {/* Quote Icon */}
              <FaQuoteRight className="absolute -top-[8%] right-[7%] text-green-600 text-6xl" />
            </div>
            <div className="flex justify-center sm:justify-start gap-3 align-left">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-22 sm:h-22 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="flex flex-col text-left">
                <h4 className="text-lg font-bold mt-4">{testimonial.name}</h4>
                <p className="text-gray-500 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-left">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
