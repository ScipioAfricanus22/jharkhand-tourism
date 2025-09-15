import React from "react";
import "./FeaturedDestinations.css";

const destinations = [
  {
    name: "Jubilee Park",
    type: "Park",
    image: "/destination images/park.jpg",
  },
  {
    name: "Waterfall",
    type: "WaterFall",
    image: "/destination images/waterfall.jpg",
  },
  {
    name: "Wildlife Sanctuary",
    type: "Wildlife",
    image: "/destination images/wildlife.png",
  },
  {
    name: "Temple",
    type: "Temple",
    image: "/destination images/temple.jpg",
  },
];

export default function FeaturedDestinations() {
  return (
    <div className="featured-destinations-grid">
      {destinations.map((d) => (
        <div className="destination-card" key={d.name}>
          <img src={d.image} alt={d.name} className="destination-image" />
          <div className="destination-label">{d.type}</div>
          <button className="details-btn">View Details</button>
        </div>
      ))}
    </div>
  );
}
