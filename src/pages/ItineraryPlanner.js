import React, { useState, useEffect, useRef, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./ItineraryPlanner.css";


const suggestions = [
  {
    name: "Belta National Park",
    type: "Wildlife Sanctuary",
    best: "Best 6-10 AM",
    accessible: true,
    food: false,
    icon: "🦒"
  },
  {
    name: "Hundru Falls",
    type: "High Waterfall",
    best: "Best 10-4 PM",
    accessible: false,
    food: false,
    icon: "💧"
  },
  {
    name: "Thai House",
    type: "Restaurant",
    best: "Best 4-8 PM",
    accessible: true,
    food: true,
    icon: "🍜"
  }
];

const timeline = [
  {
    day: 1,
    date: "September 15",
    activities: [
      {
        time: "9:00",
        type: "Place",
        name: "Ranchi Hill Station",
        slot: "9:00-10:00",
        icon: "📍",
        lat: 23.3700,
        lng: 85.3250
      },
      {
        time: "10:00",
        type: "Travel",
        mode: "20 Minutes Drive",
        slot: "",
        icon: "🚗"
      },
      {
        time: "11:00",
        type: "Meal",
        name: "Local Restaurant",
        slot: "10:30-11:30",
        icon: "🍽️"
      },
      {
        time: "12:00",
        type: "Travel",
        mode: "30 Minutes Walk",
        slot: "",
        icon: "🚶"
      },
      {
        time: "13:00",
        type: "Place",
        name: "Jagannath Temple",
        slot: "12:00-13:00",
        icon: "🛕",
        lat: 23.3105,
        lng: 85.2517
      }
    ]
  },
  {
    day: 2,
    date: "September 16",
    activities: []
  }
];

// Leaflet marker icon setup
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function FlyToMarker({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView([position.lat, position.lng], 14, { animate: true });
    }
  }, [position, map]);
  return null;
}

export default function ItineraryPlanner() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);


  return (
    <div className="itinerary-root">
      <header className="itinerary-header">
        <div className="itinerary-logo">JharkhandTour</div>
        <nav className="itinerary-nav">
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/marketplace">Marketplace</a>
          <a href="/itineraries" className="active">Iteneries</a>
        </nav>
        <div className="itinerary-filters">
          <button className="date-filter">📅 Sep 15-24, 2025</button>
          <button className="traveller-filter">👥 2 Travellers</button>
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </header>
      <div className="itinerary-content">
        <aside className="smart-suggestions">
          <h3>Smart Suggestions</h3>
          {suggestions.map((s, i) => (
            <div className="suggestion-card" key={i}>
              <div>
                <span>{s.icon}</span>
                <span>{s.name}</span>
                <button className="add-btn">Add</button>
              </div>
              <div className="type-row">{s.type}</div>
              <div className="best-row">{s.best}{s.accessible && <span title="Accessible"> ♿ </span>}{s.food && <span title="Food"> 🍽️</span>}</div>
            </div>
          ))}
          <div className="quick-actions">
            <span>Save trip</span>
            <span>Duplicate Trip</span>
          </div>
        </aside>
        <main className="timeline-main">
          <h3>Day-by-Day Timeline</h3>
          <button className="add-day-btn">+ Add day</button>
          {timeline.map(day => (
            <section className="day-section" key={day.day}>
              <div className="day-title">
                Day {day.day}, {day.date}
                <span className="hours-planned">{day.activities.length ? `${day.activities.length} Hours planned` : "0 Hours planned"}</span>
              </div>
              <div className="activities-list">
                {day.activities.length === 0 
                  ? <div className="empty-activity">+ Drag Activities or Click to add</div>
                  : day.activities.map((act, i) => (
                    <div className="activity-card" key={i}
                         onClick={() => act.lat && act.lng ? setSelectedLocation({ lat: act.lat, lng: act.lng, name: act.name }) : null}
                         style={{ cursor: act.lat && act.lng ? "pointer" : "default" }}>
                      <span className="activity-icon">{act.icon}</span>
                      <span className="activity-name">{act.name || act.mode}</span>
                      <span className="activity-time">{act.slot}</span>
                    </div>
                ))}
              </div>
            </section>
          ))}
        </main>
        <aside className="route-preview">
          <h4>Route Preview</h4>
          <select>
            <option>Day-1</option>
            <option>Day-2</option>
          </select>
          <div className="interactive-map">
            <MapContainer
              center={selectedLocation ? [selectedLocation.lat, selectedLocation.lng] : [23.3656, 85.3344]}
              zoom={selectedLocation ? 14 : 7}
              style={{ height: "188px", borderRadius: "8px", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {selectedLocation && (
                <>
                  <FlyToMarker position={selectedLocation} />
                  <Marker position={[selectedLocation.lat, selectedLocation.lng]} icon={defaultIcon}>
                    <Popup>{selectedLocation.name}</Popup>
                  </Marker>
                </>
              )}
            </MapContainer>
          </div>
        </aside>
        <aside className="activity-library">
          <h4>Activity Library</h4>
          <div className="activity-types">
            <button>Place</button>
            <button>Meal</button>
            <button>Travel</button>
            <button>Break</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
