# Firkin Pubs - Restaurant Website

## Overview

This is a full-stack web application for Firkin Pubs, a Toronto-based pub chain. The application provides a modern, responsive website showcasing multiple pub locations across Toronto and the GTA, menus, events, and contact functionality. It's built using a React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence through Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom pub-themed color palette
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Data Validation**: Zod schemas with Drizzle integration
- **Development**: Hot module replacement with Vite integration

### Database Schema
The application uses four main entities:
- **Locations**: Pub location details (name, address, rating, hours, status) - Updated with real Toronto Firkin pub locations
- **Menu Items**: Food and drink offerings with categories and pricing
- **Events**: Pub events and entertainment (weekly, seasonal, special)
- **Contacts**: Customer contact form submissions with location selector

## Key Components

### Data Layer
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **Schema Definition**: Centralized in `shared/schema.ts` with Zod validation
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### API Layer
- **REST Endpoints**: 
  - `/api/locations` - Location management
  - `/api/menu` - Menu items with category filtering
  - `/api/events` - Event listings
  - `/api/contact` - Contact form submissions
- **Error Handling**: Centralized error middleware with structured responses
- **Request Logging**: Automatic API request/response logging

### Frontend Components
- **Page Components**: Home page with sectioned layout
- **UI Components**: Reusable shadcn/ui components with custom theming
- **Navigation**: Smooth scrolling navigation with mobile responsiveness
- **Forms**: Contact form with validation and toast notifications

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests and validate data
3. **Storage Layer**: Drizzle ORM manages database operations
4. **Response Flow**: JSON responses flow back through the same layers
5. **State Management**: TanStack Query handles caching, loading states, and error handling

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL) via `@neondatabase/serverless`
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Replit-specific tooling for cloud development

### Notable Features
- **Type Safety**: End-to-end TypeScript with shared schemas
- **Responsive Design**: Mobile-first approach with Tailwind utilities
- **Accessibility**: Radix UI ensures WCAG compliance
- **Performance**: Vite bundling with code splitting and tree shaking

## Deployment Strategy

### Development Environment
- **Platform**: Replit with auto-reload functionality
- **Database**: Automatically provisioned PostgreSQL instance
- **Port Configuration**: Express serves on port 5000, Vite dev server integration
- **Hot Reload**: Vite middleware for instant frontend updates

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server code to `dist/index.js`
- **Deployment**: Autoscale deployment target with build/start scripts
- **Database**: Production PostgreSQL with connection pooling

### Environment Configuration
- **Database URL**: Required environment variable for database connection
- **Development Mode**: NODE_ENV controls development vs production behavior
- **Static Serving**: Express serves built frontend assets in production

## Changelog

```
Changelog:
- June 19, 2025. Initial setup
- June 19, 2025. Updated to reflect Toronto-based Firkin Pubs locations
  - Added real Toronto pub locations (Yonge, Queen, King, Bloor, Danforth)
  - Updated contact information to Markham, ON corporate headquarters
  - Added location selector to contact form
  - Updated branding to reflect Toronto pub chain since 1987
- June 19, 2025. Implemented authentic Canadian pub menu with CAD pricing
  - Complete menu overhaul with Canadian pub staples
  - Changed currency from GBP (£) to CAD ($)
  - Added authentic items: Firkin Burger, Wings, Nachos, Caesar cocktails
  - Organized menu into proper categories: Mains, Appetizers, Salads, Beer, Wine, Cocktails
  - Updated menu descriptions to reflect Canadian pub offerings
- June 19, 2025. Enhanced frontend design with modern appeal
  - Redesigned hero section with gradient backgrounds and animated elements
  - Modernized navigation with backdrop blur and branded logo
  - Enhanced features section with 3D hover effects
  - Improved locations section with image animations
  - Added premium styling throughout with consistent gradients
- June 19, 2025. Integrated social media presence
  - Added authentic social media links: Instagram, X (Twitter), Facebook
  - Integrated social media in navigation (desktop and mobile)
  - Enhanced hero section with social media call-to-action
  - Updated footer with proper social media links
- June 20, 2025. Enhanced button styling with premium design
  - Redesigned all buttons with gradient backgrounds and 3D effects
  - Added hover animations including scale, translate, and shadow effects
  - Implemented consistent rounded-2xl corners and improved typography
  - Added interactive elements like loading states and progress indicators
  - Enhanced visual hierarchy with layered shadows and highlights
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```