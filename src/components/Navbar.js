import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">JharkhandAI</span>
      <a href="/">Home</a>
      <a href="/destinations">Destinations</a>
      <a href="/bookings">Bookings</a>
      <a href="/experiences">Experiences</a>
      <a href="/about">About</a>
      <button className="sign-in-btn">Sign In</button>
    </nav>
  );
}
