import { useEffect, useState } from "react";

export default function StickyCTA({ onEnroll }) {
  const [show, setShow] = useState(false);

  // Show sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;

      // Show after scrolling past hero (600px), hide near footer
      if (scrollTop > 600 && !nearBottom) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="sticky-cta-bar slide-up">
      {/* Left section: Hidden on small mobiles via CSS */}
      <div className="sticky-left">
        <strong>Unlock Your Global Career</strong>
        <span className="subtext">Join 20K+ Successful Students</span>
      </div>

      {/* Right section: Price & Action */}
      <div className="sticky-right">
        {/* REPLACED TIMER WITH URGENCY TEXT */}
        <span className="urgency-text">
           🔥 Hurry Up! Limited Seats
        </span>

        <div className="price-box">
           <del className="strike-text">₹7794</del>
           <span className="final-price">₹1299</span>
        </div>

        <button className="sticky-cta-button" onClick={onEnroll}>
          Register Now
        </button>
      </div>
    </div>
  );
}