import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">🚗 Vehicle Rental</div>
        <div className="nav-links-container">
          <Link to="/vehicles" className="nav-link">Vehicles</Link>
          <Link to="/booking" className="nav-link">Booking</Link>
          <Link to="/payment" className="nav-link">Payment</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;