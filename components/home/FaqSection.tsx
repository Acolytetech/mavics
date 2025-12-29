"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What broadband packages are available?",
    a: "We offer flexible broadband packages with high-speed internet, unlimited data, and affordable pricing plans suitable for every household.",
  },
  {
    q: "How can I find the best broadband deals in my area?",
    a: "You can check availability by entering your location. Our experts help you choose the best plan based on speed and budget.",
  },
  {
    q: "Need help to choose the best broadband deal?",
    a: "Yes, our support team is available 24/7 to guide you in selecting the perfect broadband plan.",
  },
  {
    q: "How to experience the magic of internet?",
    a: "With ultra-fast speed, low latency, and reliable connectivity, you can stream, work, and game seamlessly.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT FAQ */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
            Our Question & Answer
          </p>

          <h2 className="text-5xl font-semibold text-gray-900 mb-10">
            Have Any Questions About <br /> Our NetBand Company
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = active === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-bold text-xl text-gray-900">
                      {item.q}
                    </span>
                    <span className="w-8 h-8 rounded-full border bg-black  text-white border-gray-300 flex items-center justify-center">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Abstract Shape
          <div className="absolute -top-10 -right-10 w-72 h-72 border-2 border-gray-300 rotate-12"></div> */}

          {/* Image */}
          <div className="relative w-[620px] h-[520px] overflow-hidden ">
            <Image
              src="/images/bgfaqimg.png" // apni image yaha rakho
              alt="FAQ"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
