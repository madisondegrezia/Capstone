import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import AuthProvider from "./contexts/AuthContext";
import Contact from "./Contact/Contact";
import AboutApp from "./AboutApp/AboutApp";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import User from "./UserSettings/User";
import Account from "./UserSettings/Account/Account";
import Reviews from "./UserSettings/Reviews/Reviews";
import Events from "./UserSettings/Events/Events";
import Favorite from "./UserSettings/Favorite/Favorite";
import Delete from "./UserSettings/Delete/delete";
import UserPage from "./UserPage/UserPage";
import RestaurantReviews, {
  reviewsLoader,
} from "./RestaurantPage/RestaurantReviews/RestaurantReviews";
// import UserReviews, { userReviewsLoader } from "./UserPage/UserReviews";
import UserReviews from "./UserPage/UserReviews";
import { load } from "./Loader/loadRestaurants";

// ----- Middleware components ----- ///
import ProtectedRoute from "./routes/ProtectedRoute";
import ShareLocationRequired from "./routes/ShareLocationRequired";

// ----- home page components ----- ///
import RestaurantDisplay from "./Home/HomePageSubSection/RestaurantDisplay";
import RestaurantEventDisplay from "./Home/HomePageSubSection/RestaurantEventDisplay";
import {
  nearbyRestaurantLoader,
  mainSectionRestaurantLoader,
} from "./Loader/loadRestaurants";
import {
  allEventsLoader,
  nearbyEventLoader,
  interestedEventLoader,
} from "./Loader/loadRestaurantPosts";

// ------ Search Page components ------ //
import SearchPage from "./Search/SearchPage";
import { searchRestaurantLoader } from "./Loader/loadRestaurants";

import RestaurantSettings, {
  restaurantSettingsLoader,
} from "./RestaurantSettings/RestaurantSettings";
import AllRestaurants, {
  allRestaurantsLoader,
} from "./RestaurantSettings/AllRestaurants/AllRestaurants";
import EditRestaurant, {
  editRestaurantAction,
} from "./RestaurantSettings/EditRestaurant/EditRestaurant";
import DeleteRestaurant, {
  deleteAction,
} from "./RestaurantSettings/DeleteRestaurant/DeleteRestaurant";
import RestaurantPost, {
  postLoader,
} from "./RestaurantPage/RestaurantPosts/RestaurantPost";
import AddPost, {
  action as addPostAction,
  // loader as addPostLoader,
} from "./RestaurantPage/RestaurantPosts/AddPost";
import DeletePost, {
  action as deletePostAction,
} from "./RestaurantPage/RestaurantPosts/DeletePost";
import UserAddRestaurant, {
  userAddRestaurantAction,
} from "./UserPage/UserAddRestaurant/UserAddRestaurant";

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
        children: [
          {
            path: "/",
            element: <RestaurantDisplay />,
            loader: mainSectionRestaurantLoader,
          },
          {
            path: "/nearby_restaurants",
            element: (
              <ShareLocationRequired>
                <RestaurantDisplay />
              </ShareLocationRequired>
            ),
            loader: nearbyRestaurantLoader,
          },
          {
            path: "/all_events",
            element: <RestaurantEventDisplay />,
            loader: allEventsLoader,
          },
          {
            path: "/nearby_restaurant_post",
            element: <RestaurantEventDisplay />,
            loader: nearbyEventLoader,
          },
          {
            path: "/interested_restaurant_post",
            element: (
              <ProtectedRoute>
                <RestaurantEventDisplay />
              </ProtectedRoute>
            ),
            loader: interestedEventLoader,
          },
        ],
      },
      {
        path: "/search/:keywordTerm",
        element: <SearchPage />,
        loader: searchRestaurantLoader,
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
        element: <FAQ />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/user/:id",
        // loader: userReviewsLoader,
        element: <UserPage />,
      },
      {
        path: "/addrestaurant",
        action: userAddRestaurantAction,
        element: <UserAddRestaurant />,
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
        path: "/restaurant/:id/settings",
        element: <RestaurantSettings />,
        loader: restaurantSettingsLoader,
        children: [
          {
            path: "/restaurant/:id/settings/all",
            element: <AllRestaurants />,
            loader: allRestaurantsLoader,
          },
          {
            path: "/restaurant/:id/settings/edit",
            element: <EditRestaurant />,
            action: editRestaurantAction,
          },

          {
            path: "/restaurant/:id/settings/delete",
            element: <DeleteRestaurant />,
            action: deleteAction,
          },
        ],
      },

      {
        path: "/restaurant/:restaurantId",
        loader: postLoader,
        element: <RestaurantPage />,
      },
      {
        path: "/restaurant/:restaurantId/post/new",
        element: (
          <ProtectedRoute>
            <AddPost />
          </ProtectedRoute>
        ),
        action: addPostAction,
        // loader: addPostLoader,
      },
      {
        path: "restaurant_post/delete/:postId",
        element: (
          <ProtectedRoute>
            <DeletePost />
          </ProtectedRoute>
        ),
        action: deletePostAction,
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
