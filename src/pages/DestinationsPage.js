import React, { useState } from "react";
import MapPanel from "../components/MapPanel";
import "./DestinationsPage.css";
import backgroundImage from "../background.png";

const sampleDestinations = [
  {
    name: "Dassam Falls",
    district: "Ranchi District",
    type: "Waterfall",
    tags: ["Waterfall", "Nature"],
    photo: "/destinations-page images/Dassam.png",
  },
  {
    name: "Baba Badhyanath Temple",
    district: "Deoghar District",
    type: "Temple",
    tags: ["Sacred", "Heritage"],
    photo: "/destinations-page images/BabaBaidyanath.png",
  },
  {
    name: "Dalma Hills",
    district: "Jamshedpur District",
    type: "Waterfall",
    tags: ["Hill Station", "Scenic"],
    photo: "/destinations-page images/Dalma.png",
  },
];

const categories = [
  "All Destinations", "Hill Stations", "Waterfalls", "Sacred Sites",
  "Heritage", "Eco-Tours", "Cultural"
];

const filters = {
  categories: ["All Categories", "Hill Stations", "Waterfalls", "Temples", "Eco-Tours"],
  districts: ["All Districts", "Ranchi", "Jamshedpur", "Deoghar"],
  ratings: ["Any Rating", "4.5+", "4.0+", "3.5+"],
};

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [selectedDest, setSelectedDest] = useState(null);

  const rootStyle = {
  minHeight: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

  

  return (
    <div style={rootStyle} className="destinations-root">
      <header className="dest-header">
        <div className="logo">JharkhandTour</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/destinations" className="active">Destinations</a>
          <a href="/marketplace">Marketplace</a>
          <a href="/bookings">Bookings</a>
        </nav>
        <input
          className="search-global"
          type="text"
          placeholder="Search"
          aria-label="Search Destinations"
        />
        <span className="icon-user" />
      </header>

      <section className="hero-box">
        <h1>Discover Jharkhand’s Hidden Gems</h1>
        <p>
          From Cascading Waterfalls to sacred temples, explore the diverse landscape and rich heritage of Jharkhand through our curated destinations.
        </p>
        <div className="category-pills">
          {categories.map(category => (
            <button key={category} className="cat-pill">{category}</button>
          ))}
        </div>
      </section>

      <section className="filter-box-section">
        <div className="filter-box">
          <select aria-label="Filter by Category">
            {filters.categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <select aria-label="Filter by District">
            {filters.districts.map(dis => (
              <option key={dis}>{dis}</option>
            ))}
          </select>
          <select aria-label="Filter by Ratings">
            {filters.ratings.map(rat => (
              <option key={rat}>{rat}</option>
            ))}
          </select>
          <button aria-label="Accessible Filter">Accessible</button>
          <button aria-label="AR/VR Available Filter">AR/VR available</button>
          <button>Clear all</button>
          <select aria-label="Sort Destinations">
            <option>Sort by Popularity</option>
            <option>Sort by Rating</option>
          </select>
        </div>
      </section>

      <section className="main-section">
        <div className="dest-list-panel">
    <div className="dest-list">
      <div className="avail-count black-box">{sampleDestinations.length} destinations available</div>
      {sampleDestinations.map((dest, idx) => (
        <div key={idx} className="dest-card">
              <div className="card-media">
                <img
                  src={dest.photo || "/default.jpg"}
                  alt={dest.name}
                  className="card-img"
                />
              </div>
              <div className="card-info">
                <div className="dest-name">{dest.name}</div>
                <div className="dest-district">{dest.district}</div>
                <div className="dest-tags">
                  {dest.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <button
                className="view-btn"
                aria-label={`View details of ${dest.name}`}
                onClick={() => setSelectedDest(dest)}
              >
                View
              </button>
            </div>
            
          ))}
        </div>
        </div>

        <div className="map-panel" style={{marginTop: "44px"}}>
          <input
            className="search-destination"
            type="text"
            placeholder="Search Destination"
            aria-label="Search Destination"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="map-view">
            <MapPanel selectedDest={selectedDest} />
            <div className="map-controls">
              <button aria-label="Zoom out" className="map-zoom">−</button>
              <button aria-label="Zoom in" className="map-zoom">+</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
