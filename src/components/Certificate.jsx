import React from "react";

export default function Certificate() {
  return (
    <section className="certificate-section">
      <div className="cert-grid">
        {/* Left: Benefits Checklist */}
        <div className="cert-content fade-up show">
          <div className="badge-pill" style={{background: "#e0f2fe", color: "#0284c7"}}>
             📜 Official Documentation
          </div>
          
          <h2>Validating Your 3-Month Journey</h2>
          <p className="cert-subtext">
            Upon successful completion of the <strong>Indian School for Modern Languages Foundation Program</strong>, 
            you will be awarded a Certificate of Completion. This document validates your 
            foundational proficiency in French, German, or Japanese.
          </p>
          
          <ul className="cert-benefits">
            <li>
              <span className="icon">🏆</span>
              <div>
                <strong>Internationally Aligned</strong>
                <p>Curriculum structured around DELF (A1), Goethe (A1), and CEFR standards.</p>
              </div>
            </li>
            <li>
              <span className="icon">💼</span>
              <div>
                <strong>Career Edge</strong>
                <p>Enhance your CV for higher education, MNC job placements, and immigration opportunities.</p>
              </div>
            </li>
            <li>
              <span className="icon">✅</span>
              <div>
                <strong>Verified Achievement</strong>
                <p>Proof of your commitment to mastering 21st-century linguistic skills.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: The Certificate Image with "Foil" effect */}
        <div className="cert-visual fade-up show">
          <div className="cert-glow"></div>
          <div className="cert-frame">
            <img
              src="/certificate-sample.png"
              alt="ISML Official Certificate Sample"
              className="cert-img"
            />
            {/* Optional: Floating Badge */}
            <div className="cert-badge">
              <span>ISML</span>
              <small>Certified</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}