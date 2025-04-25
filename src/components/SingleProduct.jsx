import { useLocation } from "react-router-dom";
import FertilizerProduct from "./FertilizerProduct";
import HeroImg from "./HeroImg";

const SingleProduct = () => {
  const location = useLocation();
  const { title, longDescription, image } = location.state || {};
  return (
    <>
      <HeroImg srcImg="/images/Rectangle 21.png" text={title} />
      {/* <FertilizerProduct /> */}
      <FertilizerProduct
        title={title}
        longDescription={longDescription}
        image={image}
      />
    </>
  );
};

export default SingleProduct;
