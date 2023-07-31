import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import load from "./Loader/loadRestaurants";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import About from "./About/About";
import Settings from "./Settings/Settings";
import EditAccount from "./Settings/SettingsCategories/EditAccount";
import AuthProvider from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    loader: load,
    element: <NavBar />,
    children: [
      {
        path: "/",
        loader: load,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "/settings/edit",
            element: <EditAccount />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
