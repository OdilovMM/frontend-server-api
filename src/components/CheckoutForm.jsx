import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import Button from "./Button";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import SearchInput from "./SearchInput";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    console.log(info);

    try {
      const response = await customFetch.post(
        "orders/add-order",
        {
          data: info,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <SearchInput label="Name" name="name" type="text" />
      <SearchInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <Button text="Place order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
