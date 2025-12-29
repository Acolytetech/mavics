"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const slides = [
    { image: "/images/interior.webp", title: "Interior View" },
    { image: "/images/floorplan.webp", title: "Floor Plan" },
    { image: "/images/interior.webp", title: "Interior View" },
    { image: "/images/floorplan.webp", title: "Floor Plan" },
    { image: "/images/interior.webp", title: "Interior View" },
    { image: "/images/floorplan.webp", title: "Floor Plan" },
  ];

  const slidesPerView = 2;
  const totalGroups = Math.ceil(slides.length / slidesPerView);
  const [groupIndex, setGroupIndex] = useState(0);

  const CARD_WIDTH = 260;
  const GAP = 24;

  const translateX =
    -(groupIndex * slidesPerView * (CARD_WIDTH + GAP));

  return (
    <section className="relative min-h-[65vh] flex items-center bg-black overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/projectbg.jpg"
          alt="Project Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          {/* Watermark */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="uppercase tracking-widest text-8xl font-bold block mb-4"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.6)",
            }}
          >
            Projects
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Discover Modern Living <br /> At Realar Residence.
          </h2>

          <p className="mt-5 text-white/70 max-w-md text-xl">
            Residence takes advantage of abundant sunlight by incorporating
            solar panels into its architecture.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-300 transition"
          >
            Explore More <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* RIGHT SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Track */}
          <motion.div
            className="flex gap-6"
            animate={{ x: translateX }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-[260px] h-[200px] rounded-2xl overflow-hidden shrink-0 shadow-lg"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />

                {/* Arrow */}
                <button
                  onClick={() =>
                    setGroupIndex((prev) =>
                      prev + 1 >= totalGroups ? 0 : prev + 1
                    )
                  }
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center"
                >
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress */}
          <div className="flex gap-2 mt-6">
            {Array.from({ length: totalGroups }).map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  width: groupIndex === i ? 48 : 40,
                  backgroundColor:
                    groupIndex === i
                      ? "#facc15"
                      : "rgba(255,255,255,0.4)",
                }}
                transition={{ duration: 0.3 }}
                className="h-[2px]"
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
