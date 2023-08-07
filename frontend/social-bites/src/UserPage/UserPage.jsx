import { Link } from "react-router-dom";
import "./UserPageStyle.css";
import { FaCameraRetro, FaStar } from "react-icons/fa"
import { PiForkKnifeBold } from "react-icons/pi"
import UserReviews from "./UserReviews";

export default function UserPage() {


    return (
        <>
        <div className="user-page flex flex-col">
            <div className="user-heading flex flex-row">

            </div>

            <div className="user-body">
                <div className="profile-left">
                    <img className="user-image" src="/src/assets/default-avatar.webp" />
                    <div className="bio-box">
                        <h2 className="user-name">Margaret M.</h2>
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <ul className="user-options flex flex-col items-start w-full p-5 gap-4">
                        <li>
                            <Link to="" className="user-menu-item flex flex-row"><FaCameraRetro />Photos</Link>
                        </li>
                        <li>
                            <Link to="" className="user-menu-item flex flex-row"><FaStar />Favorites</Link>
                        </li>
                        <li>
                            <Link to="" className="user-menu-item flex flex-row"><PiForkKnifeBold />Following</Link>
                        </li>
                    </ul>
                    
                    <div className="break"/>
                    <p className="report-button">Report this Profile?</p>
                </div>
                <div className="containing">
                    <div className="break-right" />
                </div>
                <div className="profile-reviews flex flex-col items-start p-7 pt-1">
                    <h1 className="review-title-name">Reviews</h1>
                    <p>Sort by: Options here</p>
                    <div className="review-boxes gap-6">
                        <div className="review-box">
                            <div className="review-header flex flex-row justify-between">
                                <div className="res-detail-box flex flex-row gap-4">
                                <img className="user-image-small w-14 h-14" src="/src/assets/default-avatar.webp"></img>
                                    <div className="res-details">
                                    <p>McDoolans</p>
                                    <p>1234 Street Street</p>
                                    </div>
                                </div>
                                <div className="rate flex flex-row">
                                <FaStar size={30}style={{color: "orange"}}/><FaStar size={30}style={{color: "orange"}}/><FaStar size={30}style={{color: "orange"}}/>
                                </div>
                            </div>
                            <p className="review-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
                            </p>
                            
                        
                        </div>
                        <UserReviews />
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
                            <p>Sushi</p>
                        </li>
                        <li>
                            <h2>Favorite Restaurant</h2>
                            <p>McDoolans</p>
                        </li>
                        <li>
                            <h2>Statistics</h2>
                            <p>Total Reviews: </p>
                            <p>Favorite Places: </p>
                        </li>
                        <li>
                            <h2>Socials</h2>
                            <p>LinkedIn</p>
                            <p>FaceBook</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}