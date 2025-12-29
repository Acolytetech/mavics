"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-gray-50 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Get In Touch With <br /> Our Expert Team
          </h2>

          <p className="mt-6 text-gray-600 max-w-md text-lg leading-relaxed">
            Whether you're looking to buy, sell, or invest in property, our
            experienced team is here to guide you every step of the way. Reach
            out to us for personalized assistance and expert advice.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 text-yellow-500 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Phone</p>
                <p className="text-gray-500 text-sm">+91 94118 44571</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 text-yellow-500 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Email</p>
                <p className="text-gray-500 text-sm">info@mavics.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 text-yellow-500 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Office</p>
                <p className="text-gray-500 text-sm">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-full font-medium hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
