import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { formatPrice } from "../utils";
import amountGenerate from "../utils/generateAmount";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartId }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  };

  const { cartId, name, price, image, amount, brand, productColor } = cartItem;

  return (
    <article
      key={cartId}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={name}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{name}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {brand}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {amountGenerate(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          Delete
        </button>
      </div>

      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
