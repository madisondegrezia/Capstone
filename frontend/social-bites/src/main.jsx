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
import AuthProvider from "./contexts/AuthContext";
import Contact from "./Contact/Contact";
import AboutApp from "./AboutApp/AboutApp";
import Slider from "./Slider/Slider";
import ProtectedRoute from "./routes/ProtectedRoute";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import Search from "./Search/Search";
import User from "./UserSettings/User";
import Account from "./UserSettings/Account/Account";
import Reviews from "./UserSettings/Reviews/Reviews";
import Events from "./UserSettings/Events/Events";
import Favorite from "./UserSettings/Favorite/Favorite";
import Delete from "./UserSettings/Delete/delete";
import RestaurantReviews, {
  reviewsLoader,
} from "./RestaurantPage/RestaurantReviews/RestaurantReviews";
import RestaurantPost, {
  postLoader,
} from "./RestaurantPage/RestaurantPosts/RestaurantPost";
import AddPost, {
  action as addPostAction,
  loader as addPostLoader,
} from "./RestaurantPage/RestaurantPosts/AddPost";

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
        path: "/user/settings",
        element: <User />,
        children: [
          {
            path: "/user/settings/account",
            element: <Account />,
          },
          {
            path: "/user/settings/reviews",
            element: <Reviews />,
          },
          {
            path: "/user/settings/events",
            element: <Events />,
          },
          {
            path: "/user/settings/favorite",
            element: <Favorite />,
          },
          {
            path: "/user/settings/delete",
            element: <Delete />,
          },
        ],
      },
      {
        path: "/restaurant",
        loader: postLoader,
        element: <RestaurantPage />,
      },
      {
        path: "/post/new",
        element: <AddPost />,
        action: addPostAction,
        loader: addPostLoader,
      },
      {
        path: "/restaurant/reviews",
        loader: reviewsLoader,
        element: <RestaurantReviews />,
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
