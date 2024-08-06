import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products/all-products?freeShipping=false";

export const loader = async () => {
  const response = await customFetch.get(url);
  const featuredProducts = response.data;
  return featuredProducts;
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
