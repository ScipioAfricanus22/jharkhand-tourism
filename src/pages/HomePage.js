import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./HomePage.css";

const images = [
  "/homepage-images/image1.png",
  "/homepage-images/image2.png",
  "/homepage-images/image3.png",
  "/homepage-images/image4.png",
];

function FloatingTrendingButton() {
  const navigate = useNavigate();

  return (
    <button
      className="trending-float-btn"
      onClick={() => navigate("/trends")}
      aria-label="What's Trending"
    >
      <span className="trending-main-text">What's<br />Trending</span>
      <span className="trending-question">?</span>
    </button>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  const triggerFade = (newIndex) => {
    setFade(false);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      triggerFade((currentIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const prevImage = () => {
    triggerFade(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    triggerFade((currentIndex + 1) % images.length);
  };

  return (
    <div className="homepage-root">
      <FloatingTrendingButton />

      <header className="header">
        <div className="logo">JharkhandAI</div>
        <nav className="nav">
          <Link to="/">Features</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/about">About</Link>
          <Link to="/marketplace">Marketplace</Link>
        </nav>
        <div className="header-buttons">
          <button className="contact-btn">Contact Us</button>
          <button className="bookings-btn" onClick={() => navigate("/bookings")}>Bookings</button>
          <button className="book-btn" onClick={() => navigate("/destinations")}>Book a Visit</button>
          <span className="icon-user" />
        </div>
      </header>

      <section className="hero-section-bg">
        <div
          className={`slideshow-bg ${fade ? "fade-in-bg" : "fade-out-bg"}`}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
        <button className="prev-btn-bg" onClick={prevImage}>
          &#10094;
        </button>
        <button className="next-btn-bg" onClick={nextImage}>
          &#10095;
        </button>
        <div className="hero-content">
          <div className="welcome-content">
            <h1>Explore Jharkhand, Smarter.</h1>
            <p>
              An AI powered tourism site for personalized trips, AI assistance
              and secure experience across Jharkhand.
            </p>
            <div className="welcome-actions">
              <button className="book-btn" onClick={() => navigate("/destinations")}>
                Book a Visit
              </button>
              <button className="plan-btn">Plan a Visit</button>
              <button className="explore-btn" onClick={() => navigate("/destinations")}>
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-overlay">
        <h2>Smart Tourism Features</h2>
        <p>Everything you need for an unforgettable Jharkhand experience</p>
        <div className="features-grid">
          <div className="feature-card">
            <button className="feature-btn">Smart Itineraries</button>
            <br />
            Create, edit and share trip plans with one click; multilingual
            support included
          </div>
          <div className="feature-card">
            <button className="feature-btn">MarketPlace</button>
            <br />
            Book homestays, events and eco-tours curated by locals
          </div>
          <div className="feature-card">
            <button className="feature-btn">VR/AR Preview</button>
            <br />
            See 3D site walkthroughs and plan photo spots ahead
          </div>
          <div className="feature-card">
            <button className="feature-btn">Transit Live</button>
            <br />
            Bus, cab and route updates with saved stops and alerts.
          </div>
          <div className="feature-card">
            <button className="feature-btn">Secure Wallet</button>
            <br />
            Pay vendors safely with verified identities and receipts.
          </div>
          <div className="feature-card">
            <button className="feature-btn">Accessibility</button>
            <br />
            Wheelchair access, step-free routes, facility details for sites.
          </div>
        </div>
      </section>
    </div>
  );
}
