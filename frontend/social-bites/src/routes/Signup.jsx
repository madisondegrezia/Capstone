import { Form, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUsers } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const { currentUser, signup, authError } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);
    await signup(credentials);
  };

  return (
    <div className="img-signup h-screen flex items-center justify-center">
      <Form
        onSubmit={handleSubmit}
        className="selection:bg-red-200 flex flex-col gap-2 flex items-center"
      >
        <div className="border-solid rounded-xl p-10 mt-8 shadow-2xl background-color">
          <h1 className="text-3xl mt-5 text-center flex flex-row items-center justify-center">
            Sign Up <FaUsers />
          </h1>

          {authError && <div className="text-red-500">{authError}</div>}

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
          <fieldset className="flex flex-col mt-3 text-white">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="border-2 rounded-md bg-red-100 focus:outline-none p-2 mr-1"
              />
              Are you a restaurant owner?
            </label>
          </fieldset>
          <div className="text-center">
            <input
              className="bg-red-700 hover:bg-red-800 text-white rounded-md transition mt-4 py-2 cursor-pointer w-32"
              type="submit"
              value="Sign Up"
            ></input>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
