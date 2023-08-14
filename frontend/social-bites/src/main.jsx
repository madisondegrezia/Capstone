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
import User, { userSettingsLoader } from "./UserSettings/User";
import Account, { editUserAction } from "./UserSettings/Account/Account";
import Delete, { deleteUserAction } from "./UserSettings/Delete/delete";
import UserPage from "./UserPage/UserPage";
import RestaurantReviews, {
  reviewsLoader,
} from "./RestaurantPage/RestaurantReviews/RestaurantReviews";
// import UserReviews, { userReviewsLoader } from "./UserPage/UserReviews";


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
import AddReview, {
  action as addReviewAction,
} from "./RestaurantPage/RestaurantReviews/AddReview";
import UserAddRestaurant, {
  userAddRestaurantAction,
} from "./UserPage/UserAddRestaurant/UserAddRestaurant";
import AllRestaurants, {
  allRestaurantsLoader,
} from "./RestaurantSettings/AllRestaurants/AllRestaurants";
import Tags, { loadTag } from "./UserSettings/Tags/Tags";

// modal window for post
import PostModal from "./Component/ModalWindow/ModalWindow";
import UserReviews from "./UserPage/UserReviews";
import UserRestaurants from "./UserPage/UserRestaurants";

// map container
import MapContainer from "./RestaurantPage/RestaurantMap/RestaurantMap";

import { restaurantByIdLoader } from "./Loader/loadRestaurants";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
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
            path: "/explore",
            element: <RestaurantEventDisplay />,
            loader: allEventsLoader,
            children:
            [
              {
                path: "/explore/:postId",
                element: <PostModal/>
              }
            ]
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
        path:"/restaurant/:restaurantId/map",
        element: (
          <ShareLocationRequired>
            <MapContainer/>
          </ShareLocationRequired>
        ),
        loader: restaurantByIdLoader,
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
        children: [
          {
            path: "/user/:id",
            element: <UserReviews />
          },
          {
            path: "/user/:id/restaurants",
            element: <UserRestaurants />
          }
        ]
      },
      {
        path: "/addrestaurant",
        action: userAddRestaurantAction,
        element: <UserAddRestaurant />,
      },
      {
        path: "/user/:id/settings",
        element: <User />,
        loader: userSettingsLoader,
        children: [
          {
            path: "/user/:id/settings/account",
            element: <Account />,
            action: editUserAction,
          },
          {
            path: "/user/:id/settings/delete",
            element: <Delete />,
            action: deleteUserAction,
          },
          {
            path: "/user/:id/settings/tags",
            element: <Tags />,
            loader: loadTag,
          },
        ],
      },
      {
        path: "/user/settings/tags",
        element: <Tags />,
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
        children: [
          {
            path: "/restaurant/:restaurantId",
            loader: postLoader,
            element: <RestaurantPost />,
          },
          {
            path: "/restaurant/:restaurantId/review",
            loader: reviewsLoader,
            element: <RestaurantReviews />,
          },
          {
            path: "/restaurant/:restaurantId/review/new",
            element: (
              <ProtectedRoute>
                <AddReview />
              </ProtectedRoute>
            ),
            action: addReviewAction,
            // loader: addPostLoader,
          },
        ],
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
