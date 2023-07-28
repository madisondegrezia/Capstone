import { Outlet, Link } from "react-router-dom/dist/umd/react-router-dom.development";
import "./SettingsStyle.css"

export default function Settings() {
    return(
        <div className="sub-page">
            <div className="settings-bar">
                <h2 className="settings-title">Settings</h2>
                <div className="settings-list">  
                    
                    <Link to="edit">Edit Account Info</Link>
                    <Link to="">Delete Account</Link>
                    <Link to="">Placeholder</Link>
                    <Link to="">Placeholder</Link>
                </div>
            </div>

            <div className="settings-content">
                <Outlet />
            </div>
        </div>
    )
}