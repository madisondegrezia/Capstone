import { Form } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Form method="post" className="selection:bg-red-200 flex flex-col gap-2 flex items-center">
      <div className="border-solid border-2 border-red-500 rounded-xl p-10 mt-8 shadow-2xl bg-red-400">
      <h1 className="text-3xl mt-5 text-center flex flex-row items-center justify-center">Login <FaUser /></h1>

      <fieldset className="flex flex-col">
        <label htmlFor="title">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 rounded-md bg-red-100 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="company">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 rounded-md bg-red-100 focus:outline-none p-2"
        />
      </fieldset>
      <div className="text-center">
      <input
        className="bg-red-700 hover:bg-red-800 text-white rounded-md transition mt-4 py-2 cursor-pointer w-32"
        type="submit" value="Login"
      ></input>
      </div>
      <Link to="/signup" className="flex mr-3 mt-3 underline">Do not have an account?</Link>
    </div>
    </Form>
  );
}

export default Login;
