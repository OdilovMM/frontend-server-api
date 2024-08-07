import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-y-9 ">
      {products?.map((product) => {
        const {
          name,
          image,
          price,
          brand,
          avgRating,
        } = product;
        return (
          <div
            key={product._id}
            className="flex flex-row sm:flex-row items-center gap-y-4 justify-between w-98 shadow-xl overflow-hidden"
          >
            <div className="max-h-[150px] w-3/12 ">
              <Link to={`/products/${product._id}`}>
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>

            <div className="flex gap-2 w-9/12 justify-end pr-6">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="badge badge-outline capitalize">{brand}</p>
                <p className="badge badge-outline capitalize text-end">
                  {avgRating}⭐
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="card-title uppercase">{name}</h2>
                <div className="badge badge-accent">{formatPrice(price)}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
