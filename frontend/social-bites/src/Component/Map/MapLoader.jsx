import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';


export default async function MapLoader(params, location){
    const restaurant = await fetch(`/api/restaurant/${params.params.restaurantId}`);
    const restaurantJson= await restaurant.json()
    const restaurantAddress = restaurantJson.address;

    console.log(location)

    return restaurantAddress;
}
