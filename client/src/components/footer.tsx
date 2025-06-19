import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    toast({
      title: "Newsletter subscription",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  const quickLinks = [
    { label: "Find a Pub", action: () => scrollToSection("locations") },
    { label: "Our Menu", action: () => scrollToSection("menu") },
    { label: "Events", action: () => scrollToSection("events") },
    { label: "Private Dining", action: () => {} },
    { label: "Gift Cards", action: () => {} }
  ];

  const aboutLinks = [
    "Our Story",
    "Careers", 
    "Sustainability",
    "Community",
    "Press"
  ];

  return (
    <footer className="bg-pub-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-pub-cream mb-6">
              Firkin Pubs
            </h3>
            <p className="text-gray-300 mb-6">
              Toronto's neighborhood pub experiences with traditional ales, hearty food, and warm hospitality since 1987.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pub-amber transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pub-amber transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pub-amber transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="hover:text-pub-amber transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">About</h4>
            <ul className="space-y-3 text-gray-300">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-pub-amber transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with special offers, events, and news from our pubs.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-pub-amber focus:border-transparent"
              />
              <Button
                type="submit"
                className="w-full bg-pub-amber hover:bg-pub-gold text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2024 Firkin Pubs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-300 text-sm">
              <a href="#" className="hover:text-pub-amber transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pub-amber transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-pub-amber transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
