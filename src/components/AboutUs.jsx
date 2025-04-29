import { FaUsers, FaBox, FaPen } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Counter Component
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // assuming 60 fps

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span>{count}</span>;
};

const AboutUs = () => {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full font-lexend overflow-hidden">
      <section className="w-full px-4 md:px-8 py-16 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Text Content */}
        <motion.div
          className="lg:w-2/3 text-center lg:text-left lg:px-4"
          variants={slideInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-green-600 font-bold text-lg">SOME FACTS</h3>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
            #1 PLACE TO FULL-FILL ALL OF YOUR REQUIREMENTS
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-lg">
            Ksonal International is a leading import and export company
            specializing in high-quality chemical products. With a strong global
            network, we ensure seamless sourcing, compliance, and timely
            delivery. Committed to excellence, sustainability, and customer
            satisfaction, we provide reliable solutions for industries
            worldwide.
          </p>
        </motion.div>

        {/* Right Side - Stats Cards */}
        <motion.div
          className="lg:w-1/3 flex flex-col items-center lg:items-end gap-4 mt-6 lg:mt-0 w-full px-4"
          variants={slideInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Happy Clients */}
            <motion.div
              className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 text-center w-full"
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaUsers className="text-green-600 text-4xl mb-2" />
              <div className="flex flex-row">
                <span className="font-bold text-green-600 text-xl">
                  <Counter target={100} duration={2} />+
                </span>
                <p className="text-gray-700 text-md ml-2 leading-relaxed">
                  Happy Clients
                </p>
              </div>
            </motion.div>

            {/* Complete Shipments */}
            <motion.div
              className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 text-center w-full"
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaBox className="text-green-600 text-3xl mb-2" />
              <div className="flex flex-row">
                <span className="font-bold text-green-600 text-xl">
                  <Counter target={10} duration={2} />+
                </span>
                <p className="text-gray-700 text-md ml-2 leading-relaxed">
                  Complete Shipments
                </p>
              </div>
            </motion.div>
          </div>

          {/* Customer Reviews */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 text-center w-full sm:w-2/3 md:w-1/2 self-start"
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FaPen className="text-green-600 text-3xl mb-2" />
            <div className="flex flex-row">
              <span className="font-bold text-green-600 text-xl">
                <Counter target={3} duration={2} />
              </span>
              <p className="text-gray-700 text-md ml-2 leading-relaxed">
                Customer Reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="flex flex-col space-y-12">
          {/* Vision Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center w-full"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2">
              <img
                src="/images/v&m.png"
                alt="Vision"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-6 md:px-10 text-center md:text-left">
              <h2 className="text-green-700 text-3xl font-extrabold mb-4">
                OUR VISION
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                KSONAL INTERNATIONAL STRIVES TO BE A GLOBALLY RECOGNIZED LEADER
                IN THE IMPORT AND EXPORT OF HIGH-QUALITY CHEMICAL PRODUCTS. WE
                AIM TO DRIVE INNOVATION, SUSTAINABILITY, AND RELIABILITY IN
                EVERY TRADE, ENSURING A SEAMLESS AND EFFICIENT SUPPLY CHAIN FOR
                INDUSTRIES WORLDWIDE.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center w-full"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2">
              <img
                src="/images/v&m2.png"
                alt="Mission"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-6 md:px-10 text-center md:text-left">
              <h2 className="text-green-700 text-3xl font-extrabold mb-4">
                OUR MISSION
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                OUR MISSION IS TO PROVIDE SEAMLESS AND EFFICIENT CHEMICAL TRADE
                SOLUTIONS WHILE UPHOLDING THE HIGHEST STANDARDS OF QUALITY,
                SAFETY, AND COMPLIANCE. WE ARE COMMITTED TO BUILDING LONG-TERM
                PARTNERSHIPS BASED ON TRUST, TRANSPARENCY, AND EXCELLENCE.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <motion.section
        className="w-full px-4 md:px-8 py-8"
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-center text-green-600 font-bold text-2xl md:text-4xl">
          WHY CHOOSE KSONAL INTERNATIONAL?
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 mt-6 border border-gray-200 w-full">
          <p className="text-gray-700 text-md md:text-lg leading-relaxed">
            AT KSONAL INTERNATIONAL, WE GO BEYOND JUST IMPORT AND EXPORT—WE
            DELIVER TRUST, QUALITY, AND EFFICIENCY. HERE'S WHY WE STAND OUT:
          </p>

          <ul className="mt-4 space-y-2 lg:pl-4 text-gray-700 text-md md:text-lg leading-relaxed">
            <li>
              <strong>• RELIABLE GLOBAL NETWORK –</strong> SEAMLESS TRADE.
            </li>
            <li>
              <strong>• UNCOMPROMISED QUALITY & COMPLIANCE –</strong> SAFE AND
              CERTIFIED.
            </li>
            <li>
              <strong>• EFFICIENT SUPPLY CHAIN –</strong> TIMELY DELIVERY.
            </li>
            <li>
              <strong>• CUSTOMER-CENTRIC APPROACH –</strong> CUSTOMIZED
              SOLUTIONS.
            </li>
            <li>
              <strong>• SUSTAINABLE & ETHICAL PRACTICES –</strong>{" "}
              ENVIRONMENTALLY FRIENDLY.
            </li>
          </ul>

          <p className="text-gray-700 text-md md:text-lg leading-relaxed mt-4">
            CHOOSE KSONAL INTERNATIONAL FOR A HASSLE-FREE, SECURE, AND EFFICIENT
            CHEMICAL TRADE EXPERIENCE.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
