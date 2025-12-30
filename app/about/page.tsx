import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | India’s Trusted Real Estate Platform",
  description:
    "Learn more about our real estate company, mission, vision, and why thousands of customers trust us to find their perfect property.",
  keywords: [
    "about real estate company",
    "trusted real estate platform india",
    "property consultants india",
    "real estate services",
  ],
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO / BANNER */}
      <section className="relative min-h-[60vh] flex items-center bg-black">
        <Image
          src="/images/aboutbg.jpg"
          alt="About Real Estate Company"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            About Our Company
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            We are India’s fastest-growing real estate platform helping people
            discover properties that truly feel like home.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              India’s Most Reliable <br /> Real Estate Platform
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We simplify property buying, selling, and renting by combining
              technology with expert guidance. Our platform connects buyers,
              sellers, investors, and developers across India.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With verified listings, transparent processes, and dedicated
              support, we ensure that every property journey is smooth,
              trustworthy, and rewarding.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">2000+</h3>
                <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-500 mt-1">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-sm text-gray-500 mt-1">Cities</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/1.jpeg"
                alt="Our real estate team"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower people with the right information,
              expert guidance, and verified properties so they can make
              confident real estate decisions.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become India’s most trusted real estate ecosystem where every
              property transaction is simple, transparent, and secure.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-semibold">
          Ready to Find Your Dream Property?
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Explore verified projects, trusted agents, and premium properties
          across India.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}
