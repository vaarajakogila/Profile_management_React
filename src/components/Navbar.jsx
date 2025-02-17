import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Profile App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
