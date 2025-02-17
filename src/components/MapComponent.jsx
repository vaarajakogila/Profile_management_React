import PropTypes from "prop-types";

const MapComponent = ({ location }) => {
  
  const mapLocation = location || { lat: 0, lng: 0 };  

  return (
    <div className="map-container">
      <iframe
        title="Profile Location"
        width="50%"
        height="300"
        src={`https://www.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}&output=embed`}
        allowFullScreen
      ></iframe>
    </div>
  );
};


MapComponent.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

export default MapComponent;
