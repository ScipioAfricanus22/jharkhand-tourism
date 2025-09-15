import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingsPage from "./pages/BookingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
