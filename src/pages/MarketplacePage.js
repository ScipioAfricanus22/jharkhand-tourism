import React, { useState } from "react";
import "./MarketplacePage.css";

const categories = [
  { name: "Handicrafts", sub: "Traditional crafts" },
  { name: "Food", sub: "Local Cuisine" },
  { name: "Homestays", sub: "Local Housing Stays" },
  { name: "Eco-Tours", sub: "Nature adventures" },
];

const products = [
  {
    id: 1,
    type: "Handicrafts",
    verified: true,
    name: "Handmade Pottery",
    description: "Clay Pottery Set",
    vendor: "By random name",
    price: 800,
    rating: 4.5,
    cta: "Add to Cart",
  },
  {
    id: 2,
    type: "Homestays",
    verified: true,
    name: "Tribal Homestay",
    description: "Village Homestay",
    vendor: "By Local Housing",
    price: 1300,
    rating: 4.6,
    nightly: true,
    cta: "Book now",
  },
  {
    id: 3,
    type: "Food",
    verified: true,
    name: "Local Cuisine",
    description: "Traditional mix",
    vendor: "By Local Chef",
    price: 450,
    rating: 4.2,
    cta: "Add to Cart",
  },
  {
    id: 4,
    type: "Events",
    verified: true,
    name: "Cultural Event",
    description: "Folk Dance Shop",
    vendor: "By Culture Center",
    price: 750,
    rating: 4.4,
    cta: "Add to Cart",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="marketplace-root">
      <header className="market-header">
        <div className="logo">JharkhandAI</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a className="active" href="/marketplace">Marketplace</a>
          <a href="/destinations">Destinations</a>
          <a href="/events">Events</a>
        </nav>
        <input
          className="search-global"
          type="text"
          placeholder="Search products"
        />
        <div className="cart-indicator">🛒<span className="cart-count">3</span></div>
      </header>

      <section className="market-hero">
        <h1>Discover Authentic Jharkhand</h1>
        <p>
          From Handcrafted goodies to beautiful artisanship, explore the best local culture and craftsmanship
        </p>
        <button className="explore-btn-green">Start Exploring</button>
        <div className="market-category-row">
          {categories.map((cat) => (
            <div className="market-category" key={cat.name}>
              <div className="market-category-main">{cat.name}</div>
              <div className="market-category-sub">{cat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="market-body">
        <aside className="market-filters">
          <h3>Filters</h3>
          <div><input type="checkbox" /> Handicrafts</div>
          <div><input type="checkbox" /> Tours</div>
          <div><input type="checkbox" /> Homestays</div>
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>Rating</div>
          <div>
            <input type="radio" name="rating" /> ★★★★★ 5 stars
          </div>
          <div>
            <input type="radio" name="rating" /> ★★★★☆ 4+ stars
          </div>
          <div>
            <input type="radio" name="rating" /> ★★★☆☆ 3+ stars
          </div>
          <div>
            <label>District</label>
            <select>
              <option>All districts</option>
              <option>Ranchi</option>
              <option>Jamshedpur</option>
              <option>Deoghar</option>
            </select>
          </div>
        </aside>
        <div className="market-products">
          {products.map((p) => (
            <div key={p.id} className="market-prod-card">
              <div className="prod-verified">{p.verified && "Verified"}</div>
              <div className="prod-main">
                <strong>{p.name}</strong>
                <br />
                {p.description}
                <br />
                <span style={{ fontSize: "0.93em", color: "#353535" }}>
                  {p.vendor}
                </span>
              </div>
              <div className="prod-price">
                <span>
                  {p.nightly ? `₹${p.price}/night` : `₹${p.price}`}
                </span>{" "}
                <span className="prod-rating">⭐ {p.rating}</span>
              </div>
              <div className="prod-actions-row">
                <button className="market-action-green">{p.cta}</button>
                <button className="market-action-view">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
