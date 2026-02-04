import React, { useState } from "react";

export default function Certificate() {
  const certificates = [
    "/certificate-sample.png",
    "/certificate-sample-2.png",
  ];

  const [index, setIndex] = useState(0);

  const nextCert = () => {
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  return (
    <section className="certificate-section">
      <div className="cert-grid">

        {/* LEFT CONTENT */}
        <div className="cert-content fade-up show">
          <div
            className="badge-pill"
            style={{ background: "#e0f2fe", color: "#0284c7" }}
          >
            📜 Official Documentation
          </div>

          <h2>Validating Your 3-Month Journey</h2>

          <p className="cert-subtext">
            Upon successful completion of the
            <strong> Indian School for Modern Languages Foundation Program</strong>,
            you will be awarded a Certificate of Completion.
          </p>

          <ul className="cert-benefits">
            <li>
              <span className="icon">🏆</span>
              <div>
                <strong>Internationally Aligned</strong>
                <p>DELF (A1), Goethe (A1), and CEFR standards.</p>
              </div>
            </li>

            <li>
              <span className="icon">💼</span>
              <div>
                <strong>Career Edge</strong>
                <p>Boost higher education and job opportunities.</p>
              </div>
            </li>

            <li>
              <span className="icon">✅</span>
              <div>
                <strong>Verified Achievement</strong>
                <p>Proof of modern linguistic skills.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — ANIMATED SLIDER */}
        <div className="cert-visual fade-up show">

          <div className="cert-slider">
            <div
              className="cert-track"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {certificates.map((src, i) => (
                <div className="cert-frame" key={i}>
                  <img src={src} className="cert-img" alt="ISML Certificate" />
                </div>
              ))}
            </div>

            {/* TRANSLUCENT CENTER ARROWS */}
            <button className="cert-arrow left" onClick={prevCert}>
              ❮
            </button>

            <button className="cert-arrow right" onClick={nextCert}>
              ❯
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
