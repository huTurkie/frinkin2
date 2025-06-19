import { Building, Beer, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Building,
      title: "Historic Venues",
      description: "Each pub is housed in carefully restored historic buildings, preserving centuries of British heritage and character."
    },
    {
      icon: Beer,
      title: "Craft Ales & Spirits",
      description: "Curated selection of local and imported ales, craft beers, and premium spirits served at perfect temperature."
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Traditional gathering places fostering community spirit with live music, quiz nights, and seasonal celebrations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
            Why Choose Firkin Pubs
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto">
            Experience the finest in British pub culture with our commitment to quality, tradition, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-pub-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-pub-amber" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-pub-brown mb-4">
                {feature.title}
              </h3>
              <p className="text-pub-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
