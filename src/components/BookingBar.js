// src/components/BookingBar.js
import React from "react";
import "./BookingBar.css";

export default function BookingBar({
  title,
  fields,
  buttonLabel = "Search"
}) {
  return (
    <div className="booking-bar">
      <h2>{title}</h2>
      <div className="booking-fields">
        {fields.map((field, idx) =>
          field.type === "select" ? (
            <div key={idx} className="field">
              <label>{field.label}</label>
              <select>
                {field.options.map(opt =>
                  <option key={opt}>{opt}</option>
                )}
              </select>
            </div>
          ) : (
            <div key={idx} className="field">
              <label>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} />
            </div>
          )
        )}
        <button className="search-btn">{buttonLabel}</button>
      </div>
    </div>
  );
}
