import { Building, Beer, Users } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function FeaturesSection() {
  const features = [
    {
      icon: Building,
      title: "Toronto Locations",
      description: "Strategic locations across Toronto's vibrant neighborhoods, each offering a unique local atmosphere and character.",
      image: "https://images.unsplash.com/photo-1519167758481-83f29c75b5c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Beer,
      title: "Canadian Craft Selection",
      description: "Curated selection of Canadian craft beers, premium spirits, and signature cocktails including our famous Caesar.",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Users,
      title: "Community Gathering",
      description: "Neighborhood gathering places fostering community spirit with live music, sports viewing, and local events.",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
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
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pub-amber to-pub-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-8 h-1 bg-pub-amber rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-pub-brown mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-pub-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100">
            <span className="text-pub-brown font-semibold text-lg">Ready to experience the difference?</span>
            <button 
              onClick={() => scrollToSection("locations")}
              className="group relative btn-gradient-primary text-white px-8 py-3 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl"></div>
              <span className="relative z-10 flex items-center">
                <span className="mr-2">Find Your Local</span>
                <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
