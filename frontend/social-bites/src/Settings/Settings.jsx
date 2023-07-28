import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";
import "./SettingsStyle.css"

export default function Settings() {
    return(
        <div className="sub-page">
            <div className="settings-bar">
                <h2 className="settings-title">Settings</h2>
                <ul className="settings-list">  
                    
                    <li>Edit Account Info</li>
                    <li>Delete Account</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                </ul>
            </div>

            <div className="settings-content">
                <Outlet />
            </div>
        </div>
    )
}