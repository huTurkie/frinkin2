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
    <section id="events" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
            Events & Entertainment
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto">
            Join us for live music, quiz nights, seasonal celebrations, and community gatherings throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event) => (
            <Card key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-semibold capitalize`}>
                    {event.type}
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-pub-brown mb-2">
                  {event.title}
                </h3>
                <p className="text-pub-gray mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-pub-gray">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{event.schedule}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-pub-amber hover:bg-pub-gold text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
