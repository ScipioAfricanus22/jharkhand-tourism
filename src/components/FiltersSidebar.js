import React from "react";
import "./FiltersSidebar.css";

export default function FiltersSidebar() {
  return (
    <div className="filters-sidebar">
      <h3>Filters</h3>
      <div className="filter-group">
        <div className="filter-label">Price Range</div>
        <label>
          <input type="checkbox" /> ₹0-2,000
        </label>
        <label>
          <input type="checkbox" /> ₹2,000-5,000
        </label>
        <label>
          <input type="checkbox" /> ₹5,000+
        </label>
      </div>
      <div className="filter-group">
        <div className="filter-label">Rating</div>
        <label>
          <input type="checkbox" /> 4.5+ <span style={{color: "#ffc107"}}>★</span>
        </label>
        <label>
          <input type="checkbox" /> 4.0+ <span style={{color: "#ffc107"}}>★</span>
        </label>
      </div>
      <div className="filter-group">
        <div className="filter-label">Amenities</div>
        <label>
          <input type="checkbox" /> Wifi
        </label>
        <label>
          <input type="checkbox" /> Parking
        </label>
        <label>
          <input type="checkbox" /> Restaurant
        </label>
      </div>
    </div>
  );
}
