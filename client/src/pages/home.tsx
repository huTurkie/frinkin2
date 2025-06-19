import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import LocationsSection from "@/components/locations-section";
import MenuSection from "@/components/menu-section";
import EventsSection from "@/components/events-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <LocationsSection />
      <MenuSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
