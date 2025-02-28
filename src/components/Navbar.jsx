import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown"; // Import dropdown

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Products dropdown state
  const location = useLocation(); // Hook to get the current location

  // Function to close the mobile menu and the dropdown
  const handleMenuClose = () => {
    setIsOpen(false); // Close mobile menu
    setIsDropdownOpen(false); // Close products dropdown
  };

  // Close the dropdown when the route changes
  useEffect(() => {
    // Close the dropdown if the route changes
    setIsDropdownOpen(false);

    // Reset mobile menu when route changes on small devices (below 768px)
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  }, [location]); // Run this effect when the location (URL) changes

  return (
    <header className="w-full relative">
      <nav className="bg-white shadow-md relative z-50">
        <div className="px-4 py-2 sm:px-6 lg:px-8">
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center h-16">
            {/* Logo */}
            <div className="flex items-center justify-center col-span-1">
              <h1 className="text-green-600 font-bold text-lg md:text-xl lg:ml-2 cursor-pointer">
                KSONAL <br /> INTERNATIONAL
              </h1>
            </div>

            {/* Desktop Navigation */}
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

              {/* Products with dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-black hover:text-green-600 focus:outline-none cursor-pointer"
                >
                  PRODUCTS
                </button>
                {isDropdownOpen && (
                  <ProductsDropdown onClose={() => setIsDropdownOpen(false)} />
                )}
              </div>

              <Link
                to="/contact"
                className="text-black hover:text-green-600 cursor-pointer"
                onClick={handleMenuClose}
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen) setIsDropdownOpen(false); // Close dropdown if mobile menu is closing
                }}
                className="text-black focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
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

          {/* Mobile Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
