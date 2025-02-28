const ServicesGrid = () => {
  const services = [
    {
      title: "Agriculture Chemicals",
      description:
        "We are importers and distributors of our agricultural products of all types. All the products we provide are of high quality and for specific purposes.",
      image: "/images/Rectangle12.png",
      dark: true,
    },
    {
      title: "Cosmetic Chemicals",
      description:
        "We are importers and distributors of our agricultural products of all types. All the products we provide are of high quality and for specific purposes.",
      image: "/images/Rectangle12.png",
    },
    {
      title: "Industrial Chemicals",
      description:
        "We are importers and distributors of our agricultural products of all types. All the products we provide are of high quality and for specific purposes.",
      image: "/images/Rectangle12.png",
    },
    {
      title: "Pigments",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      image: "/images/Rectangle12.png",
    },
    {
      title: "Lubricant",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      image: "/images/Rectangle12.png",
    },
    {
      title: "Detergents",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      image: "/images/Rectangle12.png",
    },
  ];

  return (
    <section className="py-12 px-3 w-[100%] lg:w-[97%] xl:w-[70%] mx-auto">
      <div className="text-center">
        <h3 className="text-green-600 font-semibold text-2xl p-4">
          OUR SERVICES
        </h3>
        <h2 className="text-3xl font-bold p-4">EXPLORE OUR SERVICES</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-xl p-4 md:p-6 lg:p-8 border border-gray-200 ${
              service.dark ? "bg-black text-white" : "bg-white"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-[100%] lg:h-68 xl:h-75 rounded-md"
            />
            <h3 className="mt-4 pt-2 font-bold text-xl">{service.title}</h3>
            <p className="mt-2 py-4 text-sm">{service.description}</p>
            <button
              className={`mt-4 px-4 py-2 shadow-[10px_10px_rgba(0,0,0)] flex items-center cursor-pointer ${
                service.dark ? "bg-black text-white" : "bg-green-600 text-white"
              }`}
            >
              READ MORE <span className="ml-2">➜</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
