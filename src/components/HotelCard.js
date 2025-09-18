import React from 'react';
import './HotelCard.css'; // create this CSS file with styles below

export default function HotelCard({ name, types, rating, price, available, image }) {
  return (
    <div className="hotel-card">
      <div className="hotel-status">{available ? "Available" : "Booked"}</div>
      <div className="hotel-name">{name}</div>
      <div className="hotel-rating">★ {rating}</div>
      <div className="hotel-price">₹ {price} /night</div>
      <img src={image} alt={name} className="hotel-image" />
      <div className="hotel-types">{types.join(", ")}</div>
      <button className="hotel-reserve-btn">Reserve</button>
    </div>
  );
}
