import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ContactUs() {
  return (
    <main className="w-full xl:w-[80%] mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-24 flex flex-col lg:flex-row items-start">
      {/* Left Section (Contact Info) */}
      <div className="w-full lg:w-[45%] space-y-4 sm:space-y-6">
        <h3 className="text-green-600 font-bold text-lg md:text-xl lg:text-2xl">
          CONTACT US
        </h3>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
          FILL FREE TO REACH!!
        </h2>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-md">
          We're here to assist you! Get in touch with Ksonal International for
          all your import and export needs.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaPhoneAlt className="text-green-500 text-lg md:text-xl" />
            </div>
            <div>
              <h4 className="text-green-600 font-bold text-base md:text-lg">
                Mobile Number
              </h4>
              <p className="text-gray-700 text-base md:text-lg">
                +91 9409810700
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaEnvelope className="text-green-500 text-lg md:text-xl" />
            </div>
            <div>
              <h4 className="text-green-600 font-bold text-base md:text-lg">
                Email
              </h4>
              <p className="text-gray-700 text-base md:text-lg">
                KSONALINTERNATIONAL @GMAIL.COM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Form - Moves Below on md, Side-by-Side on lg) */}
      <div className="w-full lg:w-[50%] bg-white md:p-4 mt-8 md:mt-4 lg:mt-0 flex flex-col justify-start">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full xl:mr-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <textarea
            placeholder="Message"
            rows="4"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500 sm:col-span-2"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-5 text-xl md:text-2xl bg-green-600 hover:bg-green-700 text-white px-6 flex items-center justify-center gap-4 sm:col-span-2 shadow-[10px_10px_rgb(0,0,0)]"
          >
            SUBMIT <FaArrowRight />
          </button>
        </form>
      </div>
    </main>
  );
}
