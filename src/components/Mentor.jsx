import { useEffect, useState } from "react";

export default function Mentor({ onEnroll }) {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section id="mentor" className="mentor-section">
      <div className="mentor-grid">
        {/* LEFT: Photo & Badge */}
        <div className="mentor-profile-card fade-up show">
          <div className="mentor-image-wrapper">
            <img src="/mentor.webp" width="358" height="403" alt="Pradeep Kumar M - ISML Founder" />
          </div>
          <div className="mentor-badges">
            <span className="badge-exp">🏆 12+ Years Exp</span>
            <span className="badge-role">Founder, ISML</span>
          </div>
        </div>

        {/* RIGHT: Content & Session Details */}
        <div className="mentor-content fade-up show">
          <h2 className="mentor-title">Meet Your Lead Instructor</h2>
          <h3 className="mentor-name">Pradeep Kumar M</h3>
          <p className="mentor-bio">
            "We don't just teach languages; we build careers." <br />
            With over a decade of experience since 2014, Pradeep has empowered 
            <strong> 20,000+ students</strong> to master French & German. His unique 
            <strong> Communicative Training Method</strong> ensures you speak from Day 1, 
            focusing on the skills needed for DELF/Goethe exams and MNC interviews.
          </p>

          {/* Session Info Box - Aligned with Circular */}
          <div className="session-info-box">
            <div className="session-row">
              <div className="session-detail">
                <span className="icon">📅</span>
                <div>
                  <strong>Batch Starts:</strong>
                  <span>This Week</span>
                </div>
              </div>
              <div className="session-detail">
                <span className="icon">💻</span>
                <div>
                  <strong>Mode:</strong>
                  <span>Online (Google Meet)</span>
                </div>
              </div>
            </div>

            <div className="session-row">
               <div className="session-detail">
                <span className="icon">⏰</span>
                <div>
                  <strong>Duration:</strong>
                  <span>12-14 Weeks (2 Hrs/Session)</span>
                  <span>1.5 Hrs Teaching & 30 mins Speaking Practice</span>
                </div>
              </div>
            </div>
            
            <div className="mentor-actions">
               <button className="mentor-cta-btn pulse-btn" onClick={onEnroll}>
                  Join Batch – ₹1299 <span className="strike-text">₹7794</span>
               </button>
               <p className="offer-timer">⚡ Hurry Up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}