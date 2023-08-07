import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";
import "./RestaurantReviews.css";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

export default function RestaurantReviews() {
  const reviews = useLoaderData();
  //forEach
  return (
    <>
      <div className="main-wrap">
        <div className="wrapper1">
          <div className="restaurant-page">
            <img
              className="res-hero"
              src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image3-min-1024x569.png"
            ></img>

            <div className="res-content"></div>
          </div>
        </div>
        <div className="wrapper">
          <nav id="sidebar">
            <img
              className="profile-image"
              src="https://www.auntminnie.com/user/images/content_images/nws_rad/2015_01_28_12_24_19_220_hamburger_200.jpg"
            ></img>
            {/*<div class="sidebar-header">
            <h3>Restaurant Name</h3>
        </div>*/}

            <ul className="list-unstyled components">
              <p className="res-name">Bob`s Burgers</p>
              <li>
                <Link href="#">Rating</Link>
              </li>
              <li>
                <Link href="restaurant/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="#">Menu</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>

            <ul className="list-unstyled CTAs">
              <li>
                <Link href="/" className="article">
                  Back to home
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <div className="ranking">
              <div></div>
              <h1 className="review-ranking">
                Bob`s Burgers {reviews.allReviews.rate}
                <span>
                  {reviews.allReviews.map((review) => (
                    <>
                      <span key={review.id}>{`${review.rate}`}</span>
                    </>
                  ))}
                  /5
                </span>
              </h1>
            </div>
            <h1 className="review-title">Reviews</h1>
            {reviews.allReviews.map((review) => (
              <>
                <div className="quote-container">
                  <div className="quote-text">
                    <FaQuoteLeft className="fas" />
                    <span id="quote" key={review.id}>
                      {review.review}
                    </span>
                    <p id="author">{review.User.username}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const reviewsLoader = async () => {
  const res = await fetch("api/restaurant/3");
  return res.json();
};
//   const res = await await fetch("/api/review/1"); // Assuming that something() returns Link promise
//   const user = await fetch("/api/user/get_user/1"); // Assuming that somethingElse() returns a promise

//   const resJson = await res.json();
//   const userJson = await user.json();

//   const result = resJson.allReviews.map((item, index) => {
//     return {
//       ...item,
//       username: userJson[index].username,
//     };
//   });
//   console.log(result);
//   return result;
// };
//
