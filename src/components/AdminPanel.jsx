import { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import PropTypes from "prop-types";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  
  useEffect(() => {
    const storedProfiles = localStorage.getItem("profiles");
    if (storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));  
    }
  }, [setProfiles]);  

 
  const addOrUpdateProfile = (profile) => {
    let updatedProfiles;
    if (profile.id) {
      updatedProfiles = profiles.map((p) => (p.id === profile.id ? profile : p));
    } else {
      updatedProfiles = [...profiles, { ...profile, id: Date.now() }];
    }
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); 
    setSelectedProfile(null);
  };

  
  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); 
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <ProfileForm onSave={addOrUpdateProfile} selectedProfile={selectedProfile} />
      <h3>All Profiles</h3>
      <ul className="admin-list">
        {profiles.length === 0 ? (
          <p>No profiles added yet.</p>
        ) : (
          profiles.map((profile) => (
            <li key={profile.id} className="admin-profile-item">
              <img src={profile.image} alt={profile.name} className="profile-icon" />
              <div>
                <strong>{profile.name}</strong>
                <p>{profile.description}</p>
              </div>
              <button onClick={() => setSelectedProfile(profile)}>Edit</button>
              <button onClick={() => deleteProfile(profile.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};


AdminPanel.propTypes = {
  profiles: PropTypes.array.isRequired,
  setProfiles: PropTypes.func.isRequired,
};

export default AdminPanel;
