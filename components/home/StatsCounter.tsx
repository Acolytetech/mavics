"use client";

import { useEffect, useRef, useState } from "react";

type StatProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatsCounter({ value, suffix = "+", label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const duration = 2000; // ms
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref}>
      <h3 className="text-3xl font-bold text-gray-900">
        {count}
        {suffix}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
