import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import amountGenerate from "../utils/generateAmount";
const url = "/products/all-products";

export const loader = async ({ params }) => {
  const { productId } = params;
  const response = await customFetch.get(`${url}/${productId}`);
  return { product: response.data };
};

const SingleProductPage = () => {
  const { product } = useLoaderData();
  const {
    avgRating,
    colors,
    brand,
    description,
    freeShipping,
    image,
    inventory,
    name,
    category,
    numOfReviews,
    price,
  } = product.product;
  console.log(product.product);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={name}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* product */}
        <div>
          <h1 className="capitalize text-3xl font-bold"> {name}</h1>
          <h3 className="text-xl text-neutral-content font-bold mt-2">
            <span className="capitalize text-stone-400"> brand name: </span>
            {brand}
          </h3>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-3 text-xl capitalize">Category: {category}</p>
          <p className="mt-3 text-xl">Reviews: {numOfReviews}</p>
          <p className="mt-3 text-xl">Rating ⭐: {avgRating}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* Amount */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount
                </h4>
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  In Stock: {inventory}
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                value={amount}
                onChange={handleAmount}
                id="amount"
              >
                {amountGenerate(inventory)}
              </select>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={() => console.log("Add to cart")}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
