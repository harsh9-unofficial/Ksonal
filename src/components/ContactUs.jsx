import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { USER_BASE_URL } from "../config";

export default function ContactUs() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, country, message } = e.target.elements;

    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      country: country.value,
      message: message.value.trim(),
    };

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.message
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const res = await fetch(`${USER_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Message failed to send.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <main className="w-full container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-24 flex flex-col lg:flex-row items-start">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-[48%] space-y-4 sm:space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
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
                KSONALINTERNATIONAL@GMAIL.COM
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-[52%] bg-white md:p-4 mt-8 md:mt-4 lg:mt-0 flex flex-col justify-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full xl:mr-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-4 py-4 text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="country"
            className="p-4 py-4 text-xl border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="p-4 py-4 text-xl border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500 sm:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="py-5 text-xl md:text-2xl bg-green-600 hover:bg-green-700 cursor-pointer text-white px-6 flex items-center justify-center gap-4 sm:col-span-2 shadow-[10px_10px_rgb(0,0,0)]"
          >
            SUBMIT <FaArrowRight />
          </button>
        </form>
      </motion.div>
    </main>
  );
}
