import React from "react";
import "./../index.css";

export default function Failure() {
  return (
    <div className="status-page failure">
      <div className="status-card">


       {/* ⭐ LOGO HERE */}
        <img src="/logo.webp" alt="ISML Logo" className="status-logo" width="111" height="111" />
        <h1>❌ Payment Failed</h1>

        <p>Your payment could not be completed.</p>
        <p>Please try again or contact support.</p>

       <a
        href={localStorage.getItem("referral")
          ? `/?ref=${localStorage.getItem("referral")}`
          : "/"}
        className="status-btn"
      >
        Try Again
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
