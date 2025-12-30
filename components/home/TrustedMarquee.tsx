"use client";

import { useEffect, useRef } from "react";

export default function TrustedMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5; // 👉 speed control (0.3 slow, 1 fast)

    const animate = () => {
      position -= speed;

      // reset without breaking
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const logos = [
    "/images/brands/kyan.png",
    "/images/brands/nirastate.png",
    "/images/brands/kanba.png",
    "/images/brands/ztos.png",
    "/images/brands/treva.png",
     "/images/brands/kyan.png",
    "/images/brands/nirastate.png",
    "/images/brands/kanba.png",
    "/images/brands/ztos.png",
    "/images/brands/treva.png",
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full px-6">

        {/* Heading */}
        <p className="text-center text-2xl font-bold text-gray-600 mb-10">
          Trusted by <span className="text-yellow-400">2000+</span> businesses
        </p>

        {/* Slider */}
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-20 w-max will-change-transform"
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Brand"
                className="h-10 w-auto object-contain hover:cursor-pointer hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
