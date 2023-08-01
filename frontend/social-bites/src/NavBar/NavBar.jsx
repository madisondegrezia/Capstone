import { useState } from "react";
import {
  Outlet,
  Link,
} from "react-router-dom/dist/umd/react-router-dom.development";
import "./NavBarStyle.css";
import Footer from "../Footer/Footer";

export default function NavBar() {
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
            <Link to="/login" className="login">
              Log in
            </Link>
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
