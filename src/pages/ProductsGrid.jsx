import { useLoaderData, Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products, count } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const {
          name,
          freeShipping,
          image,
          price,
          brand,
          rating,
          description,
          _id,
        } = product;
        return (
          <div
            key={product._id}
            className="card bg-base-100 w-98 shadow-xl overflow-hidden"
          >
            <Link to={`/products/${product._id}`}>
              <img src={image} alt={name} />
            </Link>
            <div className="card-body">
              <h2 className="card-title uppercase">
                {name}
                <div className="badge badge-primary">
                  {formatPrice(price)}
                </div>
              </h2>
              <div className="card-actions justify-between">
                <div className="flex gap-3">
                  <div className="badge badge-outline">
                    {freeShipping ? "Free shipping" : "Extra Cost"}
                  </div>
                  <div className="badge badge-outline capitalize">{brand}</div>
                </div>
                <div>
                  <div className="badge badge-outline">
                    <FaShoppingBasket className="h-6 w-6 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
