import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FeaturedDestinations from "../components/FeaturedDestinations";
import FiltersSidebar from "../components/FiltersSidebar";
import HotelCard from "../components/HotelCard";
import BookingBar from "../components/BookingBar";
import "./BookingsPage.css";

const hotels = [
  {
    name: "Mountain View Resort",
    types: ["Hill Station", "Wifi"],
    rating: 4.5,
    price: 3500,
    available: true,
    image: "/hotel-images/img1.png",
  },
  {
    name: "WaterFall Lodge",
    types: ["WaterFall", "Restaurant"],
    rating: 4.3,
    price: 2800,
    available: true,
    image: "/hotel-images/img2.png",
  },
  {
    name: "Hill Station Stay",
    types: ["Hill Station", "Wifi"],
    rating: 4.1,
    price: 3800,
    available: true,
    image: "/hotel-images/img3.png",
  },
  {
    name: "Hot Spring Lodge",
    types: ["Hot Spring", "Catering"],
    rating: 4.8,
    price: 4200,
    available: true,
    image: "/hotel-images/img4.png",
  },
];

// Image path relative to public folder
const backgroundUrl1 = "../bookingsbck.png";

export default function BookingsPage() {
  const rootStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundUrl1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    fontFamily: "'Inter', Arial, sans-serif",
    backgroundColor: "transparent",
  };

  return (
    <div className="bookings-root" style={rootStyle}>
      <Navbar />
      {/* Wrap page-content inside an overlay div for white background with opacity */}
      <div className="page-overlay">
        <div className="page-content">
          {/* Stay Booking Bar */}
          <BookingBar
            title="Find your Perfect Stay"
            fields={[
              { label: "Destination", type: "text", placeholder: "Where to?" },
              { label: "Check-In", type: "date", placeholder: "dd-mm-yyyy" },
              { label: "Check-out", type: "date", placeholder: "dd-mm-yyyy" },
              {
                label: "Guests",
                type: "select",
                options: ["1 guest", "2 guests", "3 guests"],
              },
              {
                label: "Language",
                type: "select",
                options: ["English", "Hindi"],
              },
            ]}
          />
          {/* Bus Booking Bar */}
          <BookingBar
            title="Bus Bookings"
            fields={[
              { label: "From", type: "text", placeholder: "Start location" },
              { label: "To", type: "text", placeholder: "End location" },
              { label: "Date", type: "date", placeholder: "dd-mm-yyyy" },
              { label: "Time", type: "time", placeholder: "HH:MM" },
              {
                label: "Seats",
                type: "select",
                options: ["1 seat", "2 seats", "3 seats+"],
              },
            ]}
          />
          {/* Cab Booking Bar */}
          <BookingBar
            title="Cab Bookings"
            fields={[
              { label: "Pickup", type: "text", placeholder: "Pickup location" },
              { label: "Drop", type: "text", placeholder: "Drop location" },
              { label: "Date", type: "date", placeholder: "dd-mm-yyyy" },
              { label: "Time", type: "time", placeholder: "HH:MM" },
              {
                label: "Type",
                type: "select",
                options: ["Sedan", "SUV", "Hatchback"],
              },
            ]}
          />
          <h2 className="section-title">Featured Destinations</h2>
          <FeaturedDestinations />
          <div className="main-section">
            <FiltersSidebar />
            <div className="hotel-grid">
              {hotels.map((hotel, idx) => (
                <HotelCard key={idx} {...hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
