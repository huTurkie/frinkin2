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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto">
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
                className="w-full bg-pub-amber hover:bg-pub-gold text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
