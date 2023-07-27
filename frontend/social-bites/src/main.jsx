import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavBar />
    ),
    children: [
      {
        path: "/",
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
