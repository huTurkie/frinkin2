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
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-pub-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-pub-amber rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">F</span>
              </div>
              <h1 className="font-playfair text-3xl font-bold text-pub-brown">Firkin Pubs</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick("home")}
              className="relative text-pub-charcoal hover:text-pub-amber transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pub-cream/50 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pub-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick("locations")}
              className="relative text-pub-charcoal hover:text-pub-amber transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pub-cream/50 group"
            >
              Locations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pub-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick("menu")}
              className="relative text-pub-charcoal hover:text-pub-amber transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pub-cream/50 group"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pub-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick("events")}
              className="relative text-pub-charcoal hover:text-pub-amber transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pub-cream/50 group"
            >
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pub-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-pub-amber hover:bg-pub-gold text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pub-charcoal hover:text-pub-amber p-2 rounded-lg hover:bg-pub-cream/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pub-cream">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavClick("home")}
              className="block px-4 py-3 text-pub-charcoal hover:text-pub-amber hover:bg-pub-cream/50 w-full text-left rounded-lg transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("locations")}
              className="block px-4 py-3 text-pub-charcoal hover:text-pub-amber hover:bg-pub-cream/50 w-full text-left rounded-lg transition-all duration-300"
            >
              Locations
            </button>
            <button
              onClick={() => handleNavClick("menu")}
              className="block px-4 py-3 text-pub-charcoal hover:text-pub-amber hover:bg-pub-cream/50 w-full text-left rounded-lg transition-all duration-300"
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick("events")}
              className="block px-4 py-3 text-pub-charcoal hover:text-pub-amber hover:bg-pub-cream/50 w-full text-left rounded-lg transition-all duration-300"
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block px-4 py-3 text-pub-charcoal hover:text-pub-amber hover:bg-pub-cream/50 w-full text-left rounded-lg transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
