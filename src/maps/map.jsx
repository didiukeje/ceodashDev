import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '380px',
  height: '180px' 
};

const center = {
  lat:  7.33333,
  lng: 8.75,
};

// Define marker positions
const markers = [
  { id: 1, position: { lat: 7.33333, lng: 8.75 } }, 
  { id: 2, position: { lat: 7.35, lng: 8.80 } },    
  { id: 3, position: { lat: 7.33, lng: 9.00 } },   
  { id: 3, position: { lat: 7.35, lng: 8.83 } },   
  { id: 3, position: { lat: 7.39, lng: 8.90 } },   
  { id: 3, position: { lat: 7.31, lng: 8.60 } },   
];

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAKdrTGAZX48oj9p7Z9hmyX1kCMmz8XDF4" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Render markers */}
        {markers.map(marker => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;


