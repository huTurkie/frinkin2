import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-pub-brown/60" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pub-amber/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-pub-gold/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {/* Logo/Brand Element */}
        <div className="mb-8">
          <div className="inline-block p-4 border-2 border-pub-amber rounded-full mb-4">
            <div className="w-16 h-16 bg-pub-amber rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
          </div>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-pub-cream">Toronto's</span>
          <span className="block text-pub-amber">Favorite Pub</span>
          <span className="block text-white">Experience</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Discover our collection of neighborhood pubs across Toronto offering exceptional ales, 
          hearty pub fare, and warm hospitality since 1987.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection("locations")}
            className="group bg-pub-amber hover:bg-pub-gold text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="mr-2">Find a Location</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="group border-2 border-white text-white hover:bg-white hover:text-pub-brown px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="mr-2">View Menu</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-pub-amber">5+</div>
            <div className="text-sm text-gray-300">Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pub-amber">37+</div>
            <div className="text-sm text-gray-300">Years Serving</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pub-amber">50+</div>
            <div className="text-sm text-gray-300">Menu Items</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
