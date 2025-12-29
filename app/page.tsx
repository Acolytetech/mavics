import BetweenCitySection from "@/components/home/BetweenCitySection";
import BrowseCategories from "@/components/home/BrowseCategories";
import ContactSection from "@/components/home/ContactSection";
import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TrustedMarquee from "@/components/home/TrustedMarquee";


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
