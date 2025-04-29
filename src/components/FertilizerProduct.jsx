import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { USER_BASE_URL } from "../config";

export default function FertilizerProduct({ title, longDescription, image }) {
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
      const res = await fetch(`${USER_BASE_URL}/inquiry`, {
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
      closeModal();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [transformOrigin, setTransformOrigin] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin({ x, y });
  };

  const handleMouseLeave = () => {
    setTransformOrigin({ x: 50, y: 50 });
  };

  return (
    <>
      <motion.section
        className="w-[100%] lg:w-[90%] mx-auto p-4 flex flex-col lg:py-8 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
          {/* Image */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center overflow-hidden relative group"
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={image}
              alt={title}
              ref={imageRef}
              className="md:w-[70%] lg:w-[100%] transition-transform duration-300 ease-out group-hover:scale-100"
              style={{
                transformOrigin: `${transformOrigin.x}% ${transformOrigin.y}%`,
              }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-[55%] space-y-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug capitalize">
              {title}
            </h2>

            <div>
              <h3 className="font-semibold text-xl md:text-2xl text-black py-6">
                DESCRIPTION:
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg normal-case">
                {longDescription}
              </p>
            </div>

            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              className="mt-4 flex mx-auto md:mx-0 items-center gap-4 bg-green-600 cursor-pointer text-white px-6 py-3 text-lg"
            >
              Inquiry Now <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-3xl rounded-xl px-4 py-8 md:p-8 border border-gray-300 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-medium">Fill this Form</h2>
            <span>We will connect with you within 24 hours</span>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full xl:mr-4 py-4"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                name="country"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <textarea
                placeholder="Message"
                name="message"
                rows="4"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500 sm:col-span-2"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="py-5 md:text-xl bg-green-600 cursor-pointer text-white px-6 flex items-center justify-center gap-4 sm:col-span-2 shadow-[10px_10px_rgb(0,0,0)]"
              >
                SUBMIT <FaArrowRight />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
