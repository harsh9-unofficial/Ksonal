import { motion } from "framer-motion";
const ServicesGrid = () => {
  const products = [
    {
      title: "Spice Sourcing",
      description:
        "Ksonal International Import & Export doesn't just deliver spices, we source the finest from around the world! Our expert team has a keen eye for quality, ensuring you receive the most flavorful ingredients every time. And because we understand the importance of keeping your kitchen running smoothly, we guarantee timely deliveries to meet all your customer demands.",
      image: "/images/SpiceSourcing2.jpg",
    },
    {
      title: "Custom Blends",
      description:
        "Tired of generic spice blends? We elevate your culinary creations with custom spice mixes designed for specific cuisines. Crafted with precision and sourced from the finest ingredients, our blends unlock the true potential of your dishes, offering a symphony of flavors tailored to your exact needs.",
      image: "/images/CustomBlends2.jpg",
    },
    {
      title: "Logistics Support",
      description:
        "Ksonal International Import & Export Services understands the importance of smooth import and export transactions. That’s why we take care of all your logistics needs, ensuring efficient management from sourcing and customs clearance to timely delivery. This streamlines the process, saving you time and money, so you can focus on what matters most - your business.",
      image: "/images/Logistics2.jpg",
    },
    {
      title: "Grain Export",
      description:
        "Ksonal International Import & Export Services isn't just about bringing the world's finest spices, lentils, beans, flours, food oils, and Kesar mango pulp to India, we're passionate about sharing India's bounty with the world. We source and export top-quality grains, ensuring they meet the strictest freshness and quality standards for international markets.",
      image: "/images/GrainExport2.jpg",
    },
    {
      title: "Quality Assurance",
      description:
        "Ksonal International Import & Export Services doesn't just source spices, lentils, beans, flours, food oils, and Kesar mango pulp - they source excellence. They adhere to stringent quality control measures at every stage, ensuring their products meet international standards. This commitment to quality guarantees you receive fresh, consistent, and delicious ingredients that will elevate your culinary creations, whether you're running a restaurant, grocery store, or bakery.",
      image: "/images/QualityAssurance2.jpg",
    },
    {
      title: "Customer Service",
      description:
        "Ksonal International Import & Export Services isn't just about spices, lentils, beans, flours, food oils, and Kesar mango pulp - it's about building strong relationships with our clients. Dedicated to providing superior customer service, we ensure a seamless and satisfying experience from the first contact to every future order.",
      image: "/images/CustomerService2.jpg",
    },
  ];

  const variants = {
    left: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      },
    },
    right: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      },
    },
    bottom: {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      },
    },
  };

  return (
    <section className="py-12 px-3 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-green-600 font-semibold text-2xl p-4">
          OUR SERVICES
        </h3>
        <h2 className="text-3xl font-bold p-4">EXPLORE OUR SERVICES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3 xl:gap-8 mt-8">
        {products.map((product, index) => {
          // Choose variant based on index
          let direction =
            index % 3 === 0 ? "left" : index % 3 === 1 ? "bottom" : "right";

          return (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-xl p-4 md:p-6 lg:p-8 border border-gray-200 ${
                product.dark ? "bg-black text-white" : "bg-white"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants[direction]}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[100%] lg:h-68 xl:h-78 rounded-md"
              />
              <h3 className="mt-4 pt-2 font-bold text-xl text-green-600">
                {product.title}
              </h3>
              <p className="mt-2 py-2 text-sm">{product.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;
