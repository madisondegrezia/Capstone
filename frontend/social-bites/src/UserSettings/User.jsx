import {
  Link,
  Outlet,
} from "react-router-dom/dist/umd/react-router-dom.development";
import "./User.css";
import { FaUserAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsStars, BsFillCalendarEventFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

export default function UserSettings() {
  return (
    <div className="body">
      <div className="container">
        <div className="leftbox">
          <nav className="nav">
            <Link to="/user/settings/account" className="tab">
              <FaUserAlt className="fa-user" />
            </Link>
            <Link to="/user/settings/reviews" className="tab">
              <BsStars className="fa-credit" />
            </Link>
            <Link to="/user/settings/events" className="tab">
              <BsFillCalendarEventFill className="fa-tasks" />
            </Link>
            <Link to="/user/settings/favorite" className="tab">
              <MdFavorite className="fa-settings" />
            </Link>
            <Link to="/user/settings/delete" className="tab">
              <AiFillDelete className="fa-cog" />
            </Link>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
