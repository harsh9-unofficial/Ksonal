const ProductGrid = () => {
  const allProducts = [
    {
      title: "Fertilizers",
      description:
        "Enhance soil fertility and boost crop growth by supplying essential nutrients.",
      image: "/images/Rectangle121.png",
    },
    {
      title: "Pesticides",
      description:
        "Enhance soil fertility and boost crop growth by supplying essential nutrients.",
      image: "/images/Rectangle121.png",
    },
    {
      title: "Herbicides",
      description:
        "Enhance soil fertility and boost crop growth by supplying essential nutrients.",
      image: "/images/Rectangle121.png",
    },
    {
      title: "Fertilizers",
      description:
        "Enhance soil fertility and boost crop growth by supplying essential nutrients.",
      image: "/images/Rectangle121.png",
    },
    {
      title: "Pesticides",
      description:
        "Enhance soil fertility and boost crop growth by supplying essential nutrients.",
      image: "/images/Rectangle121.png",
    },
    {
      title: "Herbicides",
      description:
        "Enhance soil fertility and boost crop growth by supplying essential nutrients.",
      image: "/images/Rectangle121.png",
    },
  ];

  return (
    <section className="py-4 px-3 w-[100%] lg:w-[97%] xl:w-[70%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {allProducts.map((product, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden p-4 md:p-6 lg:p-8 border border-gray-200 ${
              product.dark ? "bg-black text-white" : "bg-white"
            }`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[100%] lg:h-68 xl:h-75 rounded-md"
            />
            <h3 className="mt-4 pt-2 font-bold text-xl">{product.title}</h3>
            <p className="mt-2 py-4 text-sm">{product.description}</p>
            <button
              className={`mt-4 px-4 py-2 flex items-center cursor-pointer ${
                product.dark ? "bg-black text-white" : "bg-green-600 text-white"
              }`}
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
