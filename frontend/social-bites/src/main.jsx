import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        )
      },
      {
        path: "/login",
        element: (
          <Login />
        )
      },
      {
        path: "/signup",
        element: (
          <Signup />
        )
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
