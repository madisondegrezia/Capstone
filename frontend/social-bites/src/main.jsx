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
import FAQ from "./FAQ/FAQ";
import Settings from "./Settings/Settings";
import EditAccount from "./Settings/SettingsCategories/EditAccount";
import AuthProvider from "./contexts/AuthContext";
import Contact from "./Contact/Contact";
import AboutApp from "./AboutApp/AboutApp";
import Slider from "./Slider/Slider";
import ProtectedRoute from "./routes/ProtectedRoute";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import Search from "./Search/Search";
import User from "./User/User";
import Account from "./User/Account/Account";
import Reviews from "./User/Reviews/Reviews";
import Events from "./User/Events/Events";
import Favorite from "./User/Favorite/Favorite";
import Delete from "./User/Delete/delete";

const router = createBrowserRouter([
  {
    path: "/",
    loader: load,
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Slider />,
        children: [
          {
            path: "/",
            element: <Search />,
            children: [
              {
                path: "/",
                loader: load,
                element: <Home />,
              },
            ],
          },
        ],
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
        path: "/aboutapp",
        element: <AboutApp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: (
          <ProtectedRoute>
            <FAQ />
          </ProtectedRoute>
        ),
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
      {
        path: "/user",
        element: <User />,
        children: [
          {
            path: "/user/account",
            element: <Account />,
          },
          {
            path: "/user/reviews",
            element: <Reviews />,
          },
          {
            path: "/user/events",
            element: <Events />,
          },
          {
            path: "/user/favorite",
            element: <Favorite />,
          },
          {
            path: "/user/delete",
            element: <Delete />,
          },
        ],
      },
      {
        path: "/restaurant",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
