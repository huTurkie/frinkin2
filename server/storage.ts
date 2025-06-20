import { locations, menuItems, events, contacts, type Location, type InsertLocation, type MenuItem, type InsertMenuItem, type Event, type InsertEvent, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Locations
  getLocations(): Promise<Location[]>;
  getLocation(id: number): Promise<Location | undefined>;
  createLocation(location: InsertLocation): Promise<Location>;
  
  // Menu Items
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  createMenuItem(menuItem: InsertMenuItem): Promise<MenuItem>;
  
  // Events
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private locations: Map<number, Location>;
  private menuItems: Map<number, MenuItem>;
  private events: Map<number, Event>;
  private contacts: Map<number, Contact>;
  private currentLocationId: number;
  private currentMenuItemId: number;
  private currentEventId: number;
  private currentContactId: number;

  constructor() {
    this.locations = new Map();
    this.menuItems = new Map();
    this.events = new Map();
    this.contacts = new Map();
    this.currentLocationId = 1;
    this.currentMenuItemId = 1;
    this.currentEventId = 1;
    this.currentContactId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed locations
    const sampleLocations: InsertLocation[] = [
      {
        name: "Firkin on Yonge",
        address: "5165 Yonge St, North York, ON M2N 5P5",
        phone: "(416) 222-3547",
        rating: "4.3",
        reviewCount: 245,
        status: "Open until 11:00 PM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 11:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Firkin on Queen",
        address: "539 Queen St W, Toronto, ON M5V 2B4",
        phone: "(416) 504-3836",
        rating: "4.1",
        reviewCount: 312,
        status: "Open until 12:00 AM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 11:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Firkin on King",
        address: "749 King St W, Toronto, ON M5V 1N3",
        phone: "(416) 504-3470",
        rating: "4.2",
        reviewCount: 189,
        status: "Open until 11:30 PM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 11:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Firkin on Bloor",
        address: "488 Bloor St W, Toronto, ON M5S 1Y3",
        phone: "(416) 928-0822",
        rating: "4.0",
        reviewCount: 156,
        status: "Open until 11:00 PM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 11:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Firkin on Danforth",
        address: "393 Danforth Ave, Toronto, ON M4K 1P1",
        phone: "(416) 778-4424",
        rating: "4.4",
        reviewCount: 203,
        status: "Open until 11:00 PM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 11:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      }
    ];

    sampleLocations.forEach(location => this.createLocation(location));

    // Seed menu items - Authentic Canadian Pub Menu
    const sampleMenuItems: InsertMenuItem[] = [
      // Food - Mains
      {
        name: "Fish & Chips",
        description: "Beer battered haddock with hand-cut fries, coleslaw, and tartar sauce",
        price: "18.99",
        category: "food",
        subcategory: "mains",
        image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Firkin Burger",
        description: "8oz certified Angus beef patty, bacon, cheese, lettuce, tomato, onion, pickle, served with fries",
        price: "17.99",
        category: "food",
        subcategory: "mains",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Steak & Kidney Pie",
        description: "Traditional pie filled with tender beef and kidney in rich gravy, served with mashed potatoes",
        price: "19.99",
        category: "food",
        subcategory: "mains",
        image: null
      },
      {
        name: "Bangers & Mash",
        description: "Traditional British sausages with mashed potatoes and onion gravy",
        price: "16.99",
        category: "food",
        subcategory: "mains",
        image: null
      },
      {
        name: "Shepherd's Pie",
        description: "Ground lamb with vegetables topped with mashed potatoes and cheese",
        price: "18.99",
        category: "food",
        subcategory: "mains",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Chicken Tikka Masala",
        description: "Tender chicken in creamy tomato curry sauce, served with basmati rice and naan",
        price: "19.99",
        category: "food",
        subcategory: "mains",
        image: null
      },
      {
        name: "Beer Battered Chicken",
        description: "Crispy beer battered chicken breast with honey mustard dip and fries",
        price: "17.99",
        category: "food",
        subcategory: "mains",
        image: null
      },
      // Food - Appetizers
      {
        name: "Wings",
        description: "1 lb chicken wings with choice of sauce: hot, mild, BBQ, honey garlic, or salt & pepper",
        price: "14.99",
        category: "food",
        subcategory: "appetizers",
        image: null
      },
      {
        name: "Nachos",
        description: "Tortilla chips loaded with cheese, jalapeños, tomatoes, green onions, sour cream, and salsa",
        price: "13.99",
        category: "food",
        subcategory: "appetizers",
        image: null
      },
      {
        name: "Potato Skins",
        description: "Crispy potato skins loaded with bacon, cheese, and green onions, served with sour cream",
        price: "11.99",
        category: "food",
        subcategory: "appetizers",
        image: null
      },
      {
        name: "Mozzarella Sticks",
        description: "Golden fried mozzarella sticks served with marinara sauce",
        price: "10.99",
        category: "food",
        subcategory: "appetizers",
        image: null
      },
      // Food - Salads & Lighter Options
      {
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, bacon bits, parmesan cheese, croutons, and Caesar dressing",
        price: "12.99",
        category: "food",
        subcategory: "salads",
        image: null
      },
      {
        name: "Chicken Caesar Wrap",
        description: "Grilled chicken, romaine lettuce, parmesan, and Caesar dressing in a flour tortilla",
        price: "14.99",
        category: "food",
        subcategory: "salads",
        image: null
      },
      {
        name: "Club Sandwich",
        description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo, served with fries",
        price: "15.99",
        category: "food",
        subcategory: "sandwiches",
        image: null
      },
      // Drinks - Beer
      {
        name: "Canadian",
        description: "Classic Canadian lager - smooth and refreshing",
        price: "6.50",
        category: "drinks",
        subcategory: "beer",
        image: null
      },
      {
        name: "Guinness",
        description: "Rich Irish stout with creamy head",
        price: "7.25",
        category: "drinks",
        subcategory: "beer",
        image: null
      },
      {
        name: "Steam Whistle",
        description: "Premium Toronto pilsner",
        price: "6.75",
        category: "drinks",
        subcategory: "beer",
        image: null
      },
      {
        name: "Stella Artois",
        description: "Belgian lager with crisp finish",
        price: "6.75",
        category: "drinks",
        subcategory: "beer",
        image: null
      },
      {
        name: "Keith's IPA",
        description: "Maritime India Pale Ale with hoppy character",
        price: "6.50",
        category: "drinks",
        subcategory: "beer",
        image: null
      },
      // Drinks - Wine
      {
        name: "House Red Wine",
        description: "6oz glass of our featured red wine",
        price: "8.50",
        category: "drinks",
        subcategory: "wine",
        image: null
      },
      {
        name: "House White Wine",
        description: "6oz glass of our featured white wine",
        price: "8.50",
        category: "drinks",
        subcategory: "wine",
        image: null
      },
      {
        name: "Pinot Grigio",
        description: "Light and crisp Italian white wine",
        price: "9.50",
        category: "drinks",
        subcategory: "wine",
        image: null
      },
      // Drinks - Cocktails
      {
        name: "Caesar",
        description: "Canada's national cocktail with vodka, clamato, and spices",
        price: "9.99",
        category: "drinks",
        subcategory: "cocktails",
        image: null
      },
      {
        name: "Rye & Ginger",
        description: "Canadian rye whisky with ginger ale",
        price: "8.99",
        category: "drinks",
        subcategory: "cocktails",
        image: null
      },
      {
        name: "Old Fashioned",
        description: "Classic whisky cocktail with bitters and orange",
        price: "11.99",
        category: "drinks",
        subcategory: "cocktails",
        image: null
      },
      // Drinks - Non-Alcoholic
      {
        name: "Soft Drinks",
        description: "Coke, Pepsi, Sprite, Orange, Root Beer",
        price: "3.50",
        category: "drinks",
        subcategory: "soft",
        image: null
      },
      {
        name: "Coffee",
        description: "Freshly brewed regular or decaf",
        price: "3.25",
        category: "drinks",
        subcategory: "soft",
        image: null
      },
      {
        name: "Hot Tea",
        description: "Selection of premium teas",
        price: "3.25",
        category: "drinks",
        subcategory: "soft",
        image: null
      },
      // Desserts
      {
        name: "Sticky Toffee Pudding",
        description: "Warm sponge cake with toffee sauce and vanilla ice cream",
        price: "8.99",
        category: "desserts",
        subcategory: "traditional",
        image: null
      },
      {
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie with vanilla ice cream and chocolate sauce",
        price: "7.99",
        category: "desserts",
        subcategory: "traditional",
        image: null
      },
      {
        name: "Apple Crisp",
        description: "Traditional apple crisp with cinnamon and vanilla ice cream",
        price: "7.99",
        category: "desserts",
        subcategory: "traditional",
        image: null
      }
    ];

    sampleMenuItems.forEach(item => this.createMenuItem(item));

    // Seed events
    const sampleEvents: InsertEvent[] = [
      {
        title: "Live Music Nights",
        description: "Enjoy acoustic sessions with local musicians every Friday evening from 8 PM.",
        schedule: "Every Friday, 8:00 PM",
        type: "weekly",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Quiz Night",
        description: "Test your knowledge with our weekly quiz. Prizes for the winning team!",
        schedule: "Every Wednesday, 7:30 PM",
        type: "weekly",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Holiday Celebrations",
        description: "Join us for special holiday menus, decorations, and festive atmosphere.",
        schedule: "Check calendar for dates",
        type: "seasonal",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      }
    ];

    sampleEvents.forEach(event => this.createEvent(event));
  }

  // Locations
  async getLocations(): Promise<Location[]> {
    return Array.from(this.locations.values());
  }

  async getLocation(id: number): Promise<Location | undefined> {
    return this.locations.get(id);
  }

  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const id = this.currentLocationId++;
    const location: Location = { ...insertLocation, id };
    this.locations.set(id, location);
    return location;
  }

  // Menu Items
  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.category === category);
  }

  async createMenuItem(insertMenuItem: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentMenuItemId++;
    const menuItem: MenuItem = { ...insertMenuItem, id };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
