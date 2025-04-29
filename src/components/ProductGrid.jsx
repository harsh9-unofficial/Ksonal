// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const ProductGrid = () => {
//   const [inView, setInView] = useState([]);
// const allProducts = [
//   {
//     title: "CHICKPEAS",
//     shortDescription:
//       "Nutritious legumes ideal for a variety of savory dishes and rich in protein.",
//     longDescription:
//       "At Ksonal International, we specialize in sourcing and exporting high-quality chickpeas globally. With a focus on excellence and reliability, we ensure that every batch of chickpeas meets stringent quality standards, providing our clients with superior products for their culinary and industrial needs. Our commitment to customer satisfaction drives us to deliver timely and transparent services, making us the preferred choice in the chickpeas industry.",
//     image: "/images/Chickpeas.webp",
//   },
//   {
//     title: "URAD",
//     shortDescription:
//       "A staple pulse known for its earthy flavor and essential role in Indian cuisine.",
//     longDescription:
//       "At Ksonal International, we take pride in offering the finest quality Urad sourced from trusted growers. With a dedication to excellence and reliability, we ensure each batch meets stringent quality standards, providing our global clientele with superior products for culinary and industrial applications. Trust Ksonal International for consistent quality and impeccable service in the Urad industry",
//     image: "/images/Urad.webp",
//   },
//   {
//     title: "CHICKPEAS DAL",
//     shortDescription:
//       "Split chickpeas packed with flavor and perfect for hearty, wholesome meals.",
//     longDescription:
//       "At Ksonal International, we take pride in offering top-quality Chickpea Dal (Chana Dal) sourced from trusted suppliers. Our commitment to excellence ensures each batch delivers rich flavor, nutritional value, and consistency, perfect for creating delicious and nutritious meals worldwide.",
//     image: "/images/ChickpeasDal.webp",
//   },
//   {
//     title: "URAD DAL",
//     shortDescription:
//       "A protein-rich lentil widely used in dals, dosas, and traditional recipes.",
//     longDescription:
//       "At Ksonal International, we take pride in offering high-quality Urad Dal sourced from trusted suppliers across the globe. With a focus on excellence and reliability, we ensure that every batch of Urad Dal meets stringent quality standards. Our commitment to customer satisfaction drives us to provide seamless transactions and personalized service, making us a preferred choice for discerning clients in the culinary industry. Trust Ksonal International for superior Urad Dal that enhances the flavor and nutritional value of your dishes, consistently delivering excellence in every grain.",
//     image: "/images/UradDal.webp",
//   },
//   {
//     title: "MUNG BEANS",
//     shortDescription:
//       "Light, protein-packed legumes great for sprouting and healthy cooking.",
//     longDescription:
//       "At Ksonal International, we pride ourselves on being a trusted provider of high-quality mung beans. With a focus on excellence and reliability, we source our mung beans from toptier suppliers to ensure superior freshness and nutritional value. Our commitment to quality extends throughout our supply chain, from cultivation to delivery, ensuring that every batch meets stringent standards. Whether you're looking for premium mung beans for culinary use or commercial purposes, Ksonal International is your dedicated partner in delivering top-notch products that exceed expectations.",
//     image: "/images/MungBeans.webp",
//   },
//   {
//     title: "RAZMA (KIDNEY BEANS)",
//     shortDescription:
//       "Bold, meaty beans perfect for curries, stews, and global comfort food.",
//     longDescription:
//       "At Ksonal International, we take pride in offering superior quality Razma (Kidney Beans) sourced from trusted suppliers around the world. Our commitment to excellence ensures that every batch of Razma meets stringent quality standards, guaranteeing freshness and nutritional value. With a focus on reliability and customer satisfaction, we provide seamless import and export solutions, making Ksonal International your trusted partner in the global market for premium Razma (Kidney Beans).",
//     image: "/images/Razma.webp",
//   },
//   {
//     title: "MUNG DAL",
//     shortDescription:
//       "Yellow split mung beans that cook quickly and offer delicate flavor and nutrition.",
//     longDescription:
//       "At Ksonal International, we take pride in offering high-quality Mung Dal that embodies purity and nutritional excellence. Sourced from trusted suppliers and meticulously processed, our Mung Dal ensures superior taste and health benefits, meeting the discerning demands of global consumers. Trust Ksonal International for a commitment to quality and customer satisfaction in every batch of Mung Dal we deliver.",
//     image: "/images/MungDal.webp",
//   },
//   {
//     title: "GRAM FLOUR",
//     shortDescription:
//       "Versatile gluten-free flour made from ground chickpeas, ideal for batters and baking.",
//     longDescription:
//       "At Ksonal International, we take pride in offering the best quality gram flour manufactured by us. With a focus on excellence and reliability, we ensure that every batch meets stringent standards, providing versatile and nutritious ingredients for your culinary needs worldwide.",
//     image: "/images/GramFlour.webp",
//   },
//   {
//     title: "MASOOR DAL (RED LENTILS)",
//     shortDescription:
//       "Quick-cooking red lentils loved for their mild flavor and high nutrition.",
//     longDescription:
//       "At Ksonal International, we pride ourselves on offering the finest Masoor Dal (Red Lentils), meticulously sourced and processed to deliver optimal nutrition and flavor. Our commitment to quality ensures that each batch meets stringent standards, making it a preferred choice for health-conscious consumers and culinary enthusiasts worldwide. Trust Ksonal International for Masoor Dal that enriches your meals and supports a balanced lifestyle.",
//     image: "/images/MasoorDal.webp",
//   },
//   {
//     title: "CUMIN SEEDS",
//     shortDescription:
//       "Aromatic spice seeds that enhance flavor in a wide variety of global dishes.",
//     longDescription:
//       "At Ksonal International, we take pride in offering the finest quality cumin seeds sourced from reputable suppliers. With a focus on excellence and reliability, we ensure that every batch of cumin seeds meets stringent quality standards, delivering unmatched freshness and flavor to our global clientele. Trust Ksonal International for superior cumin seeds that elevate your culinary creations with authentic taste and aroma.",
//     image: "/images/CuminSeeds.webp",
//   },
// ];

//   const navigate = useNavigate();

//   const handleCategoryClick = (product) => {
//     navigate("/singleproduct", {
//       state: {
//         title: product.title,
//         longDescription: product.longDescription,
//         image: product.image,
//       },
//     });
//   };

//   // Intersection Observer to detect when the element is in the viewport
//   const observer = useRef(
//     new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setInView((prev) => [...prev, entry.target.id]); // Add id to inView list when in view
//           }
//         });
//       },
//       { threshold: 0.2 }
//     ) // Trigger when 50% of the element is visible
//   );

//   useEffect(() => {
//     const elements = document.querySelectorAll(".product-card");
//     elements.forEach((element) => {
//       observer.current.observe(element); // Start observing each product card
//     });

//     return () => {
//       elements.forEach((element) => {
//         observer.current.unobserve(element); // Clean up observer
//       });
//     };
//   }, []);

//   return (
//     <section className="py-4 px-3 w-[100%] lg:w-[97%] xl:w-[70%] mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 mt-4">
//         {allProducts.map((product, index) => (
//           <div
//             key={index}
//             id={`product-${index}`}
//             className={`product-card rounded-lg overflow-hidden p-4 md:p-6 lg:p-8 border border-gray-200 transition-all duration-700 ease-out transform ${
//               inView.includes(`product-${index}`)
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//             style={{
//               transitionDelay: `${index * 70}ms`, // Staggering effect on animation
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-[100%] lg:h-68 xl:h-75 rounded-md"
//             />
//             <h3 className="mt-4 pt-2 font-bold text-xl">{product.title}</h3>
//             <p className="mt-2 py-4 text-sm">{product.shortDescription}</p>
//             <button
//               className={`mt-4 px-4 py-2 flex items-center cursor-pointer ${
//                 product.dark ? "bg-black text-white" : "bg-green-600 text-white"
//               }`}
//               onClick={() => handleCategoryClick(product)}
//             >
//               READ MORE
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const [inView, setInView] = useState([]);
  const navigate = useNavigate();

  const allProducts = [
    {
      title: "CHICKPEAS",
      shortDescription:
        "Nutritious legumes ideal for a variety of savory dishes and rich in protein.",
      longDescription:
        "At Ksonal International, we specialize in sourcing and exporting high-quality chickpeas globally. With a focus on excellence and reliability, we ensure that every batch of chickpeas meets stringent quality standards, providing our clients with superior products for their culinary and industrial needs. Our commitment to customer satisfaction drives us to deliver timely and transparent services, making us the preferred choice in the chickpeas industry.",
      image: "/images/Chickpeas.webp",
    },
    {
      title: "URAD",
      shortDescription:
        "A staple pulse known for its earthy flavor and essential role in Indian cuisine.",
      longDescription:
        "At Ksonal International, we take pride in offering the finest quality Urad sourced from trusted growers. With a dedication to excellence and reliability, we ensure each batch meets stringent quality standards, providing our global clientele with superior products for culinary and industrial applications. Trust Ksonal International for consistent quality and impeccable service in the Urad industry",
      image: "/images/Urad.webp",
    },
    {
      title: "CHICKPEAS DAL",
      shortDescription:
        "Split chickpeas packed with flavor and perfect for hearty, wholesome meals.",
      longDescription:
        "At Ksonal International, we take pride in offering top-quality Chickpea Dal (Chana Dal) sourced from trusted suppliers. Our commitment to excellence ensures each batch delivers rich flavor, nutritional value, and consistency, perfect for creating delicious and nutritious meals worldwide.",
      image: "/images/ChickpeasDal.webp",
    },
    {
      title: "URAD DAL",
      shortDescription:
        "A protein-rich lentil widely used in dals, dosas, and traditional recipes.",
      longDescription:
        "At Ksonal International, we take pride in offering high-quality Urad Dal sourced from trusted suppliers across the globe. With a focus on excellence and reliability, we ensure that every batch of Urad Dal meets stringent quality standards. Our commitment to customer satisfaction drives us to provide seamless transactions and personalized service, making us a preferred choice for discerning clients in the culinary industry. Trust Ksonal International for superior Urad Dal that enhances the flavor and nutritional value of your dishes, consistently delivering excellence in every grain.",
      image: "/images/UradDal.webp",
    },
    {
      title: "MUNG BEANS",
      shortDescription:
        "Light, protein-packed legumes great for sprouting and healthy cooking.",
      longDescription:
        "At Ksonal International, we pride ourselves on being a trusted provider of high-quality mung beans. With a focus on excellence and reliability, we source our mung beans from toptier suppliers to ensure superior freshness and nutritional value. Our commitment to quality extends throughout our supply chain, from cultivation to delivery, ensuring that every batch meets stringent standards. Whether you're looking for premium mung beans for culinary use or commercial purposes, Ksonal International is your dedicated partner in delivering top-notch products that exceed expectations.",
      image: "/images/MungBeans.webp",
    },
    {
      title: "RAZMA (KIDNEY BEANS)",
      shortDescription:
        "Bold, meaty beans perfect for curries, stews, and global comfort food.",
      longDescription:
        "At Ksonal International, we take pride in offering superior quality Razma (Kidney Beans) sourced from trusted suppliers around the world. Our commitment to excellence ensures that every batch of Razma meets stringent quality standards, guaranteeing freshness and nutritional value. With a focus on reliability and customer satisfaction, we provide seamless import and export solutions, making Ksonal International your trusted partner in the global market for premium Razma (Kidney Beans).",
      image: "/images/Razma.webp",
    },
    {
      title: "MUNG DAL",
      shortDescription:
        "Yellow split mung beans that cook quickly and offer delicate flavor and nutrition.",
      longDescription:
        "At Ksonal International, we take pride in offering high-quality Mung Dal that embodies purity and nutritional excellence. Sourced from trusted suppliers and meticulously processed, our Mung Dal ensures superior taste and health benefits, meeting the discerning demands of global consumers. Trust Ksonal International for a commitment to quality and customer satisfaction in every batch of Mung Dal we deliver.",
      image: "/images/MungDal.webp",
    },
    {
      title: "GRAM FLOUR",
      shortDescription:
        "Versatile gluten-free flour made from ground chickpeas, ideal for batters and baking.",
      longDescription:
        "At Ksonal International, we take pride in offering the best quality gram flour manufactured by us. With a focus on excellence and reliability, we ensure that every batch meets stringent standards, providing versatile and nutritious ingredients for your culinary needs worldwide.",
      image: "/images/GramFlour.webp",
    },
    {
      title: "MASOOR DAL (RED LENTILS)",
      shortDescription:
        "Quick-cooking red lentils loved for their mild flavor and high nutrition.",
      longDescription:
        "At Ksonal International, we pride ourselves on offering the finest Masoor Dal (Red Lentils), meticulously sourced and processed to deliver optimal nutrition and flavor. Our commitment to quality ensures that each batch meets stringent standards, making it a preferred choice for health-conscious consumers and culinary enthusiasts worldwide. Trust Ksonal International for Masoor Dal that enriches your meals and supports a balanced lifestyle.",
      image: "/images/MasoorDal.webp",
    },
    {
      title: "CUMIN SEEDS",
      shortDescription:
        "Aromatic spice seeds that enhance flavor in a wide variety of global dishes.",
      longDescription:
        "At Ksonal International, we take pride in offering the finest quality cumin seeds sourced from reputable suppliers. With a focus on excellence and reliability, we ensure that every batch of cumin seeds meets stringent quality standards, delivering unmatched freshness and flavor to our global clientele. Trust Ksonal International for superior cumin seeds that elevate your culinary creations with authentic taste and aroma.",
      image: "/images/CuminSeeds.webp",
    },
  ];

  const handleCategoryClick = (product) => {
    navigate("/singleproduct", {
      state: {
        title: product.title,
        longDescription: product.longDescription,
        image: product.image,
      },
    });
  };

  // Intersection Observer Setup
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    )
  );

  useEffect(() => {
    const elements = document.querySelectorAll(".product-card");
    elements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.current.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="py-4 px-3 w-[100%] lg:w-[97%] xl:w-[70%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {allProducts.map((product, index) => (
          <motion.div
            key={index}
            id={`product-${index}`}
            className="product-card rounded-lg overflow-hidden p-4 md:p-6 lg:p-8 border border-gray-200"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={
              inView.includes(`product-${index}`)
                ? { opacity: 1, y: 0, scale: 1 }
                : {}
            }
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full lg:h-68 xl:h-75 object-cover rounded-md"
            />
            <h3 className="mt-4 font-bold text-xl">{product.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
              {product.shortDescription}
            </p>
            <button
              className={`mt-4 px-4 py-2 flex items-center cursor-pointer bg-green-600 text-white`}
              onClick={() => handleCategoryClick(product)}
            >
              READ MORE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
