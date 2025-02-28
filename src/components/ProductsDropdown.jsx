import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductsDropdown = ({ onClose, mobile = false }) => {
  const navigate = useNavigate(); // Initialize navigate

  const categories = [
    "Agriculture Chemicals",
    "Cosmetic Chemicals",
    "Industrial Chemicals",
    "Pigments",
    "Lubricant",
    "Detergents",
  ];

  const handleCategoryClick = (category) => {
    // You can adjust the category-based navigation logic here
    if (category === "Agriculture Chemicals") {
      navigate("/products"); // Redirect to /singleproduct when clicked
    }
    // Add more category-based routes if needed
  };

  return (
    <div
      className={`absolute ${
        mobile ? "relative w-full" : "top-full left-0 mt-2 w-64"
      } bg-white shadow-lg rounded-lg z-50`}
    >
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="border-b-2 border-gray-200 text-base flex justify-between items-center px-6 py-4 hover:bg-green-600 hover:text-white cursor-pointer"
            onClick={() => handleCategoryClick(category)} // Attach click handler
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
