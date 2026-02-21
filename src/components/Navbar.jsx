import React from "react";

export default function Navbar({ onEnroll }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      {/* Clickable Logo Area */}
      <div className="nav-logo" onClick={() => scrollTo("hero")}>
        <img src="/logo.webp" alt="ISML Logo" className="logo-img" width="111" height="111" />
        {/* Optional text if logo image fails or for SEO */}
        <span className="logo-text">ISML <span style={{color: "var(--accent)"}}>FOUNDATION</span></span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links">
        <span onClick={() => scrollTo("programs")}>Program</span>
        <span onClick={() => scrollTo("languages")}>Languages</span>
        <span onClick={() => scrollTo("mentor")}>Mentor</span>
        <span onClick={() => scrollTo("faq")}>FAQ</span>
      </div>

      {/* Primary CTA Button */}
      <button className="nav-btn" onClick={onEnroll}>Register Now</button>
    </nav>
  );
}