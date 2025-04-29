import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMenuClose = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    setIsDropdownOpen(false);

    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <header className="w-full relative">
      <nav className="bg-white shadow-md pb-3 relative z-50">
        <div className="px-4 py-2 sm:px-6 lg:px-8">
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center h-16">
            <div className="flex items-center justify-center col-span-1">
              <Link to="/">
                {/* <h1 className="text-green-600 font-bold text-lg md:text-xl lg:ml-2 cursor-pointer">
                  KSONAL <br /> INTERNATIONAL
                </h1> */}
                <img src="/images/Logo.webp" alt="Logo" className="h-full"/>
              </Link>
            </div>

            <div className="hidden md:flex col-span-3 justify-center space-x-8 items-center text-lg">
              <Link
                to="/"
                className="text-black hover:text-green-600 cursor-pointer"
                onClick={handleMenuClose}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-green-600 cursor-pointer"
                onClick={handleMenuClose}
              >
                ABOUT US
              </Link>

              <div className="relative">
                <Link to="/products">
                  <button
                    // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-black hover:text-green-600 focus:outline-none cursor-pointer"
                  >
                    PRODUCTS
                  </button>
                </Link>
                {/* {isDropdownOpen && (
                  <ProductsDropdown onClose={() => setIsDropdownOpen(false)} />
                )} */}
              </div>

              <Link
                to="/contact"
                className="text-black hover:text-green-600 cursor-pointer"
                onClick={handleMenuClose}
              >
                CONTACT
              </Link>
            </div>

            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen) setIsDropdownOpen(false);
                }}
                className="text-black focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t absolute top-20 left-0 w-full z-40">
          <Link
            to="/"
            className="block px-4 py-2 text-black hover:bg-green-100"
            onClick={handleMenuClose}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-black hover:bg-green-100"
            onClick={handleMenuClose}
          >
            ABOUT US
          </Link>
          <div className="relative">
            <Link to="/products">
              <button
                // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block w-full text-left px-4 py-2 text-black hover:bg-green-100"
              >
                PRODUCTS
              </button>
              {isDropdownOpen && (
                <ProductsDropdown
                  onClose={() => setIsDropdownOpen(false)}
                  mobile={true}
                />
              )}
            </Link>
          </div>

          <Link
            to="/contact"
            className="block px-4 py-2 text-black hover:bg-green-100"
            onClick={handleMenuClose}
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
