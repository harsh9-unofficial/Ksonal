import { useLocation } from "react-router-dom";
import FertilizerProduct from "./FertilizerProduct";
import HeroImg from "./HeroImg";

const SingleProduct = () => {
  const location = useLocation();
  const { title, longDescription, image } = location.state || {};
  return (
    <>
      <HeroImg srcImg="/images/Banner1.jpg" text={title} />
      <FertilizerProduct
        title={title}
        longDescription={longDescription}
        image={image}
      />
    </>
  );
};

export default SingleProduct;
