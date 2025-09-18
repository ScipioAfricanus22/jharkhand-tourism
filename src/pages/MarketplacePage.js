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
    image: "/marketplace-images/img1.png",
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
    image: "/marketplace-images/img2.png",
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
    image: "/marketplace-images/img3.png",
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
    image: "/marketplace-images/img4.png",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);

  const backgroundStyle = {
    fontFamily: "'Inter', Arial, sans-serif",
    backgroundImage: "url('/marketplace-images/bckimage.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <div className="marketplace-root" style={backgroundStyle}>
      <header className="market-header">
        <div className="logo">JharkhandTour</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a className="active" href="/marketplace">
            Marketplace
          </a>
          <a href="/destinations">Destinations</a>
          <a href="/events">Events</a>
        </nav>
        <input
          className="search-global"
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="cart-indicator">
          🛒<span className="cart-count">3</span>
        </div>
      </header>

      <section className="market-hero-row">
        <div className="market-hero-box">
          <h1>Discover Authentic Jharkhand</h1>
          <p>
            From Handcrafted goodies to beautiful artisanship, explore the best
            local culture and craftsmanship
          </p>
          <button className="explore-btn-green">Start Exploring</button>
        </div>
        <div className="market-category-box">
          <div className="market-category-grid">
            {categories.map((cat) => (
              <div className="market-category" key={cat.name}>
                <div className="market-category-main">{cat.name}</div>
                <div className="market-category-sub">{cat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="market-body">
        <aside className="market-filters">
          <h3>Filters</h3>
          <div>
            <input type="checkbox" id="handicrafts" />{" "}
            <label htmlFor="handicrafts">Handicrafts</label>
          </div>
          <div>
            <input type="checkbox" id="tours" /> <label htmlFor="tours">Tours</label>
          </div>
          <div>
            <input type="checkbox" id="homestays" />{" "}
            <label htmlFor="homestays">Homestays</label>
          </div>
          <label htmlFor="price">Price Range</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={price}
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>Rating</div>
          <div>
            <input type="radio" name="rating" id="r5" />
            <label htmlFor="r5">★★★★★ 5 stars</label>
          </div>
          <div>
            <input type="radio" name="rating" id="r4" />
            <label htmlFor="r4">★★★★☆ 4+ stars</label>
          </div>
          <div>
            <input type="radio" name="rating" id="r3" />
            <label htmlFor="r3">★★★☆☆ 3+ stars</label>
          </div>
          <div>
            <label htmlFor="district">District</label>
            <select id="district">
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
  <img src={p.image} alt={p.name} className="prod-image" />
  <div className="prod-main">
    <strong>{p.name}</strong>
    <br />
    {p.description}
    <br />
    <span style={{ fontSize: "0.93em", color: "#353535" }}>
      {p.vendor}
    </span>
  </div>
  {/* ...rest of the card */}
</div>

          ))}
        </div>
      </section>
    </div>
  );
}
