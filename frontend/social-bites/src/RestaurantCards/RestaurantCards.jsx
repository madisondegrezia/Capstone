import { Link, redirect, useActionData, useLoaderData, Navigate, useLocation } from "react-router-dom";

export default function RestaurantCards () {
    const data = useLoaderData();
    const list = [];



    data.forEach((item, index) => {

        list.push(
        <Link to={`/`} className="card" key={index}>
          <img className="cardImage" src={item.image.src} alt={item.image.alt}/>
          <div className="cardName">{item.restaurantName}</div>
          <div className="cardType">By {item.foodType}</div>
          <div className="cardRate">{item.rating}</div>
        </Link>
        )
    });


    console.log(list);
    return list;
}