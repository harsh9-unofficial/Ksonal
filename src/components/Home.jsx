import HeroImg from "./HeroImg";
import ServicesGrid from "./ServicesGrid";
import FeaturesSection from "./FeaturesSection";
// import QuoteForm from "./QuoteForm";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <>
      <HeroImg srcImg={"/images/Untitled2.jpg"} text={"Connecting Global Markets with Quality Spices and Grains"}/>
      <ServicesGrid />
      <FeaturesSection />
      {/* <QuoteForm /> */}
      <TestimonialSection />
    </>
  );
};

export default Home;
