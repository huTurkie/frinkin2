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
        name: "The Old Crown",
        address: "123 High Street, Cambridge CB1 2AB",
        phone: "+44 1223 123456",
        rating: "4.8",
        reviewCount: 127,
        status: "Open until 11:00 PM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 12:00 PM - 10:30 PM",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "The King's Head",
        address: "45 Market Square, Oxford OX1 3DH",
        phone: "+44 1865 234567",
        rating: "4.6",
        reviewCount: 89,
        status: "Open until 10:30 PM",
        hours: "Mon-Thu: 11:00 AM - 10:30 PM, Fri-Sat: 11:00 AM - 11:30 PM, Sun: 12:00 PM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "The Rose & Crown",
        address: "12 Village Green, Cotswolds GL54 1EN",
        phone: "+44 1451 345678",
        rating: "4.9",
        reviewCount: 156,
        status: "Open until 11:30 PM",
        hours: "Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM, Sun: 12:00 PM - 10:30 PM",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      }
    ];

    sampleLocations.forEach(location => this.createLocation(location));

    // Seed menu items
    const sampleMenuItems: InsertMenuItem[] = [
      // Food - Main Courses
      {
        name: "Traditional Fish & Chips",
        description: "Beer-battered cod with hand-cut chips, mushy peas, and tartar sauce",
        price: "14.95",
        category: "food",
        subcategory: "mains",
        image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Shepherd's Pie",
        description: "Slow-cooked lamb mince with vegetables, topped with creamy mashed potato",
        price: "13.50",
        category: "food",
        subcategory: "mains",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        name: "Bangers & Mash",
        description: "Local Cumberland sausages with buttery mashed potato and onion gravy",
        price: "12.95",
        category: "food",
        subcategory: "mains"
      },
      {
        name: "Steak & Kidney Pie",
        description: "Tender beef and kidney in rich gravy, encased in golden pastry",
        price: "15.95",
        category: "food",
        subcategory: "mains"
      },
      // Food - Pub Favorites
      {
        name: "Ploughman's Lunch",
        description: "Local cheeses, ham, pickles, crusty bread, and apple",
        price: "10.95",
        category: "food",
        subcategory: "pub-favorites"
      },
      {
        name: "Beef & Ale Casserole",
        description: "Slow-cooked beef in local ale with root vegetables",
        price: "16.50",
        category: "food",
        subcategory: "pub-favorites"
      },
      {
        name: "Sunday Roast",
        description: "Choice of roast beef, lamb, or chicken with Yorkshire pudding",
        price: "17.95",
        category: "food",
        subcategory: "pub-favorites"
      },
      // Drinks - Ales & Beers
      {
        name: "Firkin Bitter",
        description: "Our signature house bitter with hoppy finish",
        price: "4.20",
        category: "drinks",
        subcategory: "ales"
      },
      {
        name: "London Pride",
        description: "Classic English bitter with malty sweetness",
        price: "4.50",
        category: "drinks",
        subcategory: "ales"
      },
      {
        name: "Guest Ale",
        description: "Rotating selection of local craft ales",
        price: "4.80",
        category: "drinks",
        subcategory: "ales"
      },
      // Drinks - Wines & Spirits
      {
        name: "House Red Wine",
        description: "Smooth and fruity house selection",
        price: "5.50",
        category: "drinks",
        subcategory: "wines"
      },
      {
        name: "Single Malt Whisky",
        description: "Premium Scottish single malt selection",
        price: "6.20",
        category: "drinks",
        subcategory: "spirits"
      },
      {
        name: "Premium Gin & Tonic",
        description: "Craft gin with premium tonic and garnish",
        price: "7.50",
        category: "drinks",
        subcategory: "spirits"
      },
      // Drinks - Soft Drinks
      {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        price: "2.50",
        category: "drinks",
        subcategory: "soft"
      },
      {
        name: "Traditional Lemonade",
        description: "House-made traditional lemonade",
        price: "2.20",
        category: "drinks",
        subcategory: "soft"
      },
      {
        name: "Coffee & Tea",
        description: "Freshly brewed coffee or selection of teas",
        price: "2.80",
        category: "drinks",
        subcategory: "soft"
      },
      // Desserts
      {
        name: "Sticky Toffee Pudding",
        description: "Warm sponge pudding with toffee sauce and vanilla ice cream",
        price: "6.95",
        category: "desserts",
        subcategory: "traditional"
      },
      {
        name: "Apple Crumble",
        description: "Traditional apple crumble with custard or cream",
        price: "6.50",
        category: "desserts",
        subcategory: "traditional"
      },
      {
        name: "Cheese Board",
        description: "Selection of British cheeses with crackers and chutney",
        price: "8.95",
        category: "desserts",
        subcategory: "cheese"
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
