import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function FertilizerProduct({ title, longDescription, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="w-[100%] lg:w-[90%] mx-auto p-4 flex flex-col lg:py-8 gap-8 items-center">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
          {/* Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <img src={image} alt={title} className="md:w-[70%] lg:w-[100%]" />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[55%] space-y-5">
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

            <button
              onClick={openModal}
              className="mt-4 flex mx-auto md:mx-0 items-center gap-4 bg-green-600 cursor-pointer text-white px-6 py-3 text-lg"
            >
              Inquiry Now <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl rounded-xl px-4 py-8 md:p-8 border border-gray-300 relative">
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
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full xl:mr-4 py-4">
              <input
                type="text"
                placeholder="Name"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <textarea
                placeholder="Message"
                rows="4"
                className="p-4 py-5 md:text-xl border border-gray-600 placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-green-500 sm:col-span-2"
              ></textarea>

              {/* Submit Button */}
              <button
                type="button"
                onClick={closeModal}
                className="py-5 md:text-xl bg-green-600 cursor-pointer text-white px-6 flex items-center justify-center gap-4 sm:col-span-2 shadow-[10px_10px_rgb(0,0,0)]"
              >
                SUBMIT <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
