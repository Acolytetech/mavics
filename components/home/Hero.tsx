"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] md:min-h-[100vh] flex items-center bg-cover bg-center md:bg-bottom-left bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-11.png')",
      }}
    >
{/* Left → Right White to Transparent Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent"></div>


      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 font-semibold"
          >
            India’s Largest <br /> Real Estate Platform
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-gray-700 max-w-lg text-lg font-semibold leading-relaxed"
          >
            We've got you covered at every step of your property journey. From
            discovering premium residential spaces to exploring thoughtfully
            designed commercial properties, our platform helps you find the
            perfect place that aligns with your lifestyle, aspirations, and
            future goals — all with trust, transparency, and modern living at
            the core.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 rounded-full bg-gray-900 text-white text-xl font-bold shadow-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Find Property
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle background motion for luxury feel */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />
    </section>
  );
}
