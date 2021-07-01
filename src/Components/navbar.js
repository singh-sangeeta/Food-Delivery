import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src="food.jpeg" alt="logo" />
          </div>
          </ul>
          <ul className="nav-list">
          <div className="rightnav">
          <li>Add Restaurant</li>
          <li>Log In</li>
          <li>Sign Up</li>
          </div>
        </ul>
      </nav>
      <div className="para">
        <h1> Food Delivery</h1>
        <div className="search">
          <input type="search" id="search" placeholder="search for the restaurant"/>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
