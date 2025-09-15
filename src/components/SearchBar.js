import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <h2 className="searchbar-heading">Find your Perfect Stay</h2>
      <div className="searchbar-row">
        <div className="searchbar-field">
          <label>Destination</label>
          <input type="text" placeholder="Where to?" />
        </div>
        <div className="searchbar-field">
          <label>Check-In</label>
          <input type="date" />
        </div>
        <div className="searchbar-field">
          <label>Check-out</label>
          <input type="date" />
        </div>
        <div className="searchbar-field">
          <label>Guests</label>
          <select>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
          </select>
        </div>
        <div className="searchbar-field">
          <label>Language</label>
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="searchbar-search">
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}
