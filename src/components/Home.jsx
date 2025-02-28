import React from "react";

import HeroImg from "./HeroImg";
import ServicesGrid from "./ServiceGrid";
import FeaturesSection from "./FeaturesSection";
import QuoteForm from "./QuoteForm";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <>
      <HeroImg srcImg={"/images/Group4.png"} />
      <ServicesGrid />
      <FeaturesSection />
      <QuoteForm />
      <TestimonialSection />
    </>
  );
};

export default Home;
