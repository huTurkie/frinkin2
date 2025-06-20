import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@shared/schema";

type MenuCategory = "food" | "drinks" | "desserts";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("food");

  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu", activeCategory],
    enabled: !!activeCategory
  });

  const categories = [
    { id: "food" as MenuCategory, label: "Food Menu" },
    { id: "drinks" as MenuCategory, label: "Drinks Menu" },
    { id: "desserts" as MenuCategory, label: "Desserts" }
  ];

  const groupedItems = menuItems?.reduce((acc, item) => {
    const subcategory = item.subcategory || "other";
    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }
    acc[subcategory].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const getSubcategoryTitle = (subcategory: string) => {
    const titles: Record<string, string> = {
      mains: "Main Courses",
      appetizers: "Appetizers",
      salads: "Salads & Light Options",
      sandwiches: "Sandwiches",
      beer: "Beer",
      wine: "Wine",
      cocktails: "Cocktails",
      soft: "Non-Alcoholic",
      traditional: "Traditional Desserts"
    };
    return titles[subcategory] || subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-white to-pub-cream/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pub-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pub-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-pub-amber font-semibold tracking-wider uppercase text-sm">Taste the Difference</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pub-brown mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto leading-relaxed">
            Authentic Canadian pub fare made with locally sourced ingredients and classic recipes.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "group relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden",
                activeCategory === category.id
                  ? "bg-gradient-to-br from-pub-amber via-pub-gold to-pub-amber text-white shadow-2xl border-2 border-pub-gold/50"
                  : "bg-gradient-to-br from-white to-gray-50 text-pub-charcoal hover:from-pub-cream hover:to-white border-2 border-gray-200 hover:border-pub-amber/30"
              )}
            >
              {/* Gradient overlay for inactive buttons */}
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-pub-amber/0 via-pub-gold/0 to-pub-amber/0 group-hover:from-pub-amber/5 group-hover:via-pub-gold/10 group-hover:to-pub-amber/5 transition-all duration-500"></div>
              )}
              
              {/* Active button glow effect */}
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl"></div>
              )}
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center">
                {category.label}
                {activeCategory === category.id && (
                  <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </span>
              
              {/* Bottom highlight */}
              <div className={cn(
                "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-500",
                activeCategory === category.id
                  ? "w-3/4 bg-white/40"
                  : "w-0 bg-pub-amber group-hover:w-1/2"
              )}></div>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          {isLoading ? (
            <div className="text-center">
              <p className="text-pub-gray">Loading menu items...</p>
            </div>
          ) : activeCategory === "food" ? (
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {Object.entries(groupedItems || {}).map(([subcategory, items]) => (
                <div key={subcategory}>
                  <h3 className="font-playfair text-3xl font-semibold text-pub-brown mb-8">
                    {getSubcategoryTitle(subcategory)}
                  </h3>
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-pub-charcoal">
                            {item.name}
                          </h4>
                          <p className="text-pub-gray mt-1">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-semibold text-pub-amber ml-4">
                          ${item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Featured Food Images */}
              <div className="md:col-span-2 grid md:grid-cols-2 gap-8 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Traditional fish and chips"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Shepherd's pie"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ) : activeCategory === "drinks" ? (
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(groupedItems || {}).map(([subcategory, items]) => (
                <div key={subcategory} className="bg-pub-cream p-8 rounded-xl">
                  <h3 className="font-playfair text-2xl font-semibold text-pub-brown mb-6">
                    {getSubcategoryTitle(subcategory)}
                  </h3>
                  {subcategory === "beer" && (
                    <img
                      src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                      alt="Beer taps"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  {(subcategory === "wine" || subcategory === "cocktails") && (
                    <img
                      src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                      alt="Wine and cocktails"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  {subcategory === "soft" && (
                    <img
                      src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                      alt="Non-alcoholic drinks"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-pub-gray">{item.description}</div>
                        </div>
                        <span className="text-pub-amber font-semibold ml-4">${item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems?.map((item) => (
                <div key={item.id} className="bg-pub-cream p-6 rounded-xl">
                  <h3 className="font-playfair text-xl font-semibold text-pub-brown mb-2">
                    {item.name}
                  </h3>
                  <p className="text-pub-gray mb-4">
                    {item.description}
                  </p>
                  <span className="font-semibold text-pub-amber text-lg">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
