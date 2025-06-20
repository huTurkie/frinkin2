import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Location } from "@shared/schema";

export default function LocationsSection() {
  const { data: locations, isLoading } = useQuery<Location[]>({
    queryKey: ["/api/locations"]
  });

  if (isLoading) {
    return (
      <section id="locations" className="py-24 bg-gradient-to-br from-pub-brown/5 to-pub-amber/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pub-brown mb-4">
              Find Your Local Firkin
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 bg-pub-amber rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pub-amber rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-pub-amber rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="locations" className="py-24 bg-gradient-to-br from-pub-brown/5 to-pub-amber/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pub-amber/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pub-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-pub-amber font-semibold tracking-wider uppercase text-sm">Our Locations</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pub-brown mb-6">
            Find Your Local Firkin
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto leading-relaxed">
            Discover our collection of neighborhood pubs across Toronto and the GTA, each with its own unique character and charm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations?.map((location, index) => (
            <div key={location.id} className="group relative">
              <Card className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.name} exterior`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-pub-brown">#{index + 1}</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-pub-brown mb-3">
                    {location.name}
                  </h3>
                  <p className="text-pub-gray mb-4 flex items-start">
                    <span className="w-4 h-4 bg-pub-amber rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    {location.address}
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center bg-pub-cream rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-pub-amber mr-1 fill-current" />
                      <span className="text-pub-brown font-semibold text-sm">
                        {location.rating}
                      </span>
                    </div>
                    <span className="text-pub-gray text-sm ml-2">
                      ({location.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-pub-green font-semibold bg-green-50 px-4 py-2 rounded-2xl text-sm border border-green-200">
                      {location.status}
                    </span>
                    <button className="group relative bg-gradient-to-r from-pub-amber to-pub-gold hover:from-pub-gold hover:to-pub-amber text-white px-6 py-3 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl"></div>
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">Visit</span>
                        <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">→</span>
                      </span>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-white/40 rounded-full"></div>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-pub-brown mb-4">
              Can't decide which location to visit?
            </h3>
            <p className="text-pub-gray mb-6">
              Use our location finder to discover the Firkin pub closest to you.
            </p>
            <button className="bg-gradient-to-r from-pub-amber to-pub-gold hover:from-pub-gold hover:to-pub-amber text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Find Nearest Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
