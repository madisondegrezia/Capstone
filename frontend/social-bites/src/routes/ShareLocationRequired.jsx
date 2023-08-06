import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function ShareLocationRequired({ children }) {
  const { location } = useContext(AuthContext);

  useEffect(() => {
    if (!location) {
      alert("Please turn on your share location to access nearby events");
    }
  }, [location]);

  // Render the link only if the location is available
  return location ? children : null;
}
