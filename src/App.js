import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingsPage from "./pages/BookingsPage";
import TrendsPage from "./pages/TrendsPage"; // create if not exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
