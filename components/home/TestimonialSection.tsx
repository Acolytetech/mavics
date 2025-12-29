"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
const testimonials = [
  {
    name: "Brooklyn Simmons",
    role: "Junior Manager",
    image: "/images/user.jpg",
    text:
      "Home is where love resides, memories are created, and dreams are nurtured. I've found my sanctuary in this beautiful property.",
  },
  {
    name: "Albert Flores",
    role: "Marketing Head",
    image: "/images/user2.jpg",
    text:
      "Finding the perfect home that resonates with modern living was effortless. The experience was smooth and satisfying.",
  },
  {
    name: "Cody Fisher",
    role: "Business Owner",
    image: "/images/user3.jpg",
    text:
      "A perfect blend of luxury and comfort. The attention to detail and quality exceeded expectations.",
  },
];

  // 🔁 Auto Play
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SLIDER */}
        <div className="relative">

          {/* Watermark */}
          <h2 className="absolute -top-14 left-0 text-7xl font-bold text-gray-100 tracking-widest select-none">
            TESTIMONIALS
          </h2>

          <h3 className="relative text-5xl font-semibold text-gray-900">
            What Our Clients Say
          </h3>

          {/* Stars */}
          <div className="flex gap-1 mt-6 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          {/* SLIDER */}
          <div className="mt-6 max-w-lg overflow-hidden h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100)
                    setIndex((index + 1) % testimonials.length);
                  if (info.offset.x > 100)
                    setIndex(
                      (index - 1 + testimonials.length) %
                        testimonials.length
                    );
                }}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 text-xl font-semibold leading-relaxed">
                  {testimonials[index].text}
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[index].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote */}
          <div className="absolute bottom-0 right-10 text-gray-200 text-8xl font-serif">
            ”
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mt-10">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-10 h-[2px] transition ${
                  index === i ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGES (UNCHANGED) */}
        <div className="relative flex justify-center">
          <div className="relative w-[460px] h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/1.jpeg" alt="House" fill className="object-cover" />
          </div>

          <div className="absolute -bottom-16 -right-6 w-[360px] h-[250px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image src="/images/2.jpeg" alt="Interior" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
