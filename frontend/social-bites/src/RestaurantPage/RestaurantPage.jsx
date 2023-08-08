import "./RestaurantPageStyle.css";
import { GrContact } from "react-icons/gr";
import {
  MdOutlineRateReview,
  MdOutlineRestaurantMenu,
  MdStarRate,
} from "react-icons/md";
import RestaurantCards from "../RestaurantCards/RestaurantCards";
import RestaurantPost from "./RestaurantPosts/RestaurantPost";
import { Outlet, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // function to fetch restaurant by id
    const fetchRestaurantById = async () => {
      try {
        const response = await fetch(`/api/restaurant/${restaurantId}`);
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    // Call the function to fetch the restaurant data
    fetchRestaurantById();
  }, [restaurantId]); // The useEffect hook will re-run whenever the restaurantId changes.


  const location = useLocation();

  return (
    <>
      {restaurant ? (
        <div>
          <div className="main-wrap">
            <div className="wrapper1">
              <div className="restaurant-page">
                <img
                  className="res-hero"
                  src={restaurant.heroImage}
                  alt="Restaurant Hero"
                />
                <div className="res-content"></div>
              </div>
            </div>
          </div>
          <div className="wrapper flex flex-row w-screen">
            <nav id="sidebar">
              {/* ... */}
            </nav>
            <div id="contentz">
              <Outlet />
            </div>
            {location.pathname === `/restaurant/${restaurantId}` ? (
              <div id="suggestion-content">
                <h2 className="text-3xl suggestions">
                  More Restaurants like Bob's Burgers
                </h2>
                {/* <RestaurantCards /> */}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}