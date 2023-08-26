import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [showLoginFormDropdown, setShowLoginFormDropdown] = useState(false);
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);

  const toggleLoginFormDropdown = () => {
    setShowLoginFormDropdown(!showLoginFormDropdown);
  };

  const toggleSignupDropdown = () => {
    setShowSignupDropdown(!showSignupDropdown);
  };

  const handleLogout = () => {
    alert("Logged out")
    const ee = localStorage.getItem("userEmail");
        console.log("in log out userEmail above remove is  " + ee);
    
    localStorage.removeItem("userEmail");
    localStorage.removeItem("artistEmail");
    const oo = localStorage.getItem("userEmail");
    console.log("in log out userEmail below remove is  " + oo);
    // console.log(userEmail)
  }

  return (
    <nav className="navbar">
      <div className="logo">Talent Hunt</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <button className="dropdown-button" onClick={toggleLoginFormDropdown}>
            LoginForm
          </button>
          {showLoginFormDropdown && (
            <div className="dropdown-content">
              <Link to="/ArtistLogin">ArtistLogin</Link>
              <Link to="/login">UserLogin</Link>
            </div>
          )}
        </li>
        <li>
          <button className="dropdown-button" onClick={toggleSignupDropdown}>
            Signup
          </button>
          {showSignupDropdown && (
            <div className="dropdown-content">
              <Link to="/ArtistSignup">ArtistSignup</Link>
              <Link to="/Signup">UserSignup</Link>
            </div>
          )}
        </li>
        <li><Link to="/BookingPage">BookingPage</Link></li>
        <li >
              <Link to="/login" onClick={handleLogout} className="link">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
