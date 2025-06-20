import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    location: "Corporate HQ",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "General Inquiry", location: "Corporate HQ", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

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

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-pub-brown mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-pub-cream rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-pub-amber" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-pub-charcoal">{info.title}</h4>
                    <p className="text-pub-gray whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-semibold text-pub-brown mb-8">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-pub-charcoal mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="focus:ring-2 focus:ring-pub-amber focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-pub-charcoal mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="focus:ring-2 focus:ring-pub-amber focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-pub-charcoal mb-2">
                  Subject
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="focus:ring-2 focus:ring-pub-amber">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Reservation">Reservation</SelectItem>
                    <SelectItem value="Private Events">Private Events</SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-pub-charcoal mb-2">
                  Location
                </label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => setFormData({ ...formData, location: value })}
                >
                  <SelectTrigger className="focus:ring-2 focus:ring-pub-amber">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Corporate HQ">Corporate HQ</SelectItem>
                    <SelectItem value="Firkin on Yonge">Firkin on Yonge</SelectItem>
                    <SelectItem value="Firkin on Queen">Firkin on Queen</SelectItem>
                    <SelectItem value="Firkin on King">Firkin on King</SelectItem>
                    <SelectItem value="Firkin on Bloor">Firkin on Bloor</SelectItem>
                    <SelectItem value="Firkin on Danforth">Firkin on Danforth</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-pub-charcoal mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="focus:ring-2 focus:ring-pub-amber focus:border-transparent"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="group relative w-full btn-gradient-primary text-white py-6 px-8 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-glow-gold overflow-hidden disabled:opacity-50 disabled:transform-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl"></div>
                <span className="relative z-10 flex items-center justify-center">
                  {contactMutation.isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="mr-3">Send Message</span>
                      <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">→</span>
                    </>
                  )}
                </span>
                {!contactMutation.isPending && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white/40 rounded-full"></div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
