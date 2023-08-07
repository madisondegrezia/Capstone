import {
  Link,
  Outlet,
} from "react-router-dom/dist/umd/react-router-dom.development";
import "./RestaurantSettings.css";
import { FaPlus } from "react-icons/fa";
import { AiFillDelete, AiFillSetting } from "react-icons/ai";
import { BsStars, BsFillCalendarEventFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

export default function RestaurantSettings() {
  return (
    <div className="body">
      <div className="container">
        <div className="leftbox">
          <nav className="nav">
            <Link to="/restaurant/settings/add" className="tab">
              <FaPlus className="fa-user" />
            </Link>
            <Link to="/restaurant/settings/edit" className="tab">
              <AiFillSetting className="fa-credit" />
            </Link>
            <Link to="/restaurant/settings/addevent" className="tab">
              <BsFillCalendarEventFill className="fa-tasks" />
            </Link>
            <Link to="/restaurant/settings/pastevents" className="tab">
              <MdFavorite className="fa-settings" />
            </Link>
            <Link to="/restaurant/settings/delete" className="tab">
              <AiFillDelete className="fa-cog" />
            </Link>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
