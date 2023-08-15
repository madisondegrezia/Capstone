import React, { useContext } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import MapComponent from './MapComponent';
import { useParams,useLoaderData } from 'react-router-dom/dist/umd/react-router-dom.development';
import { AuthContext } from '../../contexts/AuthContext';




const MapContainer = () => {

    const params = useParams();
    // take restaurantId as a param for loader
    const restaurant = useLoaderData(params);

    const {location} = useContext(AuthContext);

    const userLocation = { lat:  location.latitude, lng: location.longitude }; // Replace with actual coordinates
  const destinationLocation = { lat: restaurant.latitude, lng: restaurant.longitude }; // Replace with actual coordinates
  return (
    <div className='flex flex-row'>
      <MapComponent
        userLocation={userLocation}
        destinationLocation={destinationLocation}
      />

    </div>
  );
};

export default MapContainer;
