import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import MarketplacePage from "./pages/MarketplacePage";
import BookingsPage from "./pages/BookingsPage";
import TrendsPage from "./pages/TrendsPage";
import Helpline from "./pages/helpline";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
