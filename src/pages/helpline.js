import React, { useState } from "react";
import "./helpline.css";

const commonQueries = [
  "How do I book a hotel on JharkhandAI?",
  "Which are the top tourist destinations?",
  "How do I cancel or modify my booking?",
  "Is there an AI-powered personalized tour option?",
  "What are the safety guidelines?",
  "How do I contact local guides?",
  "Are there COVID-19 travel restrictions?",
  "How do I explore eco-tourism options?",
  "What support is available for foreign tourists?"
];

const helplines = [
  { service: "Tourist Helpline", number: "1800-123-4567" },
  { service: "Police Emergency", number: "100" },
  { service: "Ambulance", number: "102" },
  { service: "Fire Brigade", number: "101" },
  { service: "Jharkhand Tourism Office", number: "0651-1234567" },
];

export default function Helpline() {
  const [chat, setChat] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const handleSend = () => {
    if (chat.trim().split(/\s+/).length <= 100 && chat.trim().length > 0) {
      setSubmitted(true);
      setChat("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="contactus-main">
      <h2>Contact & Queries</h2>

      <div className="queries-container">
        {commonQueries.map((query, idx) => (
          <div className="query-block" key={idx}>
            {query}
          </div>
        ))}
      </div>

      {/* Floating Chatbox */}
      <div className={`floating-chatbox ${minimized ? "minimized" : ""}`}>
        <button
          className="minimize-btn"
          onClick={() => setMinimized(!minimized)}
          aria-label={minimized ? "Maximize chat box" : "Minimize chat box"}
        >
          {minimized ? "➤" : "⬅"}
        </button>

        {!minimized && (
          <>
            <h4>Ask Us Anything!</h4>
            <textarea
              maxLength={650} // ~100 words
              placeholder="Type your query (up to 100 words)..."
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              rows={3}
            />
            <button onClick={handleSend}>Send</button>
            {submitted && (
              <div className="chatbox-success">
                Query sent! We'll reply soon.
              </div>
            )}
          </>
        )}
      </div>

      {/* Helpline at bottom */}
      <div className="helpline-bottom">
        <h3>Helpline Numbers</h3>
        <div className="helpline-list-horizontal">
          {helplines.map((item, idx) => (
            <div key={idx} className="helpline-bottom-block">
              <span className="service">{item.service}:</span>
              <span className="number">{item.number}</span>
            </div>
          ))}
        </div>
        <div className="helpline-note-horizontal">
          For more information and assistance, contact the nearest tourism
          office or visit the official website of Jharkhand Tourism.
        </div>
      </div>
    </div>
  );
}
