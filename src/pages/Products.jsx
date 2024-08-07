import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

const productsUrl = "/products/all-products";

export const loader = async ({ request }) => {
  const response = await customFetch.get(productsUrl);
  const { products, totalProducts, meta } = response.data;
  return { products, totalProducts, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
