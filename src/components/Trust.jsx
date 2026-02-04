import React from "react";

export default function Trust() {
  const struggleItems = [
    "Don't know where to start",
    "Grammar feels like math equations",
    "Fear of speaking in public",
    "Forgetting words during interviews",
    "Zero feedback on mistakes"
  ];

  const successItems = [
    "Structured Step-by-Step Roadmap",
    "Live Speaking Practice",
    "Confidence to crack interviews",
    "Vocabulary that sticks naturally",
    "Personalized Mentor Feedback"
  ];

  return (
    <section id="programs" className="trust-section">
      <div className="trust-container">
        <h2 className="section-title">Is This Your Current Reality?</h2>
        <p className="section-subtitle">Most students get stuck in the "Tutorial Loop." We break that.</p>

        <div className="comparison-grid">
          
          {/* LEFT: THE STRUGGLE */}
          <div className="compare-card struggle fade-up show">
            <div className="card-header">
              <div className="icon-badge red">🛑</div>
              <h3>The "Self-Learning" Trap</h3>
            </div>
            <ul>
              {struggleItems.map((item, index) => (
                <li key={index}>
                  <span className="list-icon cross">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER: ARROW */}
          <div className="connector">
            <div className="arrow-circle">➔</div>
          </div>

          {/* RIGHT: THE SOLUTION */}
          <div className="compare-card success fade-up show">
            <div className="card-header">
              <div className="icon-badge blue">🚀</div>
              <h3>The ISML Advantage</h3>
            </div>
            <ul>
              {successItems.map((item, index) => (
                <li key={index}>
                  <span className="list-icon check">✔</span>
                  {/* Parsing bold text if needed, or just rendering string */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}