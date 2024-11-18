import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',    // 100% width of the parent container
  height: '50vh',   // 50% of the viewport height
  border: '2px solid #ccc',  // Box border with a light gray color
  borderRadius: '8px',  // Optional: rounded corners for the box
  padding: '10px',  // Optional: Padding inside the box
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Optional: subtle shadow for depth
  maxWidth: '1280px', // Max width to prevent stretching too much on large screens
  margin: '0 auto',   // Center horizontally
};

const center = {
  lat: 7.33333,
  lng: 8.75,
};

// Define marker positions
const markers = [
  { id: 1, position: { lat: 7.33333, lng: 8.75 } },
  { id: 2, position: { lat: 7.35, lng: 8.80 } },
  { id: 3, position: { lat: 7.33, lng: 9.00 } },
  { id: 4, position: { lat: 7.35, lng: 8.83 } },
  { id: 5, position: { lat: 7.39, lng: 8.90 } },
  { id: 6, position: { lat: 7.31, lng: 8.60 } },
];

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAKdrTGAZX48oj9p7Z9hmyX1kCMmz8XDF4" // Replace with your API key
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
      </div>
    </LoadScript>
  );
};

export default Map;
