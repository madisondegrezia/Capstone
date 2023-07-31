import { Form, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const { currentUser, login, authError } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);
    await login(credentials);
  };

  return (
    <div className="img-login h-screen flex items-center justify-center">
      <Form
        onSubmit={handleSubmit}
        className="selection:bg-red-200 flex flex-col gap-2 flex items-center"
      >
        <div className="border-solid rounded-xl p-10 mt-8 shadow-2xl background-color">
          <h1 className="text-3xl mt-5 text-center flex flex-row items-center justify-center">
            Login <FaUser />
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
              value="Login"
            ></input>
          </div>
          <Link to="/signup" className="flex mr-3 mt-3 underline text-white ">
            Do not have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
