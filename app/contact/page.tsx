import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Trusted Real Estate Platform India",
  description:
    "Get in touch with our real estate experts. We’re here to help you buy, sell, or rent properties across India.",
  keywords: [
    "contact real estate company",
    "property consultants contact",
    "real estate support india",
    "property help",
  ],
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center bg-black">
        <Image
          src="/images/contact-us-banner.jpg"
          alt="Contact Real Estate Company"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-2xl">
            Have questions? Our property experts are ready to help you find
            your perfect home or investment.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT – INFO */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
              Get In Touch
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              Let’s Talk About <br /> Your Property Needs
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
              Whether you are buying, selling, or renting a property, our
              experts provide reliable guidance at every step.
            </p>

            {/* INFO CARDS */}
            <div className="mt-10 space-y-6">

              <div className="flex gap-4 items-start">
                <span className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <MapPin size={22} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Office Address
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  <Phone size={22} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Phone Number
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    +91 94118 44571
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <Mail size={22} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Email Address
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    info@yourdomain.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-gray-50 p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* MAP (OPTIONAL) */}
      <section className="h-[420px] w-full">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>

    </main>
  );
}
