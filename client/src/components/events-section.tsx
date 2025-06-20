import { useQuery } from "@tanstack/react-query";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"]
  });

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "weekly":
        return "bg-pub-amber";
      case "seasonal":
        return "bg-red-500";
      default:
        return "bg-pub-green";
    }
  };

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
              Events & Entertainment
            </h2>
            <p className="text-xl text-pub-gray max-w-3xl mx-auto">
              Loading events...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-pub-brown/5 to-pub-amber/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-pub-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pub-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-pub-amber font-semibold tracking-wider uppercase text-sm">What's Happening</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pub-brown mb-6">
            Events & Entertainment
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto leading-relaxed">
            Join us for live music, quiz nights, seasonal celebrations, and community gatherings throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event, index) => (
            <Card key={event.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0">
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className={`${getEventTypeColor(event.type)} text-white px-4 py-2 rounded-2xl text-sm font-bold capitalize shadow-lg`}>
                    {event.type}
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-pub-brown mb-3">
                  {event.title}
                </h3>
                <p className="text-pub-gray mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-pub-gray bg-pub-cream/50 px-4 py-2 rounded-2xl">
                    <Calendar className="w-4 h-4 mr-2 text-pub-amber" />
                    <span className="font-medium">{event.schedule}</span>
                  </div>
                  <button className="group relative btn-gradient-primary text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-glow overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <span className="mr-1">Join</span>
                      <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
                    </span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative btn-gradient-primary text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-xl hover:shadow-glow-gold overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl"></div>
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 9h12v6H4V9z" />
              </svg>
              <span className="mr-3">View All Events</span>
              <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">→</span>
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white/40 rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
