import React from "react";

export default function Bonuses() {
  const bonuses = [
    { 
      title: "Intl. Exam Roadmap", 
      value: "₹2500", 
      desc: "Step-by-step guide for DELF, Goethe & CEFR", // Aligns with Profile's exam focus
      tag: "CAREER READY"
    },
    { 
      title: "Official ISML Certificate", 
      value: "Priceless", 
      desc: "Verified proof of completion for your CV", // Confirmed in Circular
      tag: "CERTIFIED"
    },
    { 
      title: "Speaking & Doubt Sessions", 
      value: "₹1500", 
      desc: "Extra 30 mins/session for live practice", // Confirmed in Circular class duration
      tag: "INTERACTIVE"
    }
  ];

  return (
    <section className="bonuses-section">
      <div className="bonuses-container">
        <div className="bonuses-header fade-up show">
          <h2>🎁 Exclusive Free Bonuses</h2>
          <p>Everything you need to go from "Beginner" to "Certified", included for free.</p>
        </div>

        <div className="bonuses-grid">
          {bonuses.map((item, index) => (
            <div key={index} className="bonus-card fade-up show">
              <div className="bonus-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="value-badge">Value: {item.value}</div>
              <div className="check-icon">✔</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}