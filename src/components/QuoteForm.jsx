import React from "react";
import { FaPhone, FaArrowRight } from "react-icons/fa";

const QuoteForm = () => {
  return (
    <section className="w-[100%] lg:w-[95%] xl:w-[71%] mx-auto py-12 lg:py-16 xl:py-20 px-4 xl:px-0 flex flex-col lg:flex-row items-center gap-4">
      {/* Left Section - Text & Contact Info */}
      <div className="lg:w-[45%] text-center lg:text-left xl:ml-4">
        <h3 className="text-green-600 font-semibold text-2xl py-4">
          GET A QUOTE
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 py-4">
          REQUEST A FREE QUOTE!
        </h2>
        <p className="text-gray-700 mt-4 text-xl md:text-2xl xl:w-[80%] py-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo erat amet.
        </p>

        {/* Contact Info */}
        <div className="flex items-center mt-4 gap-4 justify-center lg:justify-start py-4">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-100 rounded-full shadow-md md:p-4">
            <FaPhone className="text-green-600 text-2xl md:text-4xl" />
          </div>
          <div>
            <p className="text-green-600 font-semibold text-lg md:text-xl">
              Call for any query!
            </p>
            <p className="text-xl md:text-2xl font-bold">+91 9409810700</p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[60%] bg-white shadow-lg rounded-xl p-4 md:p-8 border border-gray-300">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full xl:mr-4 py-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 py-5 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 py-5 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 py-5 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select className="p-4 py-5 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <textarea
            placeholder="Message"
            rows="4"
            className="p-4 py-5 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500 sm:col-span-2"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-5 text-xl md:text-2xl bg-green-600 cursor-pointer text-white px-6 flex items-center justify-center gap-4 sm:col-span-2 shadow-[10px_10px_rgb(0,0,0)]"
          >
            SUBMIT <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
