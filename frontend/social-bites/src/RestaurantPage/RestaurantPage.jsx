import "./RestaurantPageStyle.css";
import { GrContact } from "react-icons/gr";
import {
  MdOutlineRateReview,
  MdOutlineRestaurantMenu,
  MdStarRate,
} from "react-icons/md";
import RestaurantCards from "../RestaurantCards/RestaurantCards";
import RestaurantPost from "./RestaurantPosts/RestaurantPost";
import { Outlet, useLocation, Link } from "react-router-dom/dist/umd/react-router-dom.development";
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
      <>
        <div className="main-wrap">
          <div className="wrapper1">
            <div className="restaurant-page">
              <img
                className="res-hero"
                //src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image3-min-1024x569.png"
                src={restaurant.heroImage}
              ></img>

              <div className="res-content"></div>
            </div>
          </div>
        </div>
        <div className="wrapper flex flex-row w-screen">
          <nav id="sidebar">
            <img
              className="profile-image"
              src={restaurant.profileImage}
            ></img>

              <ul className="list-unstyled components">
                <p className="res-name">{restaurant.restaurantName}</p>
                <li className="flex flex-row items-center justify-start px-5 py-5">
                  <div className="icons">
                    <MdOutlineRateReview size={25} />
                  </div>
                  <Link to="review" >Reviews</Link>
                </li>
                <li className="flex flex-row items-center justify-start px-5 py-5">
                  <div className="icons">
                    <MdOutlineRestaurantMenu size={25} />
                  </div>
                  <a href="#">Menu</a>
                </li>
                <li className="flex flex-row items-center justify-start px-5 py-5">
                  <div className="icons">
                    <GrContact size={25} />
                  </div>
                  <a href="#">Contact</a>
                </li>
              </ul>

              <ul className="list-unstyled CTAs">
                <li>
                  <a href="/" className="article">
                    Back to home
                  </a>
                </li>
              </ul>
            </nav>
            <div id="contentz">
              { location.pathname === `/restaurant/${restaurantId}/review` ? <Link
            to={`/restaurant/${restaurantId}/review/new`}
            className="bg-red-500 rounded text-white px-4 py-2 hover:bg-red-600 hover:text-white transition mb-3"
          >
            + Add Review
          </Link> : null}
              <Outlet />
            </div>
            {location.pathname === `/restaurant/${restaurantId}` ? (
              <div id="suggestion-content">
                <h2 className="text-3xl suggestions">
                  Similar Restaurants
                </h2>
                {/* <RestaurantCards /> */}
              </div>
            ) : null}
          </div>
          </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}