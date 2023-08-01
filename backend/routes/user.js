const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/location", async (req,res)=>{
    try{
        const userLocation = {
            latitude: req.body.latitude,
            longtitude: req.body.longtitude
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

router.get("/location", async (req,res)=>{
    if (req.session.userLocation) {
        return res.status(200).json({
            userLocation: {
                latitude: req.session.userLocation.latitude,
                longtitude: req.session.userLocation.longtitude
            }
        });
    }
    else{
        return res.status(401).json({user: null});
    }
});

module.exports = router;