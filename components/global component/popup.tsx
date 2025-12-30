"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // 🔓 OPEN POPUP
  const openPopup = () => {
    setOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
  };

  // 🔒 CLOSE POPUP
  const closePopup = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  // ⏱ AUTO OPEN (ONLY IF NOT SUBMITTED)
  useEffect(() => {
    const submitted = localStorage.getItem("lead_submitted");

    if (!submitted) {
      const timer = setTimeout(() => {
        openPopup();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  // 🔥 FORCE OPEN FROM NAVBAR BUTTON
  useEffect(() => {
    const handler = () => {
      openPopup();
    };

    window.addEventListener("open-lead-popup", handler);
    return () => window.removeEventListener("open-lead-popup", handler);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all details");
      return;
    }

    console.log("Lead Submitted:", form);

    // 🛑 STOP AUTO POPUP FOREVER
    localStorage.setItem("lead_submitted", "true");
    closePopup();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 animate-fadeIn">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="/images/5.jpeg"
            alt="Property"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-10 left-8 right-8 text-white">
            <h3 className="text-3xl font-semibold">
              Find Your Dream Property
            </h3>
            <p className="mt-3 text-white/80">
              Get exclusive listings & expert guidance.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative p-8 md:p-10">

          <button
            onClick={closePopup}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
          >
            <X size={18} />
          </button>

          <h3 className="text-2xl font-semibold text-gray-900">
            Free Property Consultation
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Fill details & our expert will contact you.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
            >
              Request Call Back
            </button>

            <p className="text-xs text-gray-400 text-center">
              We respect your privacy. No spam.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
