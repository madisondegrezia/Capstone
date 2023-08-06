import { Link } from "react-router-dom";
import "./UserPageStyle.css";
import { FaCameraRetro, FaStar } from "react-icons/fa"
import { PiForkKnifeBold } from "react-icons/pi"

export default function UserPage() {


    return (
        <>
        <div className="user-page flex flex-col">
            <div className="user-heading flex flex-row">

            </div>

            <div className="user-body">
                <div className="profile-left">
                    <img className="user-image" src="./src/assets/default-avatar.webp" />
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
                <div className="profile-reviews flex flex-col items-center">
                    <p>Sort by: Options here</p>
                    <div className="review-boxes">
                        <div className="review-box">
                            <img className="user-image-small w-14 h-14" src="./src/assets/default-avatar.webp"></img>
                        </div>
                    </div>
                </div>

                <div className="profile-right">

                </div>
            </div>
        </div>
        </>
    )
}