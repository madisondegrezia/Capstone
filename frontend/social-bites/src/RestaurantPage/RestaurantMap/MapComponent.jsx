import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import throttle from 'lodash/throttle';

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const MapComponent = ({ userLocation, destinationLocation }) => {

  const containerStyle = {
    width: '100%',
    height: '800px'
  };

  const center = {
    lat: (userLocation.lat + destinationLocation.lat) / 2,
    lng: (userLocation.lng + destinationLocation.lng) / 2
  };


  const [selectedMarker, setSelectedMarker] = useState(null);
  const [directions, setDirections] = useState(null);

  const fetchDirections = throttle(() => {
    if (userLocation && destinationLocation) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: userLocation,
          destination: destinationLocation,
          travelMode: 'DRIVING'
        },
        (response, status) => {
          if (status === 'OK') {
            setDirections(response);
          }
        }
      );
    }
  }, 300000); // Throttle to 1 request every 5 minutes

  return (
    <LoadScript googleMapsApiKey={googleApiKey} onLoad={() => fetchDirections()}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
      {userLocation && (
          <MarkerF
            position={userLocation}
          />
        )}
        {destinationLocation && (
          <MarkerF
            position={destinationLocation}
            onClick={() => setSelectedMarker(destinationLocation)}
          />
        )}
        {selectedMarker && (
          <InfoWindowF
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h4>Marker Details</h4>
              <p>Additional information about this location.</p>
            </div>
          </InfoWindowF>
        )}

        {directions && <DirectionsRenderer directions={directions} />}


    </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
