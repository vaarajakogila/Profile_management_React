import PropTypes from "prop-types";

const ProfileList = ({ profiles, onSelect }) => {
  return (
    <ul className="profile-list">
      {profiles.map((profile) => (
        <li key={profile.id} className="profile-item">
          <img src={profile.image} alt={profile.name} className="profile-icon" />
          <div className="profile-info">
            <strong>{profile.name}</strong>
            <p>{profile.description}</p>
            <button onClick={() => onSelect(profile)}>View on Map</button>
          </div>
        </li>
      ))}
    </ul>
  );
};


ProfileList.propTypes = {
  profiles: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ProfileList;
