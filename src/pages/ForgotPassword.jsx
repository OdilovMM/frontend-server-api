import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { Button, FormInput } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-10 bg-base-100 flex shadow-sm flex-col gap-6"
      >
        <h4 className="text-center text-3xl font-bold">Enter your email in order to reset password</h4>
        <FormInput
          type="Email"
          label="Email"
          name="email"
          placeholder="sample@gmail.com"
        />

        <Button text="SUBMIT" />
      </Form>
    </section>
  );
};

export default ForgotPassword;
