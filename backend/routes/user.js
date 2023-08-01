const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const {sequelize, Sequelize} = require("../models/index"); // get sequelize from the index.js to gain access to the database

// post user's location on the session
router.post("/location", async (req,res)=>{
    try{
        const userLocation = {
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
    
        req.session.userLocation = userLocation;
        return res.status(201).json({
            message: "The location is being stored successfully",
            userLocation: userLocation
        });

    } catch(error) {
        console.error(err);
        return res.status(500).send({message: err.message});
    }
});

// get user's location from the session, could be used to check if user shared their location
router.get("/location", async (req,res)=>{
    if (req.session.userLocation) {
        return res.status(200).json({
            userLocation: {
                latitude: req.session.userLocation.latitude,
                longitude: req.session.userLocation.longitude
            }
        });
    }
    else{
        return res.status(401).json({user: null});
    }
});


// get nearby restaurant based on the radius kilometers, require users to share their location
router.get("/nearby_restaurant/:radiusKm", async (req, res) => {
    // if user share their location then fetch for nearby restaurant
  if (req.session.userLocation) {
    const radiusMeters = parseFloat(req.params.radiusKm) * 1000;
    const userLatitude = parseFloat(req.session.userLocation.latitude);
    const userLongitude = parseFloat(req.session.userLocation.longitude);

    try{
        // use sequelize.query to select from the database using extension of earth_distance
        const nearbyRestaurants = await sequelize.query(
            `
            SELECT * FROM "restaurant"
            WHERE earth_box(ll_to_earth(?, ?), ?) @> ll_to_earth("latitude", "longitude")
            `,
            {
                replacements: [userLatitude, userLongitude, radiusMeters], // replacement for the question marks
                type: QueryTypes.SELECT
            },
        );

        if (nearbyRestaurants.length > 0) {
          return res.json({ restaurants: nearbyRestaurants });
        } else {
          return res.status(404).json({ message: "No restaurant found" });
        }
    } catch(error){
        const errorMessage = error.message;
        return res.status(500).json({message: "An error occured when fetching for restaurants", error: errorMessage})
    }
  } else {
    return res.status(403).json({ message: "The user didn't allow location system" });
  }
});

module.exports = router;
