import { useLoaderData, Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { formatPrice } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  const dispatch = useDispatch();


  const addToCart = () => {
    dispatch();
  };

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => {
        const { name, freeShipping, image, price, brand, avgRating } = product;
        return (
          <div
            key={product._id}
            className="card bg-base-100 w-98 shadow-xl overflow-hidden"
          >
            <div className="max-h-[220px] ">
              <Link to={`/products/${product._id}`}>
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <div className="card-body">
              <h2 className="card-title uppercase">{name}</h2>
              <div className="badge badge-accent">{formatPrice(price)}</div>
              <div className="card-actions justify-between">
                <div className="flex gap-3 flex-wrap">
                  <p className="badge badge-outline text-[12px]">
                    {freeShipping ? "Free shipping" : "Extra Cost"}
                  </p>
                  <p className="badge badge-outline capitalize">{brand}</p>
                </div>
                <p className="badge badge-outline capitalize text-end">
                  {avgRating}⭐
                </p>
              </div>
              <button className="badge badge-outline mt-3" onClick={()=>addToCart()}>
                <FaShoppingBasket className="h-10 w-6 cursor-pointer" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
