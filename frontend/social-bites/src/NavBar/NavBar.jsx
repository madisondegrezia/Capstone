import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  Outlet,
  Link,
  useNavigation,
  Form,
  redirect,
} from "react-router-dom/dist/umd/react-router-dom.development";
import classNames from "classnames";
import "./NavBarStyle.css";
import Footer from "../Footer/Footer";

export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigation = useNavigation();

  const outletClasses = classNames(
    "mx-auto max-w-4xl sm:px-12 px-4 transition-opacity",
    {
      "opacity-100": navigation.state !== "loading",
      "opacity-50": navigation.state === "loading",
    }
  );

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    redirect("/login");
    console.log(currentUser)
    console.log("logging out!!")
  };

  return (
    <>
      <div className="entire-page">
        <div className="headerBar">
          <Link to="/" className="flex h-full">
            <img
              className="logo"
              src="/src/assets/socialbites-logo.png"
              alt="logo"
            />
          </Link>
          <div className="right">
            <div className="nav-menu">
              <ul className="nav-menu-list">
                <li className="nav-menu-item">
                  <Link to="/aboutapp">About</Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            {currentUser ? (
              <Form method="post" onSubmit={handleLogout}>
                <button type="submit" className="logout">
                  Logout
                </button>
              </Form>
            ) : (
              <Link to="/login" className="login">
                Log in
              </Link>
            )}

            <img
              className="user-picture"
              src="/src/assets/default-avatar.webp"
              alt="user picture"
            ></img>
          </div>
        </div>
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
}
