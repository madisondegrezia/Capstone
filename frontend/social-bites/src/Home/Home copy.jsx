import { Form } from "react-router-dom";
import "./HomeStyle.css";
import RestaurantCards from "../RestaurantCards/RestaurantCards";

export default function Home() {
  return (
    <div className="home-page">
      {/* <img
        className="head-img"
        src="https://media.bizj.us/view/img/12359290/df104-5-of-13*1200xx2500-1406-0-255.jpg"
      ></img> */}
      <Form method="get" className="search-bar">
        <input
          id="search-res"
          className="border-2"
          placeholder="Search For Restaurants..."
        />
      </Form>

      <div className="restaurant-cards">
        <RestaurantCards />
      </div>
    </div>
  );
}
