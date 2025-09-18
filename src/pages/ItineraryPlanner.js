import React, { useState } from "react";
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
        icon: "📍"
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
        icon: "🛕"
      }
    ]
  },
  {
    day: 2,
    date: "September 16",
    activities: []
  }
];

export default function ItineraryPlanner() {
  const [selectedDay, setSelectedDay] = useState(1);

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
                    <div className="activity-card" key={i}>
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
          <div className="interactive-map">Interactive map</div>
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
