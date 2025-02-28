import React from "react";

const ProductsDropdown = ({ onClose, mobile = false }) => {
  const categories = [
    "Agriculture Chemicals",
    "Cosmetic Chemicals",
    "Industrial Chemicals",
    "Pigments",
    "Lubricant",
    "Detergents",
  ];

  return (
    <div
      className={`absolute ${
        mobile ? "relative w-full" : "top-full left-0 mt-2 w-64"
      } bg-white shadow-lg rounded-lg z-50`}
    >
      <ul className="">
        {categories.map((category, index) => (
          <li
            key={index}
            className="border-b-2 border-gray-200 text-base  flex justify-between items-center px-6 py-4 hover:bg-green-600 hover:text-white cursor-pointer"
          >
            {category}
            <span>{">"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsDropdown;
