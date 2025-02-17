import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const profiles = [
  { id: 1, name: "Alice Smith",  address: "Mountain View, CA", coordinates: { lat: 37.42216, lng: -122.08427 } },
];

export default function ProfileDetails() {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === Number(id));
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} width="100" />
      <p>Address: {profile.address}</p>
      

      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap center={profile.coordinates} zoom={12} mapContainerStyle={{ height: "300px", width: "100%" }}>
          <Marker position={profile.coordinates} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
