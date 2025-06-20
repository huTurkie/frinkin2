import { Building, Beer, Users } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function FeaturesSection() {
  const features = [
    {
      icon: Building,
      title: "Toronto Locations",
      description: "Strategic locations across Toronto's vibrant neighborhoods, each offering a unique local atmosphere and character."
    },
    {
      icon: Beer,
      title: "Canadian Craft Selection",
      description: "Curated selection of Canadian craft beers, premium spirits, and signature cocktails including our famous Caesar."
    },
    {
      icon: Users,
      title: "Community Gathering",
      description: "Neighborhood gathering places fostering community spirit with live music, sports viewing, and local events."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-pub-cream/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-pub-amber rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-pub-gold rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-pub-brown rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-pub-amber font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pub-brown mb-6">
            Why Choose Firkin Pubs
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto leading-relaxed">
            Experience Toronto's finest pub culture with our commitment to quality, tradition, and community since 1987.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-pub-amber to-pub-gold rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pub-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-pub-brown mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-pub-gray text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-pub-brown font-semibold">Ready to experience the difference?</span>
            <button 
              onClick={() => scrollToSection("locations")}
              className="bg-pub-amber hover:bg-pub-gold text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
            >
              Find Your Local
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
