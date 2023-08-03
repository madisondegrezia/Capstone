const express = require("express");
const router = express.Router();
const { Restaurant } = require("../models");
const { autheticateUser } = require("../middleware/authUser");
require("dotenv").config();


// import axios from the axios to fetch for google map api
const axios = require("axios");
const googleApiKey = process.env.GOOGLE_API_KEY;

// get restaurant by their by id
router.get("/:restaurantId", async (req, res)=>{
    const restaurantId = parseInt(req.params.restaurantId,10);

    try{
        const restaurant = await Restaurant.findOne({ where: {id: restaurantId} });

    if (!restaurant) {
      return res.status(404).json({ message: "There are no restaurant found!" });
    }
    return res.status(200).json(restaurant);

    } catch(error){
        console.error(error);
    return res.status(500).json({ 
        message: "An error occured during fetching restaurant" 
    });
    }
});

// delete destaurant from the database
router.delete("/:restaurantId", async (req, res)=>{
    const restaurantId = parseInt(req.params.restaurantId,10);

    try{
        const restaurant = await Restaurant.destroy({ where: {id: restaurantId} });

    if (!restaurant) {
      return res.status(404).json({ message: "There are no restaurant found!" });
    }
    return res.status(200).json({message: "The restaurant is deleted successfully"});

    } catch(error){
        console.error(error);
    return res.status(500).json({ 
        message: "An error occured during fetching restaurant" 
    });
    }
});

// fetch to google map api for the address's lat and lng by axios
async function fetchRestaurantLatLng(address){
    try{
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleApiKey}`);
        if (response){
            const result = response.data.results[0];
            const latitude = result.geometry.location.lat;
            const longitude = result.geometry.location.lng;
            return {latitude: latitude, longitude: longitude};
        }
        else {
            return false;
        }
    } catch(error){
        console.error("Error:", error.message);
    }

}

// post a restauarant, require user login
router.post("/", autheticateUser,async (req, res)=>{

    // find the latitude and longitude of the restaurant based on the address given
    const latLng = await fetchRestaurantLatLng(req.body.address);

    try{
        const restaurant = await Restaurant.create({
            UserId: req.session.userId,
            restaurantName: req.body.restaurantName,
            address: req.body.address,
            latitude: latLng.latitude,
            longitude: latLng.longitude
        });

        return res.status(201).json({
            message: "The restaurant is created successfully",
            restaurant: {
                restaurant: restaurant.restaurantName
            }
        });


    } catch(error){
        console.error(error);
    return res.status(500).json({ 
        message: "An error occured during creating restaurant" // the error include wrong address that can't be fetched by google map api
    });
    }
});

// get all restaurants
router.get("/", async (req, res)=>{
    try{
        const restaurants = await Restaurant.findAll();

    if (restaurants.length === 0) {
      return res.status(404).json({ message: "There are no restaurants!" });
    }

    return res.status(200).json(restaurants);

    } catch(error){
        console.error(error);
    return res.status(500).json({ 
        message: "An error occured during fetching restaurants" 
    });
    }
});



module.exports = router;