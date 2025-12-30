import Image from "next/image";
import type { Metadata } from "next";
import {
  Home,
  ShieldCheck,
  MapPin,
  Headphones,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features | India’s Trusted Real Estate Platform",
  description:
    "Explore powerful features that make buying, selling, and renting property easy, secure, and transparent across India.",
  keywords: [
    "real estate features",
    "property platform features",
    "buy property online",
    "real estate services india",
  ],
  alternates: {
    canonical: "https://yourdomain.com/features",
  },
};

const features = [
  {
    icon: <Home size={26} />,
    title: "Verified Properties",
    desc: "Every property is carefully verified to ensure complete transparency and trust for buyers and investors.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Secure Transactions",
    desc: "We follow strict compliance and security protocols to protect your investments and personal data.",
  },
  {
    icon: <MapPin size={26} />,
    title: "Prime Locations",
    desc: "Find properties in top locations with excellent connectivity, infrastructure, and future growth.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Smart Investment Insights",
    desc: "Make informed decisions using real-time market trends and expert investment guidance.",
  },
  {
    icon: <Headphones size={26} />,
    title: "24/7 Expert Support",
    desc: "Our dedicated property consultants are available anytime to assist you at every step.",
  },
  {
    icon: <BadgeCheck size={26} />,
    title: "Trusted by Thousands",
    desc: "Thousands of happy clients trust us for buying, selling, and renting properties across India.",
  },
];

export default function Feature() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center bg-black">
        <Image
          src="/images/3.jpeg"
          alt="Real Estate Platform Features"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-center">
            Platform Features
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Discover powerful features designed to simplify your real estate
            journey and maximize value at every step.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
              Why Choose Us
            </p>
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900">
              Smart Features for Modern <br /> Real Estate Experience
            </h2>
            <p className="mt-5 text-gray-600  md:text-lg">
              We combine technology, expertise, and trust to deliver a seamless
              property experience.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="group bg-gray-50 p-10 rounded-3xl hover:bg-white hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-black">
        <Image
          src="/images/3.jpeg"
          alt="Start Property Journey"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-4xl md:text-5xl font-semibold">
            Ready to Find Your <br /> Perfect Property?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-sm md:text-lg">
            Start exploring verified properties and connect with experts who
            guide you every step of the way.
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition">
            Get Started Now
          </button>
        </div>
      </section>

    </main>
  );
}
