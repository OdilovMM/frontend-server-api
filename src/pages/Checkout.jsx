import { useSelector } from "react-redux";
import { CartTotals, SectionTitle } from "../components";
import CheckoutForm from "../components/CheckoutForm";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("Please login");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 grid-cols-2 items-start">
        <CheckoutForm />
      </div>
    </>
  );
};

export default Checkout;
