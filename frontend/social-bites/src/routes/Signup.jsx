import { Form } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import "./Login.css";

function Signup() {
  return (
    <div className="img h-screen flex items-center justify-center">
      <Form
        method="post"
        className="selection:bg-red-200 flex flex-col gap-2 flex items-center"
      >
        <div className="border-solid rounded-xl p-10 mt-8 shadow-2xl background-color">
          <h1 className="text-3xl mt-5 text-center flex flex-row items-center justify-center">
            Signup <FaUsers />
          </h1>

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
            <label htmlFor="title">Username</label>
            <input
              type="username"
              name="username"
              id="username"
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
              type="submit"
              value="Signup"
            ></input>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
