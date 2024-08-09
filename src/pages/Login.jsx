import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { Button, FormInput } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { loginUser } from "../features/user/userSlice.js";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/login", data);
      console.log(response);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in");
      return redirect("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    return null;
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-10 bg-base-100 flex shadow-sm flex-col gap-6"
      >
        <h4 className="text-center text-3xl font-bold">Login into account</h4>
        <FormInput
          type="Email"
          label="Email"
          name="email"
          placeholder="sample@gmail.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          placeholder="123456789"
        />
        <Button text="LOGIN" />
        <div className="mt-3 flex justify-between">
          <p>Don't have an account?</p>
          <Link className="text-secondary" to="/register">
            Register Here
          </Link>
        </div>
        <div className="mt-1 flex justify-between">
          <p>Forgot your password?</p>
          <Link to="/forgot-password" className="text-secondary">
            Reset password
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default Login;
