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
      "pub-favorites": "Pub Favorites",
      ales: "Ales & Beers",
      wines: "Wines & Spirits",
      spirits: "Wines & Spirits",
      soft: "Soft Drinks",
      traditional: "Traditional Desserts",
      cheese: "Cheese Selection"
    };
    return titles[subcategory] || subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pub-brown mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-pub-gray max-w-3xl mx-auto">
            Traditional British pub fare made with locally sourced ingredients and time-honored recipes.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-colors duration-200",
                activeCategory === category.id
                  ? "bg-pub-amber text-white"
                  : "bg-gray-200 text-pub-charcoal hover:bg-gray-300"
              )}
            >
              {category.label}
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
                          £{item.price}
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
                  {subcategory === "ales" && (
                    <img
                      src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                      alt="Craft beer taps"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  {(subcategory === "wines" || subcategory === "spirits") && (
                    <img
                      src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                      alt="Wine and spirits collection"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  {subcategory === "soft" && (
                    <img
                      src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                      alt="Soft drinks selection"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  )}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-pub-amber">£{item.price}</span>
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
                    £{item.price}
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
