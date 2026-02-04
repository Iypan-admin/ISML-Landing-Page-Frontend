import React, { useMemo, useState } from "react";
import ismlLogo from "../assets/isml-logo.png"; // ⭐ IMPORT YOUR LOGO

export default function Tools() {
  const [isSpinning, setIsSpinning] = useState(false);

  // Ring Items - Updated with SVG Images for Flags
  const tools = [
    {
      name: "French",
      icon: (
        <img
          src="https://flagcdn.com/fr.svg"
          alt="FR"
          className="flag-icon"
        />
      ),
      desc: "DELF Prep",
    },
    {
      name: "German",
      icon: (
        <img
          src="https://flagcdn.com/de.svg"
          alt="DE"
          className="flag-icon"
        />
      ),
      desc: "Goethe Prep",
    },
    {
      name: "CEFR",
      icon: (
        <img
          src="https://flagcdn.com/eu.svg"
          alt="EU"
          className="flag-icon"
        />
      ),
      
    },
    { name: "Speaking", icon: "🗣️", },
    { name: "Reading", icon: "📖",  },
    { name: "Writing", icon: "✍️",  },
    { name: "Listening", icon: "🎧",  },
    { name: "Culture", icon: "🌏", },
  ];

  const radius = 250;

  const toolsWithPosition = useMemo(() => {
    return tools.map((tool, index) => {
      const total = tools.length;
      const angle = (index / total) * 360 - 90;
      const radians = angle * (Math.PI / 180);

      return {
        ...tool,
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
      };
    });
  }, [tools]);

  // Trigger Spin on Click
  const handleHubClick = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <section id="languages" className="wheel-section">
      <div className="section-header center">
        <h2>Curriculum & Skills</h2>
        <h4 className="subtitle">Interactive Learning Path</h4>
      </div>

      <div className="wheel-container">
        {/* ⭐ CENTER HUB WITH ISML LOGO */}
        <div className="wheel-hub" onClick={handleHubClick}>
          <img
            src={ismlLogo}
            alt="ISML Logo"
            className="hub-logo"
          />
        </div>

        {/* SPINNING ORBIT */}
        <div className={`wheel-orbit ${isSpinning ? "spin-active" : ""}`}>
          {toolsWithPosition.map((item) => (
            <div
              key={item.name}
              className="orbit-item"
              style={{ "--x": `${item.x}px`, "--y": `${item.y}px` }}
            >
              <div className="tool-content">
                <div className="tool-icon">{item.icon}</div>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
