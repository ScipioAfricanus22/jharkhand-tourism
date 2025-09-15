import React from "react";
import "./HotelCard.css";

export default function HotelCard({ name, types, rating, price, available }) {
  return (
    <div className="hotel-card">
      {available && <div className="card-header">Available</div>}
      <div className="card-title">{name}</div>
      <div className="card-meta">
        {types.map((type, idx) => (
          <span key={idx} className="card-type-tag">{type}</span>
        ))}
        <span className="card-rating">&#9733; {rating.toFixed(1)}</span>
      </div>
      <div className="card-footer">
        <span className="price">₹ {price.toLocaleString()} /night</span>
        <button className="reserve-btn">Reserve</button>
      </div>
    </div>
  );
}
