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
      <section id="locations" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
              Find Your Local Firkin
            </h2>
            <p className="text-xl text-pub-gray max-w-3xl mx-auto">
              Loading locations...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="locations" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
            Find Your Local Firkin
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto">
            Discover our collection of authentic British pubs across the region, each with its own unique character and charm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations?.map((location) => (
            <Card key={location.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={location.image}
                alt={`${location.name} exterior`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-pub-brown mb-2">
                  {location.name}
                </h3>
                <p className="text-pub-gray mb-4">
                  {location.address}
                </p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-pub-amber mr-2 fill-current" />
                  <span className="text-pub-gray">
                    {location.rating} ({location.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-pub-green font-semibold">
                    {location.status}
                  </span>
                  <button className="text-pub-amber hover:text-pub-gold font-semibold">
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-pub-amber hover:bg-pub-gold text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            Find Nearest Location
          </button>
        </div>
      </div>
    </section>
  );
}
