import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
          Toronto's Favorite Pub Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover our collection of neighborhood pubs across Toronto offering exceptional ales, hearty pub fare, and warm hospitality since 1987.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("locations")}
            className="bg-pub-amber hover:bg-pub-gold text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Find a Location
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="border-2 border-white text-white hover:bg-white hover:text-pub-brown px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}
