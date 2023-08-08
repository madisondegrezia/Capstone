import {
  Link,
  redirect,
  useActionData,
  useLoaderData,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

export default function RestaurantCards() {
  const data = useLoaderData();
  const list = [];

  const style = { color: "gold", fontSize: "1.5em" };

  data.forEach((item, index) => {
    list.push(
      <Link to={`/restaurant/${item.restaurantId}`} className="card" key={index}>
        <img className="cardImage" src={item.image.src} alt={item.image.alt} />
        <div className="cardName">{item.restaurantName}</div>
        <div className="cardType">{item.foodType}</div>
        <div className="rateAndButton">
          <span className="cardRate">
            <AiTwotoneStar style={style} />
            {item.rating}
          </span>
          <button className="go-to-page">Go To Page</button>
        </div>
      </Link>
    );
  });

  return list;
}
