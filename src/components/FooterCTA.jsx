import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterCTA({ onEnroll }) {
  return (
    <section className="footer-cta-section fade-up show">
      <div className="footer-cta-content">
        <h2>Don't Miss This Week Batch!</h2>
        <p>
          Admissions are closing soon for the <strong>Indian School for Modern Languages Foundation Program 2026</strong>.
          Secure your seat today and start your journey towards global opportunities.
        </p>

        <div className="footer-actions">
          <button className="footer-btn pulse-btn" onClick={onEnroll}>
            Register Now – ₹1299 <span className="strike-text">₹7794</span>
          </button>
          <p className="guarantee-text">
            🔒 Official ISML Certification • 100% Secure Payment with PayU
          </p>
        </div>

        {/* ⭐ NEW FOOTER LINKS SECTION */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="https://www.indianschoolformodernlanguages.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="https://www.indianschoolformodernlanguages.com/terms" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com/learnwithisml?igsh=MWx2ZmltM3hlajR0ZA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/company/learnwithisml/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="https://x.com/learnwithisml" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

            <a href="https://www.youtube.com/@learnwithisml" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
