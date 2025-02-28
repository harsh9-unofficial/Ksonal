import { ArrowRight } from "lucide-react";

export default function FertilizerProduct() {
  return (
    <>
      <section className="w-[100%] lg:w-[90%] mx-auto p-4 bg-white shadow-lg rounded-xl flex flex-col lg:mt-8 gap-8 items-center">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
          {/* Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <img
              src="/images/Rectangle23.png"
              alt="Fertilizer being sprayed on crops"
              className="md:w-[70%] lg:w-[100%] h-auto shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[55%] space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              FERTILIZERS: THE KEY TO THRIVING CROPS AND SUSTAINABLE AGRICULTURE
            </h2>

            <div>
              <h3 className="font-semibold text-xl md:text-2xl text-black py-6">
                KEY BENEFITS:
              </h3>
              <ul className="list-disc list-inside text-black space-y-2 text-md md:text-lg uppercase">
                <li>
                  Enhances soil fertility – Replenishes essential nutrients for
                  better crop yield.
                </li>
                <li>
                  Boosts plant growth – Provides necessary elements for
                  stronger, healthier plants.
                </li>
                <li>
                  Improves crop quality – Ensures higher nutritional value and
                  better produce.
                </li>
                <li>
                  Increases agricultural productivity – Supports large-scale
                  farming with efficient nutrient supply.
                </li>
                <li>
                  Available in various forms – Comes in organic, synthetic,
                  liquid, and granular types for diverse applications.
                </li>
              </ul>
            </div>

            <button className="mt-4 flex mx-auto md:mx-0 items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg ">
              Inquiry Now <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 w-full lg:text-left pb-8 space-y-6 uppercase">
          <h3 className="font-semibold text-2xl text-gray-700">DESCRIPTION:</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
            Fertilizers are substances that provide essential nutrients to
            plants, enhancing soil fertility and promoting healthy crop growth.
            They help improve agricultural productivity by supplying key
            elements like nitrogen, phosphorus, and potassium, which are crucial
            for plant development. Fertilizers come in various forms, including
            organic and synthetic options, to suit different farming needs.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
            Fertilizers are substances that provide essential nutrients to
            plants, enhancing soil fertility and promoting healthy crop growth.
            They help improve agricultural productivity by supplying key
            elements like nitrogen, phosphorus, and potassium, which are crucial
            for plant development. Fertilizers come in various forms, including
            organic and synthetic options, to suit different farming needs.
          </p>
        </div>
      </section>
    </>
  );
}
