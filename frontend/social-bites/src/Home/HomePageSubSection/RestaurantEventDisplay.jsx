import React, { useContext } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLoaderData, useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';

const RestaurantEventDisplay = () => {
  const data = useLoaderData();

  const location = useLocation()
  const urlLastItem = location.pathname.split('/').pop();


  return (
    <>
      <div className="restaurant-cards">
      {
        data.map((restaurant, index) => {
          return (
            <Link to={`/`} className="card" key={index}>
              <img className="cardImage" src={"https://st2.depositphotos.com/1635204/7654/i/450/depositphotos_76549817-stock-photo-word-events-on-colorful-wooden.jpg"} alt={"Img"} />
              <div className="cardName flex justify-center m-3">{restaurant.Restaurant.restaurantName}
              </div>
              <div className="cardType">{restaurant.postTitle}</div>
              <div className="flex items-center justify-center my-5">
                <button className="go-to-page">More Detail</button>
              </div>
            </Link>
          );
        })
      }
      </div>
    </>
  );
};

export default RestaurantEventDisplay;
