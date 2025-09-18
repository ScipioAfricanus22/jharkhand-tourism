import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./HomePage.css";

const images = [
  "/homepage-images/img1.png",
  "/homepage-images/img2.png",
  "/homepage-images/img3.png",
  "/homepage-images/img4.png",
];

function FloatingTrendingButton() {
  const navigate = useNavigate();

  return (
    <button
      className="trending-float-button"
      onClick={() => navigate("/trends")}
      aria-label="What's Trending"
    >
      <span className="trending-main-text">
        What's
        <br />
        Trending
      </span>
      <span className="trending-question">?</span>
    </button>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [fadeState, setFadeState] = useState("fade-in"); // 'fade-in' or 'fade-out'

  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const triggerFade = useCallback(
    (newIndex) => {
      setFadeState("fade-out");
      setPrevIndex(currentIndex);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(newIndex);
        setFadeState("fade-in");
      }, 700); // Should match CSS transition duration
    },
    [currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      triggerFade((currentIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, triggerFade]);

  // Hide dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

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
        <div className="logo">JharkandTour</div>
        <nav className="nav">
          <Link to="/">Features</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/plan-visit">Itinerary</Link>
          <Link to="/marketplace">Marketplace</Link>
        </nav>
        <div className="header-buttons">
          <button className="contact-btn" onClick={() => navigate("/helpline")}>
            Contact Us
          </button>
          <button className="bookings-btn" onClick={() => navigate("/bookings")}>
            Bookings
          </button>
          <div className="dropdown-wrapper" ref={dropdownRef}>
            <button
              className="signin-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Sign In
            </button>
            {showDropdown && (
              <div className="signin-dropdown">
                <button onClick={() => window.open("/sign-in?type=vendor", "_blank")}>
                  Vendor
                </button>
                <button onClick={() => window.open("/sign-in?type=tourist", "_blank")}>
                  Tourist
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="hero-section-bg">
        {/* Previous image fading out */}
        {prevIndex !== null && (
          <div
            className="slideshow-bg fade-out"
            style={{ backgroundImage: `url(${images[prevIndex]})` }}
          />
        )}

        {/* Current image fading in */}
        <div
          className={`slideshow-bg ${fadeState === "fade-in" ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />

        {/* Navigation buttons */}
        <button className="prev-btn" onClick={prevImage}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextImage}>
          &#10095;
        </button>

        {/* Hero content */}
        <div className="hero-content">
          <div className="welcome-content">
            <h1>Explore Jharkand, Smarter.</h1>
            <p>
              An AI powered tourism site for personalized trips, AI assistance and secure experience across Jharkhand.
            </p>
            <div className="welcome-actions">
              <button className="book-btn" onClick={() => navigate("/bookings")}>Book a Visit</button>
              <button className="plan-btn" onClick={() => navigate("/plan-visit")}>Plan Itinerarry</button>
              <button className="explore-btn" onClick={() => navigate("/destinations")}>Explore Destinations</button>
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
            Create, edit and share trip plans with one click; multilingual support included
          </div>
          <div className="feature-card">
            <button className="feature-btn">Marketplace</button>
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
            Bus, cab and route updates with saved stops and alerts
          </div>
          <div className="feature-card">
            <button className="feature-btn">Secure Wallet</button>
            <br />
            Pay vendors safely with verified identities and receipts
          </div>
          <div className="feature-card">
            <button className="feature-btn">Accessibility</button>
            <br />
            Wheelchair access, step-free routes, facility details for sites
          </div>
        </div>
      </section>

      <section className="features-section-overlay">
        <h2>What's Trending?</h2>
        
      </section>
      
    </div>
  );
}