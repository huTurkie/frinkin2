import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="font-playfair text-3xl font-bold text-pub-brown">Firkin Pubs</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick("home")}
              className="text-pub-charcoal hover:text-pub-amber transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("locations")}
              className="text-pub-charcoal hover:text-pub-amber transition-colors duration-200 font-medium"
            >
              Locations
            </button>
            <button
              onClick={() => handleNavClick("menu")}
              className="text-pub-charcoal hover:text-pub-amber transition-colors duration-200 font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick("events")}
              className="text-pub-charcoal hover:text-pub-amber transition-colors duration-200 font-medium"
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-pub-charcoal hover:text-pub-amber transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pub-charcoal hover:text-pub-amber"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavClick("home")}
              className="block px-3 py-2 text-pub-charcoal hover:text-pub-amber w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("locations")}
              className="block px-3 py-2 text-pub-charcoal hover:text-pub-amber w-full text-left"
            >
              Locations
            </button>
            <button
              onClick={() => handleNavClick("menu")}
              className="block px-3 py-2 text-pub-charcoal hover:text-pub-amber w-full text-left"
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick("events")}
              className="block px-3 py-2 text-pub-charcoal hover:text-pub-amber w-full text-left"
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block px-3 py-2 text-pub-charcoal hover:text-pub-amber w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
