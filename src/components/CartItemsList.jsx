import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  console.log(cartItems);

  return (
    <div>
      {cartItems?.map((item) => {
        return <CartItem key={item.cartId} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
