import "./../index.css";
import React, { useEffect } from "react";


export default function Success() {
  useEffect(() => {
    // ⭐ Meta Pixel - Purchase
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 1299,
        currency: 'INR'
      });
    }
  }, []);

  return (
    <div className="status-page success">
      <div className="status-card">

              {/* ⭐ LOGO HERE */}
        <img
          src="/logo.png"
          alt="ISML Logo"
          className="status-logo"
        />

        <h1>✅ Payment Successful</h1>

        <p>Your registration for the ISML Foundation Program is confirmed.</p>
        <p>We’ll contact you shortly with further details.</p>

        <a
          href={localStorage.getItem("referral")
            ? `/?ref=${localStorage.getItem("referral")}`
            : "/"}
          className="status-btn"
        >
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
            <p>
              <a href="mailto:enquiry.isml@gmail.com" className="support-link">
                enquiry.isml@gmail.com
              </a>
            </p>
          </div>

          <div className="support-block">
            <strong>📞 Call Us</strong>
            <p><a href="tel:+917338881781" className="support-link">733 888 1781</a></p>
            <p><a href="tel:+917338880780" className="support-link">733 888 0780</a></p>
            <p><a href="tel:+917338880186" className="support-link">733 888 0186</a></p>
          </div>

          {/* ⭐ Refund Policy */}
          <div className="support-block">
            <strong>Refund & Cancellation</strong>
            <p>
              <a
                href="https://www.indianschoolformodernlanguages.com/refund"
                target="_blank"
                rel="noopener noreferrer"
                className="support-link"
              >
                View Refund / Cancellation Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
