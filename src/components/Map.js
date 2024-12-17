import React,{useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Google Map container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Default location (e.g., New York City)
const center = {
  lat: 6.465422,
  lng: 3.406448,
};


const Map = () => {
    const [markers, setMarkers] = useState([
        { lat: 6.500000, lng: 3.350000 }, // Marker 1
        { lat: 6.50157, lng: 3.3529  }, // Marker 2
      ]);
    
      // Add a marker on map click
      const handleMapClick = (e) => {
        setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);
      };
    
  return (
    <LoadScript googleMapsApiKey={process.env.API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map