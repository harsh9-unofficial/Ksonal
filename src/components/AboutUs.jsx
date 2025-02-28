import { FaUsers, FaBox, FaPen } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="w-full font-lexend">
      {/* Some Facts Section */}
      <section className="w-full px-4 md:px-8 py-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-2/3 text-center lg:text-left lg:px-4">
          <h3 className="text-green-600 font-bold text-lg">SOME FACTS</h3>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
            #1 PLACE TO FULL-FILL ALL OF YOUR REQUIREMENTS
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-lg">
            Ksonal International is a leading import and export company
            specializing in high-quality chemical products. With a strong
            global network, we ensure seamless sourcing, compliance, and
            timely delivery. Committed to excellence, sustainability, and
            customer satisfaction, we provide reliable solutions for
            industries worldwide.
          </p>
        </div>

        {/* Right Side - Stats Cards */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-end gap-4 mt-6 lg:mt-0 w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Happy Clients */}
            <div className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 text-center w-full">
              <FaUsers className="text-green-600 text-3xl mb-2" />
              <div className="flex flex-row">
                <span className="font-bold text-green-600 text-xl">100</span>
                <p className="text-gray-700 text-md ml-2 leading-relaxed">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Complete Shipments */}
            <div className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 text-center w-full">
              <FaBox className="text-green-600 text-3xl mb-2" />
              <div className="flex flex-row">
                <span className="font-bold text-green-600 text-xl">10</span>
                <p className="text-gray-700 text-md ml-2 leading-relaxed">
                  Complete Shipments
                </p>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 text-center w-full sm:w-2/3 md:w-1/2 self-start">
            <FaPen className="text-green-600 text-3xl mb-2" />
            <div className="flex flex-row">
              <span className="font-bold text-green-600 text-xl">4</span>
              <p className="text-gray-700 text-md ml-2 leading-relaxed">
                Customer Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="flex flex-col space-y-12">
          {/* Vision Section */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2">
              <img
                src="/images/v&m.png"
                alt="Vision"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-6 md:px-10 text-center md:text-left">
              <h2 className="text-green-700 text-3xl font-extrabold mb-4">OUR VISION</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                KSONAL INTERNATIONAL STRIVES TO BE A GLOBALLY RECOGNIZED LEADER
                IN THE IMPORT AND EXPORT OF HIGH-QUALITY CHEMICAL PRODUCTS.
                WE AIM TO DRIVE INNOVATION, SUSTAINABILITY, AND RELIABILITY
                IN EVERY TRADE, ENSURING A SEAMLESS AND EFFICIENT SUPPLY CHAIN
                FOR INDUSTRIES WORLDWIDE.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row-reverse items-center w-full">
            <div className="w-full md:w-1/2">
              <img
                src="/images/v&m2.png"
                alt="Mission"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-6 md:px-10 text-center md:text-left">
              <h2 className="text-green-700 text-3xl font-extrabold mb-4">OUR MISSION</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                OUR MISSION IS TO PROVIDE SEAMLESS AND EFFICIENT CHEMICAL TRADE
                SOLUTIONS WHILE UPHOLDING THE HIGHEST STANDARDS OF QUALITY,
                SAFETY, AND COMPLIANCE. WE ARE COMMITTED TO BUILDING LONG-TERM
                PARTNERSHIPS BASED ON TRUST, TRANSPARENCY, AND EXCELLENCE.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="w-full px-4 md:px-8 py-8">
        <h2 className="text-center text-green-600 font-bold text-2xl md:text-4xl">
          WHY CHOOSE KSONAL INTERNATIONAL?
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 mt-6 border border-gray-200 w-full">
          <p className="text-gray-700 text-lg leading-relaxed">
            AT KSONAL INTERNATIONAL, WE GO BEYOND JUST IMPORT AND EXPORT—WE
            DELIVER TRUST, QUALITY, AND EFFICIENCY.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-lg leading-relaxed">
            <li><strong>• RELIABLE GLOBAL NETWORK –</strong> SEAMLESS TRADE.</li>
            <li><strong>• UNCOMPROMISED QUALITY & COMPLIANCE –</strong> SAFE AND CERTIFIED.</li>
            <li><strong>• EFFICIENT SUPPLY CHAIN –</strong> TIMELY DELIVERY.</li>
            <li><strong>• CUSTOMER-CENTRIC APPROACH –</strong> CUSTOMIZED SOLUTIONS.</li>
            <li><strong>• SUSTAINABLE & ETHICAL PRACTICES –</strong> ENVIRONMENTALLY FRIENDLY.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;