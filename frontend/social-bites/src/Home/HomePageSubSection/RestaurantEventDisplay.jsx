import React, { useContext } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom/dist/umd/react-router-dom.development';

const RestaurantEventDisplay = () => {
  const data = useLoaderData();


  return (
    <>
      <div className="restaurant-cards">
      {
        data.map((restaurant, index) => {
          return (
            <Link to={`/`} className="card" key={index}>
              {
                (restaurant.postImg)? 
                (<img className="cardImage" src={restaurant.postImg} alt={"Img"} />)
                :
                ""
              }
              
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
