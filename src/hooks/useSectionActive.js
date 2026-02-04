import { useEffect } from "react";

export default function useSectionActive(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
  }, [ref]);
}
