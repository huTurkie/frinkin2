import { useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook } from "lucide-react";
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
              <img 
                src="/attached_assets/firkin-header-logo-768x367_1750380151906.png" 
                alt="Firkin Pubs Logo" 
                className="h-12 w-auto object-contain"
              />
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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <a 
                  href="https://www.instagram.com/firkinpubs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pub-charcoal hover:text-pub-amber transition-colors duration-300 p-1"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/FirkinPubs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pub-charcoal hover:text-pub-amber transition-colors duration-300 p-1"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/firkinpubs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pub-charcoal hover:text-pub-amber transition-colors duration-300 p-1"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => handleNavClick("contact")}
                className="group relative btn-gradient-primary text-white px-8 py-3 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl"></div>
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Us
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-white/40 rounded-full"></div>
              </button>
            </div>
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
            
            {/* Mobile Social Media */}
            <div className="border-t border-pub-cream mt-4 pt-4">
              <div className="flex justify-center space-x-6 pb-2">
                <a 
                  href="https://www.instagram.com/firkinpubs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pub-charcoal hover:text-pub-amber transition-colors duration-300 p-2"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/FirkinPubs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pub-charcoal hover:text-pub-amber transition-colors duration-300 p-2"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/firkinpubs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pub-charcoal hover:text-pub-amber transition-colors duration-300 p-2"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              <p className="text-center text-sm text-pub-gray">Follow us for updates & events</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
