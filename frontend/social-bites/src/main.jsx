import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import load from "./Loader/loadRestaurants";

const router = createBrowserRouter([
  {
    path: "/",
    loader: load,
    element: (
      <NavBar />
    ),
    children: [
      {
        path: "/",
        loader: load,
        element: (
          <Home />
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
