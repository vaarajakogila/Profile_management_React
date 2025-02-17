import "./assets/styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AdminPanel from "./components/AdminPanel";
import initialProfiles from "./data/profiles";

function App() {
  
  const [profiles, setProfiles] = useState(initialProfiles);
  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/admin" className="nav-link">Admin Dashboard</Link>
      </nav>

      <Routes>
        
        <Route path="/" element={<Home profiles={profiles} setProfiles={setProfiles} />} />
        <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
      </Routes>
    </Router>
  );
}




export default App;
