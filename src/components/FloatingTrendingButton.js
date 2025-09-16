import React from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingTrendingButton.css";

export default function FloatingTrendingButton() {
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
