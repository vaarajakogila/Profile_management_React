import ProfileList from "../components/ProfileList";
import MapComponent from "../components/MapComponent";
import PropTypes from "prop-types";
import { useState } from "react";

const Home = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const defaultLocation = { lat: 0, lng: 0 };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Profile Directory</h1>
      
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <div className="main-content">
        
        <ProfileList profiles={filteredProfiles} onSelect={setSelectedProfile} />
        <MapComponent location={selectedProfile?.location || defaultLocation} />
      </div>
    </div>
  );
};


Home.propTypes = {
  profiles: PropTypes.array.isRequired,
};

export default Home;
