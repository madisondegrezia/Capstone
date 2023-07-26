import { useState } from "react"
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development"

export default function NavBar() {


    return (
        <div className="entire-page">
        <div className="headerBar">
            <img className="logo" src="/src/assets/socialbites-logo.png" alt="logo"></img>
            <div className="right">
                <button className="login">Log In</button>
                <img className="user-picture" src="/src/assets/default-avatar.webp" alt="user picture"></img>
            </div>
        </div>
        <Outlet />
        </div>
    )
}