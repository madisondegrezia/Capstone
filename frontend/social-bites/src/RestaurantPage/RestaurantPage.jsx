import "./RestaurantPageStyle.css";
import { GrContact } from 'react-icons/gr'
import { MdOutlineRateReview, MdOutlineRestaurantMenu, MdStarRate } from 'react-icons/md'
import RestaurantCards from "../RestaurantCards/RestaurantCards";

export default function RestaurantPage() {


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
              <p className="res-name">Bob's Burgers</p>
              <li className="flex flex-row items-center justify-start px-5 py-5">
                <div className="icons">
                <MdStarRate size={ 25 } />
                </div>
                <a href="#">Rating</a>
              </li>
              <li className="flex flex-row items-center justify-start px-5 py-5">
                <div className="icons">
                <MdOutlineRateReview size={ 25 } />
                </div>
                <a href="#">Reviews</a>
              </li>
              <li className="flex flex-row items-center justify-start px-5 py-5">
                <div className="icons">
                <MdOutlineRestaurantMenu size={ 25 } />
                </div>
                <a href="#">Menu</a>
              </li>
              <li className="flex flex-row items-center justify-start px-5 py-5">
                <div className="icons">
                <GrContact size={ 25 } />
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

          <div id="content">
            <h1 className="text-4xl p-5 activity">Activity</h1>
            <h2>Lorem Ipsum Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div id="suggestion-content">
            <h2 className="text-3xl suggestions">More Restaurants like Bob's Burgers</h2>
             <RestaurantCards />
          </div>
        </div>
      </div>
    </>
  );
}
