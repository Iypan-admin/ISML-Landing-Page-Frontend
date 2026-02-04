import { useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";
import useSectionActive from "../hooks/useSectionActive";

export default function Stats() {
  const sectionRef = useRef(null);
  useSectionActive(sectionRef);

  const items = [
    { value: 20000, label: "Learners Reached", suffix: "+" }, // [cite: 11]
    { value: 400, label: "Intl. Diplomas", suffix: "+" },     // [cite: 12]
    { value: 9, label: "Years Excellence", suffix: "+" },     // [cite: 5]
    { value: 100, label: "Beginner Friendly", suffix: "%" }
  ];

  return (
    <div ref={sectionRef} className="stats-container fade-up show">
      <div className="stats-glass-strip">
        {items.map((item, index) => (
          <div key={item.label} className="stat-item">
            <div className="stat-number">
              <AnimatedNumber value={item.value} suffix={item.suffix} />
            </div>
            <div className="stat-label">{item.label}</div>
            {index !== items.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}