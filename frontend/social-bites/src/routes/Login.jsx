import { Form } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Form method="post" className="selection:bg-red-200 flex flex-col gap-2">
      <h1 className="text-3xl mt-4 text-center flex flex-row items-center justify-center">Login <FaUser /></h1>

      <fieldset className="flex flex-col">
        <label htmlFor="title">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="company">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <input
        className="bg-red-500 hover:bg-red-600 text-white transition mt-4 py-2 cursor-pointer"
        type="submit"
      ></input>
      <Link to="/signup" className="flex flex-row-reverse mr-3 underline">Do not already have an account?</Link>
    </Form>
  );
}

export default Login;
