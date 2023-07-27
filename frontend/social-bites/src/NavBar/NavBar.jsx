import { useState } from "react"
import { Outlet, Link } from "react-router-dom/dist/umd/react-router-dom.development"
import "./NavBarStyle.css"

export default function NavBar() {


    return (
        <div className="entire-page">
        <div className="headerBar">
            <Link to="/" className="flex h-full"><img className="logo" src="/src/assets/socialbites-logo.png" alt="logo" /></Link>
            <div className="right">
                <button className="login">Log In</button>
                <img className="user-picture" src="/src/assets/default-avatar.webp" alt="user picture"></img>
            </div>
        </div>
        <Outlet />
        </div>
    )
}