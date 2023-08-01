import React, { useState } from "react";
import axios from "axios";

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  const postLocation = async (latitude, longitude) => {
    const response = await fetch("/api/user/location", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: 
        {
            latitude: latitude,
            longitude: longitude
        }
    });

    if (!response.ok){
        return false;
    }
    else return true;
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (postLocation(latitude, longitude)){
              setLocation({ latitude, longitude });
          }
          else
          {
            console.error("Error getting user's location");
          }
        },
        (error) => {
          console.error("Error getting user's location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return { location, getLocation };
};







