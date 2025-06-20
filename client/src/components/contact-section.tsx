import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate HQ",
      content: "20 Steelcase Rd. W\nUnit 1C\nMarkham, ON L3R 1B2"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(905) 305-9792"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@firkinpubs.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Thu: 11:00 AM - 11:00 PM\nFri-Sat: 11:00 AM - 12:00 AM\nSun: 11:00 AM - 10:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-pub-cream/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pub-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pub-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-pub-amber font-semibold tracking-wider uppercase text-sm">Let's Connect</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pub-brown mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto leading-relaxed">
            Have questions about our pubs, want to make a reservation, or planning a private event? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <h3 className="font-playfair text-3xl font-bold text-pub-brown mb-12 text-center">
              Contact Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group hover:bg-pub-cream/30 p-6 rounded-2xl transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pub-amber to-pub-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg text-pub-charcoal mb-2">{info.title}</h4>
                    <p className="text-pub-gray whitespace-pre-line leading-relaxed">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
