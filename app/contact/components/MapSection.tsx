import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -33.918861, // Latitude for Cape Town
  lng: 18.4233,    // Longitude for Cape Town
};

const MapSection = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Load API key from .env.local
  });

  return (
    <div className="max-w mx-auto bg-gray-100 border-gray-900 rounded">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <p>Loading Map...</p>
      )}
    </div>
  );
};

export default React.memo(MapSection);
