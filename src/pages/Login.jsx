import { Form, Link } from "react-router-dom";
import { Button, FormInput } from "../components";

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
          <Link className="text-secondary" to="/register">
            Reset password
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default Login;
