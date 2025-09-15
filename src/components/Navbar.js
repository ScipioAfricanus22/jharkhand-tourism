import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">JharkhandAI</span>
      <a href="#">Destinations</a>
      <a href="#">Bookings</a>
      <a href="#">Experiences</a>
      <a href="#">About</a>
      <button className="sign-in-btn">Sign In</button>
    </nav>
  );
}
