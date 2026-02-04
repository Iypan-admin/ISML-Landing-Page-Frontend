import React from "react";
import "./../index.css";

export default function Success() {
  return (
    <div className="status-page success">
      <div className="status-card">

        <h1>✅ Payment Successful</h1>

        <p>Your registration for the ISML Foundation Program is confirmed.</p>
        <p>We’ll contact you shortly with further details.</p>

        <a href="/" className="status-btn">
          Go Back to Home
        </a>

        {/* ===== SUPPORT SECTION ===== */}
        <div className="status-support">
          <h3>Help & Support</h3>

          <p>
            Need assistance with courses, enrollment, or classes? 
            We’re happy to help.
          </p>

          <div className="support-block">
            <strong>📧 Email Support</strong>
            <p>enquiry.isml@gmail.com</p>
          </div>

          <div className="support-block">
            <strong>📞 Call Us</strong>
            <p>733 888 1781</p>
            <p>733 888 1780</p>
            <p>733 888 0186</p>
          </div>
        </div>

      </div>
    </div>
  );
}
