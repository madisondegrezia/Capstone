import { Form, Link } from "react-router-dom";
import "./Search.css";
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="outer">
      <div className="outer-body">
        <Form method="get" className="box">
          <input
            type="text"
            name="search"
            placeholder="Search For Restaurants..."
          />
          <Link to="#" className="link">
            <FaSearch className="icon" />
          </Link>
        </Form>
      </div>
      <Outlet />
    </div>
  );
}
