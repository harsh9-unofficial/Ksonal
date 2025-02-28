import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-10">
      <div className="max-w-[95%] xl:max-w-[77%] mx-auto flex flex-col sm:flex-row lg:flex-row justify-between gap-2 lg:gap-10 xl:gap-0">
        {/* Address Section */}
        <div className="flex-3 lg:flex-4">
          <h3 className="text-lg font-bold mb-4">ADDRESS</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-green-500 mt-1 text-xl" />
              <p className="text-sm sm:text-base w-[80%] xl:w-[60%]">
                57-58 GREEN VIEW BUNGALOW, VALAK PATIYA MISSION ROAD, PASODARA,
                SURAT, GUJARAT 305006
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <p className="text-sm sm:text-base">+91 9409810700</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-500 text-2xl lg:text-xl " />
              <p className="text-sm sm:text-base">
                KSONALINTERNATIONAL @GMAIL.COM
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-2">
          <h3 className="text-lg font-bold mt-4 md:mt-0 mb-4">QUICK LINKS</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-green-500">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex-2">
          <h3 className="text-lg font-bold mt-4 md:mt-0 mb-4">NEWSLETTER</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Delivering excellence in global trade with seamless solutions
            tailored for your success.
          </p>
          <div className="flex border border-gray-500 rounded-lg overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-black text-white outline-none placeholder-gray-400"
            />
            <button className="bg-green-500 px-6 py-3 flex items-center justify-center">
              ➜
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="max-w-[95%] xl:max-w-[77%] mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm sm:text-base">
          &copy; 2024 Ksonal International. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-green-500 text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-green-500 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-green-500 text-xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
