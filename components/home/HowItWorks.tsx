"use client";

import { MapPin, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Evaluate Property",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.",
    icon: <MapPin size={28} />,
  },
  {
    step: "2",
    title: "Meet Your Agent",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.",
    icon: <Users size={28} />,
  },
  {
    step: "3",
    title: "Close The Deal",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.",
    icon: <ClipboardCheck size={28} />,
  },
];

const CurvedArrow = ({ className = "" }) => (
  <motion.svg
    width="80"
    height="30"
    viewBox="0 0 80 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <motion.path
      d="M1 15 C20 0, 40 0, 60 12"
      stroke="#34d399"
      strokeWidth="2"
      fill="none"
    />
    <motion.path
      d="M56 6 L62 12 L56 18"
      stroke="#34d399"
      strokeWidth="2"
      fill="none"
    />
  </motion.svg>
);

/* Animation Variants */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <motion.div
        className="md:max-w-9/12 mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          How It Works?
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl text-xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti
        </p>

        {/* Cards */}
        <motion.div
          className="mt-14 grid md:grid-cols-3 gap-16 md:gap-36 relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((item, i) => (
            <motion.div key={i} className="relative" >

              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.08)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white rounded-bl-[50px] rounded-tr-[50px] overflow-hidden p-8 shadow-md border border-gray-100"
              >
                {/* Top Right Number */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-50 rounded-full">
                  <span className="absolute bottom-4 left-4 text-blue-600 font-bold text-lg">
                    {item.step}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>

              {/* Curved Arrow */}
              {i < steps.length - 1 && (
                <CurvedArrow className="hidden md:block absolute top-1/2 -right-12 translate-x-18 -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
