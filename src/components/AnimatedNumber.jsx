import { useEffect, useState } from "react";

export default function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    const duration = 1200; // animation duration in ms
    const stepTime = 20;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
}
