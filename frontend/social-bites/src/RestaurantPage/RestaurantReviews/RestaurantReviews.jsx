import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";
import "./RestaurantReviews.css";

export default function RestaurantReviews() {
  const reviews = useLoaderData();

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
                <a href="#">Rating</a>
              </li>
              <li>
                <a href="restaurant/reviews">Reviews</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
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

          <div id="content">
            <h1 className="text-5xl">Reviews</h1>
            <h2>Bob`s Burgers </h2>
            <div className="reviews">
              {reviews.allReviews.map((review) => (
                <>
                  <p key={review.id}>{review.review}</p>
                  <p>{review.User.username}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const reviewsLoader = async () => {
  const res = await fetch("/api/review/1");

  return res.json();
};
//   const res = await await fetch("/api/review/1"); // Assuming that something() returns a promise
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
