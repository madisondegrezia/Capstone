import { Link, Outlet, useLocation } from "react-router-dom";
import "./UserPageStyle.css";
import { FaCameraRetro, FaStar, FaPlus } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";
import { PiForkKnifeBold } from "react-icons/pi";
import UserReviews from "./UserReviews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [tempImageUrl, setTempImageUrl] = useState("");
  const [isCorrectUser, setIsCorrectUser] = useState(false);
  const [current, setCurrentUser] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const location = useLocation();
  
  let { id } = useParams();
  async function getUser(userId) {
    try {
      const response = await fetch(`/api/user/get_user/${userId}`);
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  async function getLoggedUser() {
    const response = await fetch(`/api/auth/current_user`);
    const user = await response.json();
    setCurrentUser(user);
    return user;
  }

  async function getRestaurants(id) {
    const response = await fetch(`/api/user/restaurants/${id}`);
    const myRestaurants = await response.json();
    setRestaurants(myRestaurants);
    console.log("API Response:", myRestaurants);
    return myRestaurants;
  }

  async function handleImageChange() {
    const newImageUrl = prompt("Enter the new image URL. This will be your new profile picture!");
    if (newImageUrl) {
        setTempImageUrl(newImageUrl);

        const payload = {
            profileImage: newImageUrl
        };

        try {
            const response = await fetch(`/api/user/editUser`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            // Update local userInfo state with new image URL
            setUserInfo(prevUserInfo => ({
                ...prevUserInfo,
                profileImage: newImageUrl
            }));

        } catch (error) {
            console.error("Error updating user image:", error);
        }
    } else {
      return null;
    }
}

async function hasRestaurantEdit(bool) {
    
        const payload = {
            hasRestaurant: bool
        };

        try {
            const response = await fetch(`/api/user/editUser`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            // Update local userInfo state with new image URL
            setRestaurants(prevUserInfo => ({
                ...prevUserInfo,
                hasRestaurant: bool
            }));

        } catch (error) {
            console.error("Error updating hasRestaurant bool:", error);
        }
  }

  useEffect(() => {
    async function fetchData() {
      setLoadingData(true); // Start loading
  
      const user = await getUser(id);
      const currentuse = await getLoggedUser();
  
      console.log(currentuse);
      setUserInfo(user);
      setCurrentUser(currentuse);
  
      let idHolder = 0;
      if (currentuse.user === null) {
        idHolder = null;
      } else {
        idHolder = currentuse.user.id;
      }
      const correctUser = user.UserId === idHolder;
      setIsCorrectUser(correctUser);
  
        const myRes = await getRestaurants(id);
        setRestaurants(myRes);
        console.log(myRes);
  
        if (!Array.isArray(myRes) && !currentuse.user.hasRestaurant) {
          await hasRestaurantEdit(true);
        }
  
      setLoadingData(false); // Finish loading after all data is fetched
    }
  
    fetchData();
  }, []);
  

  return (
    <>
      {userInfo && !loadingData ? (
        <div className="user-page flex flex-col">
          <div className="user-heading flex flex-row"></div>

          <div className="user-body">
            <div className="profile-left">
              <img className="user-image" src={userInfo.profileImage} />
              { isCorrectUser ? <button className="change-image-button" onClick={handleImageChange}>
              Change Image
              </button> : null }
              <div className="bio-box">
                <h2 className="user-name">{userInfo.username}</h2>
                <p className="bio">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <ul className="user-options flex flex-col items-start w-full p-5 gap-4">
              <li>
                  <Link to={`/user/${id}`} className="user-menu-item flex flex-row">
                    <FaCameraRetro />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="" className="user-menu-item flex flex-row">
                    <FaCameraRetro />
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="" className="user-menu-item flex flex-row">
                    <FaStar />
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link to="" className="user-menu-item flex flex-row">
                    <PiForkKnifeBold />
                    Following
                  </Link>
                </li>
                { userInfo.hasRestaurant ?  <li>
                  <Link to="restaurants" className="user-menu-item flex flex-row">
                    <GiFoodTruck />
                    Owned Restaurants
                  </Link>
                </li> : null}
                { isCorrectUser ? <li>
                  <Link
                    to="/addrestaurant"
                    className="user-menu-item flex flex-row"
                  >
                    <FaPlus />
                    Add Restaurant
                  </Link>
                </li> : null }
              </ul>

              <div className="break" />
              <p className="report-button">Report this Profile?</p>
            </div>
            <div className="containing">
              <div className="break-right" />
            </div>
            <div className="profile-reviews flex flex-col items-start p-7 pt-1">
              {location.pathname === `/user/${id}` ? <h1 className="review-title-name">Reviews</h1> : <h1 className="review-title-name">Restaurants</h1> }
              <p>Sort by: Options here</p>
              <div className="review-boxes gap-6">
                
                <Outlet context={[isCorrectUser, restaurants]}/>
              </div>
            </div>
            <div className="containing">
              <div className="break-right" />
            </div>
            <div className="profile-right">
              <h1 className="review-title-name p-7 pt-0 pb-0">About</h1>
              <ul className="p-8">
                <li>
                  <h2>Location</h2>
                  <p>New York</p>
                </li>
                <li>
                  <h2>Favorite Food</h2>
                  <p>Insert Here...</p>
                </li>
                <li>
                  <h2>Favorite Restaurant</h2>
                  <p>Insert Here...</p>
                </li>
                <li>
                  <h2>Statistics</h2>
                  <p>Total Reviews: </p>
                  <p>Favorite Places: </p>
                </li>
                <li>
                  <h2>Socials</h2>
                  <p>Insert Here...</p>
                  <p>Insert Here...</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
