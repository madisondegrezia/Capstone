import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useLoaderData } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const MapContainer = () => {
    const params = useParams();
    const {location} = useContext(AuthContext);

    const map = useLoaderData(params, location);
  // Coordinates for the marker
  const markerPosition = { lat: 37.7749, lng: -122.4194 };
  console.log(location)

  return (
    <h1>hello</h1>
  );
};

export default MapContainer;
