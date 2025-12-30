import BetweenCitySection from "@/components/home/BetweenCitySection";
import BrowseCategories from "@/components/home/BrowseCategories";
import ContactSection from "@/components/home/ContactSection";
import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TrustedMarquee from "@/components/home/TrustedMarquee";
import { Metadata } from "next";


  export const metadata: Metadata = {
  title: "India’s Largest Real Estate Platform | Buy, Sell & Rent Properties",
  description:
    "Find the best residential and commercial properties across India. Browse projects, trusted agents, FAQs, testimonials and connect with us easily.",
  keywords: [
    "real estate india",
    "buy property",
    "sell property",
    "rent property",
    "real estate platform",
    "residential projects",
    "commercial property",
  ],

  openGraph: {
    title: "India’s Largest Real Estate Platform",
    description:
      "Discover verified real estate projects, browse categories, read client testimonials and find your dream property in India.",
    url: "https://yourdomain.com",
    siteName: "YourBrandName",
    images: [
      {
        url: "/images/og-home.jpg", // create this image (1200x630)
        width: 1200,
        height: 630,
        alt: "Real Estate Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "India’s Largest Real Estate Platform",
    description:
      "Buy, sell or rent properties with confidence. Trusted by thousands across India.",
    images: ["/images/og-home.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Home() {

  return (
    <>
     <Hero />
     <BetweenCitySection/>
     <BrowseCategories/>
     <TrustedMarquee/>
     <ProjectsSection/>
     <HowItWorks/>
     <TestimonialSection/>
     <FaqSection/>
     <ContactSection/>
    </>
  );
}
