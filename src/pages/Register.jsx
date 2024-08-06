import { Form, Link } from "react-router-dom";
import { Button, FormInput } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-10 bg-base-100 flex shadow-sm flex-col gap-6"
      >
        <h4 className="text-center text-3xl font-bold">Register account</h4>
        <FormInput
          type="text"
          label="Name"
          name="name"
          placeholder="John Doe"
        />
        <FormInput
          type="text"
          label="Mobile"
          name="mobile"
          placeholder="+1 890 14567"
        />
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
          placeholder="yourpassword"
        />
        <Button text="REGISTER" />
        <div className="mt-3 flex justify-between">
          <p>ALready have an account?</p>
          <Link className="text-secondary" to="/login">
            Login Here
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default Register;
