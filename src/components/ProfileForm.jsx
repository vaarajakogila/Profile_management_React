import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProfileForm = ({ onSave, selectedProfile }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "", 
    lat: "",
    lng: "",
  });

  useEffect(() => {
    if (selectedProfile) {
      setFormData({
        name: selectedProfile.name,
        image: selectedProfile.image,
        description: selectedProfile.description, 
        lat: selectedProfile.location.lat,
        lng: selectedProfile.location.lng,
      });
    }
  }, [selectedProfile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...selectedProfile,
      name: formData.name,
      image: formData.image,
      description: formData.description, 
      location: { lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) },
    });
    setFormData({ name: "", image: "", description: "", lat: "", lng: "" }); 
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Latitude"
        value={formData.lat}
        onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        value={formData.lng}
        onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
        required
      />
      <button type="submit">{selectedProfile ? "Update Profile" : "Add Profile"}</button>
    </form>
  );
};


ProfileForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedProfile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string, 
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }),
};

export default ProfileForm;
