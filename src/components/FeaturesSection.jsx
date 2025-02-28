import React from "react";
import { FaGlobe, FaBox, FaPhone } from "react-icons/fa";

const features = [
  { icon: <FaGlobe />, title: "Worldwide Service" },
  { icon: <FaBox />, title: "On Time Delivery" },
  { icon: <FaPhone />, title: "24/7 Telephone Support" },
];

const FeaturesSection = () => {
  return (
    <section className="py-2 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12">
      {/* Left Side - Image */}
      <div className="w-[90%] lg:w-1/2 relative">
        <img
          src="/images/Rectangle13.png"
          alt="Delivery"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Features */}
      <div className="w-[100%] lg:w-1/2 text-center lg:text-left px-4 sm:px-8">
        <h3 className="text-green-600 font-semibold text-2xl">OUR FEATURES</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          WE ARE A TRUSTED COMPANY SINCE 1990
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-[92%] lg:max-w-none mx-auto lg:mx-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-5 border border-gray-200"
            >
              <span className="text-green-600 text-4xl p-3">
                {feature.icon}
              </span>
              <p className="text-lg font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
