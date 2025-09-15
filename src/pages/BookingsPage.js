import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FeaturedDestinations from "../components/FeaturedDestinations";
import FiltersSidebar from "../components/FiltersSidebar";
import HotelCard from "../components/HotelCard";
import "./BookingsPage.css";

const hotels = [
  {
    name: "Mountain View Resort",
    types: ["Hill Station", "Wifi"],
    rating: 4.5,
    price: 3500,
    available: true,
  },
  {
    name: "WaterFall Lodge",
    types: ["WaterFall", "Restaurant"],
    rating: 4.3,
    price: 2800,
    available: true,
  },
];

export default function BookingsPage() {
  return (
    <div className="bookings-root">
      <Navbar />
      <div className="page-content">
        <SearchBar />
        <h2 className="section-title">Featured Destinations</h2>
        <FeaturedDestinations />
        <div className="main-section">
          {/* Single instance of FiltersSidebar */}
          <FiltersSidebar />

          {/* Hotel cards grid */}
          <div className="hotel-grid">
            {hotels.map((hotel, idx) => (
              <HotelCard key={idx} {...hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
